<?php

namespace App\Controller;

use App\DTO\GroupeDTO;
use App\DTO\GroupInputDTO;
use App\Entity\Budget;
use App\Entity\Category;
use App\Entity\Groupe;
use App\Entity\User;
use App\Enum\ColorEnum;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use App\Repository\BudgetRepository;
use App\Repository\GroupeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[AsController]
class GroupeController extends AbstractController
{
    public function __construct(
        private BudgetRepository $budgetRepository,
        private GroupeRepository $groupeRepository,
        private EntityManagerInterface $em,
        private ValidatorInterface $validator,

    ) {}

    public function getAllGroupesByUser(int $userId): JsonResponse
    {
        /** @var Groupe[] $groupesData */
        $groupesData = $this->groupeRepository->findGroupesByUser($userId);

        $groupes = array_map(
            fn($groupe) => new GroupeDTO($groupe),
            $groupesData
        );
        return $this->json($groupes, Response::HTTP_OK, [], ['groups' => ['groupe:read']]);
    }

    public function postGroup(Request $request): JsonResponse
    {
        $jsonData = json_decode($request->getContent(), false);
        try {
            $data = (new GroupInputDTO())->fromObject($jsonData);
        } catch (\InvalidArgumentException $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }
        $group = new Groupe();
        $group->setName($data->name);
        $group->setType($data->type);
        $group->setColor($data->color);
        $group->setCreator($user);
        $group->setCreatedAt(new \DateTimeImmutable());
        $group->setPicture("lalaal");
        if ($data->categories) {
            foreach ($data->categories as $categoryInput) {
                $category = new Category();
                $category->setLabel($categoryInput->label);
                $category->setColor($categoryInput->color);
                $category->setGroupe($group);
                $errors = $this->validator->validate($category);
                if (count($errors) > 0) {
                    return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
                }
                $this->em->persist($category);
                $group->addCategory($category);
            };
        }

        $category = new Category();
        $category->setLabel("default");
        $category->setColor(ColorEnum::Gray);
        $category->setGroupe($group);
        $this->em->persist($category);
        $group->addCategory($category);

        $errors = $this->validator->validate($group);
        if (count($errors) > 0) {
            return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
        }


        $this->em->persist($group);
        $this->em->flush();

        return $this->json(['message' => 'Groupe créé avec succès'], Response::HTTP_CREATED);
    }
    public function editGroup(Request $request, Groupe $group): JsonResponse
    {
        $jsonData = json_decode($request->getContent(), false);
        try {
            $data = (new GroupInputDTO())->fromObject($jsonData);
        } catch (\InvalidArgumentException $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }
        if ($group->getCreator() !== $user) {
            throw $this->createAccessDeniedException('Vous ne pouvez modifier que vos groupes');
        }

        $group->setName($data->name ?? $group->getName());
        $group->setType(isset($data->type) ? $data->type : $group->getType());
        $group->setColor(isset($data->color) ? $data->color : $group->getColor());
        $sentCategoryIds = [];

        foreach ($data->categories ?? [] as $categoryInput) {
            if (isset($categoryInput->id)) {
                /** @var Category $existingCategory */
                $existingCategory = $group->getCategories()->filter(
                    fn($c) => $c->getId() === $categoryInput->id
                )->first();

                $existingCategory->setLabel($categoryInput->label ?? $existingCategory->getLabel());
                $existingCategory->setColor(
                    isset($categoryInput->color)
                        ? $categoryInput->color
                        : $existingCategory->getColor()
                );

                $errors = $this->validator->validate($existingCategory);
                if (count($errors) > 0) {
                    return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
                }
                $sentCategoryIds[] = $existingCategory->getId();
            } else {

                $newCategory = new Category();
                $newCategory->setLabel($categoryInput->label);
                $newCategory->setColor(
                    isset($categoryInput->color) ? $categoryInput->color : ColorEnum::Gray
                );
                $newCategory->setGroupe($group);
                $errors = $this->validator->validate($newCategory);
                if (count($errors) > 0) {
                    return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
                }

                $this->em->persist($newCategory);
                $group->addCategory($newCategory);
                $this->em->flush();
                $sentCategoryIds[] = $newCategory->getId();
            }
        }
        foreach ($group->getCategories() as $category) {

            if (!in_array($category->getId(), $sentCategoryIds) && $category->getLabel() !== "default") {
                $categoryGroup = $category->getGroupe();


                $categoryDefault = $categoryGroup->getDefaultCategory();

                if (!$categoryDefault) {
                    throw new \LogicException("Default category not found");
                }

                foreach ($category->getBudgets() as $budget) {
                    $defaultBudget = $this->budgetRepository->findDefaultBudgetByGroupAndMonth($group->getId(), $budget->getMonthStart());

                    if ($defaultBudget !== null) {
                        $defaultBudget->setAmount($defaultBudget->getAmount() + $budget->getAmount());
                        $this->em->persist($defaultBudget);
                    } else {
                        $newDefaultBudget = new Budget();
                        $newDefaultBudget->setAmount($budget->getAmount());
                        $newDefaultBudget->setCategory($categoryDefault);
                        $newDefaultBudget->setMonthStart($budget->getMonthStart());
                        $this->em->persist($newDefaultBudget);
                    }
                    $this->em->remove($budget);
                }
                foreach ($category->getExpenses() as $expense) {
                    $categoryDefault->addExpense($expense);
                    $expense->setCategory($categoryDefault);
                    $this->em->persist($expense);
                }

                $this->em->remove($category);
            }
        }
        $errors = $this->validator->validate($group);
        if (count($errors) > 0) {
            return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
        }

        $this->em->persist($group);
        $this->em->flush();

        return $this->json(['message' => 'Groupe modifié avec succès'], Response::HTTP_OK);
    }
}
