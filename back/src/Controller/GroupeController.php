<?php

namespace App\Controller;

use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validator\ValidatorInterface;

use App\DTO\GroupeDTO;
use App\DTO\GroupInputDTO;
use App\DTO\MemberDTO;
use App\Entity\Budget;
use App\Entity\Category;
use App\Entity\Groupe;
use App\Entity\User;
use App\Entity\Member;
use App\Enum\ColorEnum;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use App\Repository\BudgetRepository;
use App\Repository\GroupeRepository;
use App\Repository\MemberRepository;
use App\Service\FileUploader;
use Symfony\Component\HttpFoundation\File\UploadedFile;

#[AsController]
class GroupeController extends AbstractController
{
    public function __construct(
        private BudgetRepository $budgetRepository,
        private GroupeRepository $groupeRepository,
        private MemberRepository $memberRepository,
        private EntityManagerInterface $em,
        private ValidatorInterface $validator,
    ) {}

    public function getAllGroupesByUser(): JsonResponse
    {
        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }
        /** @var Groupe[] $groupesData */
        $groupesData = $this->groupeRepository->findGroupesByUser($user->getId());

        $groupes = array_map(
            fn($groupe) => new GroupeDTO($groupe, $user),
            $groupesData
        );
        return $this->json($groupes, Response::HTTP_OK, [], ['groups' => ['groupe:read']]);
    }

    public function postGroup(Request $request): JsonResponse
    {
        $jsonData = json_decode($request->getContent(), false);
        try {
            /** @var \stdClass $jsonData */
            $data = (new GroupInputDTO())->fromObject($jsonData);
        } catch (\InvalidArgumentException $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }
        $group = new Groupe();
        $group->setName($data->name)
            ->setType($data->type)
            ->setColor($data->color)
            ->setCreatedAt(new \DateTimeImmutable());
        if ($data->categories) {
            foreach ($data->categories as $categoryInput) {
                $category = new Category();
                $category->setLabel($categoryInput->label)
                    ->setColor($categoryInput->color)
                    ->setGroupe($group);
                $errors = $this->validator->validate($category);
                if (count($errors) > 0) {
                    return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
                }
                $this->em->persist($category);
                $group->addCategory($category);
            };
        }

        $category = new Category();
        $category->setLabel("default")
            ->setColor(ColorEnum::Gray)
            ->setGroupe($group);
        $this->em->persist($category);
        $group->addCategory($category);

        $errors = $this->validator->validate($group);
        if (count($errors) > 0) {
            return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
        }

        $this->em->persist($group);
        $this->em->flush();

        $member = new Member();
        $member->setRole(MemberRoleEnum::AUTHOR)
            ->setAddOn(new \DateTimeImmutable())
            ->setStatus(MemberStatusEnum::ACCEPTED)
            ->setGroupe($group)
            ->setIndividual($user);

        $this->em->persist($member);
        $this->em->flush();

        return $this->json(['message' => 'Groupe créé avec succès'], Response::HTTP_CREATED);
    }

    public function editGroup(Request $request, Groupe $group): JsonResponse
    {
        $jsonData = json_decode($request->getContent(), false);
        try {
            /** @var \stdClass $jsonData */
            $data = (new GroupInputDTO())->fromObject($jsonData);
        } catch (\InvalidArgumentException $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }

        $this->denyAccessUnlessGranted('modifier', $group);

        $group->setName($data->name ?? $group->getName())
            ->setType(isset($data->type) ? $data->type : $group->getType())
            ->setColor(isset($data->color) ? $data->color : $group->getColor());
        $sentCategoryIds = [];

        foreach ($data->categories ?? [] as $categoryInput) {
            if (isset($categoryInput->id)) {
                /** @var Category $existingCategory */
                $existingCategory = $group->getCategories()->filter(
                    fn($c) => $c->getId() === $categoryInput->id
                )->first();

                $existingCategory->setLabel($categoryInput->label ?? $existingCategory->getLabel())
                    ->setColor(
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
                $newCategory->setLabel($categoryInput->label)
                    ->setColor(isset($categoryInput->color) ? $categoryInput->color : ColorEnum::Gray)
                    ->setGroupe($group);
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
                        $newDefaultBudget->setAmount($budget->getAmount())
                            ->setCategory($categoryDefault)
                            ->setMonthStart($budget->getMonthStart());
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

    public function deleteGroup(int $id): JsonResponse
    {
        $groupe = $this->groupeRepository->find($id);

        if (!$groupe) {
            return $this->json(['error' => 'Groupe introuvable'], Response::HTTP_NOT_FOUND);
        }

        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }

        $member = $this->memberRepository->findOneBy(['groupe' => $groupe, 'individual' => $user]);
        if (!$member) {
            return new JsonResponse(['error' => 'Vous n\'êtes pas un membre du groupe.'], Response::HTTP_NOT_FOUND);
        }

        if ($member->getRole() !== MemberRoleEnum::AUTHOR) {
            throw $this->createAccessDeniedException('Vous n\'avez pas les droits pour modifier');
        }

        $this->em->remove($groupe);
        $this->em->flush();

        return new JsonResponse(['message' => 'Groupe supprimé avec succès']);
    }

    public function membersByGroup(int $id): JsonResponse
    {
        $group = $this->groupeRepository->find($id);
        if (!$group) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        /** @var Groupe $group */
        $members = $group->getMembers();
        $membersDTO = [];
        foreach ($members as $member) {
            $memberDTO = new MemberDTO($member);
            $role = $memberDTO->role->value;
            $status = $memberDTO->status->value;
            if ($status === MemberStatusEnum::ACCEPTED->value &&
                in_array($role, [
                    MemberRoleEnum::AUTHOR->value,
                    MemberRoleEnum::MEMBER->value,
                    MemberRoleEnum::ADMIN->value,
                ], true)
            ) {
                $membersDTO[] = $memberDTO;
            }
        }

        return $this->json(
            $membersDTO,
            Response::HTTP_OK,
            [],
            ['groups' => ['member:read', 'user:read']]
        );
    }

    public function uploadCoverGroup(int $id, Request $request, FileUploader $uploader): JsonResponse
    {
        $group = $this->groupeRepository->find($id);

        if (!$group) {
            return $this->json(['error' => 'Groupe introuvable'], Response::HTTP_NOT_FOUND);
        }
        $user = $this->getUser();
        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }

        $file = $request->files->get('picture');
        if (!$file) {
            return new JsonResponse(['error' => 'No file provided'], 400);
        }

        if ($user->getPicture()) {
            $oldPath = $uploader->getTargetDirectory() . '/' . basename((string) $group->getPicture());
            if (file_exists($oldPath)) {
                unlink($oldPath);
            }
        }
        /** @var UploadedFile $file */
        if (!in_array($file->getMimeType(), ['image/jpeg', 'image/png'])) {
            return new JsonResponse(['error' => 'Format non supporté'], 400);
        }
        if ($file->getSize() > 7 * 1024 * 1024) {
            return new JsonResponse(['error' => 'Fichier trop volumineux'], 400);
        }
        $filename = $uploader->upload($file, '/group');
        $group->setPicture('/uploads/group/' . $filename);
        $this->em->flush();

        return new JsonResponse(['picture' => $group->getPicture()]);
    }
}
