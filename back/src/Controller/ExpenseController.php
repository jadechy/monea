<?php

namespace App\Controller;

use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

use App\DTO\ExpenseDTO;
use App\Entity\Category;
use App\Entity\Expense;
use App\Entity\Groupe;
use App\Entity\User;
use App\Repository\GroupeRepository;
use App\Repository\ExpenseRepository;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class ExpenseController extends AbstractController
{
    public function __construct(
        private GroupeRepository $groupeRepository,
        private ExpenseRepository $expenseRepository,
        private CategoryRepository $categoryRepository,
        private SerializerInterface $serializer,
        private ValidatorInterface $validator,
        private EntityManagerInterface $em,

    ) {}

    /**
     * Regroupe les dépenses par date (Y-m-d), trie par date descendante.
     *
     * @param Expense[] $expensesData
     * @return array<string, ExpenseDTO[]>
     */
    private function createExpenseArray(array $expensesData): array
    {
        $expenses = [];

        foreach ($expensesData as $expense) {
            $date = $expense->getSpentAt()->format('Y-m-d');

            if (!isset($expenses[$date])) {
                $expenses[$date] = [];
            }

            $expenses[$date][] = new ExpenseDTO($expense);
        }

        krsort($expenses);

        return $expenses;
    }


    public function getExpenseById($id): JsonResponse
    {
        $expense = $this->expenseRepository->find($id);
        if (!$expense) {
            return new JsonResponse(
                ['message' => 'Dépense non trouvée.'],
                Response::HTTP_NOT_FOUND
            );
        }
        $expenseDTO = new ExpenseDTO($expense);
        $json = $this->serializer->serialize($expenseDTO, 'json', [
            'groups' => ['expense:read'],
        ]);

        return new JsonResponse(
            $json,
            Response::HTTP_OK,
            [],
            true
        );
    }

    public function getAllExpenseByGroup($groupeId): JsonResponse
    {
        if ($groupeId <= 0) {
            return new JsonResponse(['error' => 'ID de groupe invalide'], Response::HTTP_BAD_REQUEST);
        }
        $groupe = $this->groupeRepository->find($groupeId);
        if (!$groupe) {
            return new JsonResponse(['error' => 'Groupe not found'], Response::HTTP_NOT_FOUND);
        }
        $expensesData = $this->expenseRepository->findBy(['groupe' => $groupe]);

        $expenses = $this->createExpenseArray($expensesData);


        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);
        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, Response::HTTP_OK, [], true);
    }

    public function getAllExpenseByGroupAndMonth($groupeId, $monthStart)
    {
        $date = new \DateTimeImmutable($monthStart);
        $start = (clone $date)->modify('first day of this month')->setTime(0, 0, 0);
        $end = (clone $date)->modify('last day of this month')->setTime(23, 59, 59);

        $expensesData = $this->expenseRepository->findExpensesByGroupeBetweenDates($groupeId, $start, $end);
        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);
        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, 200, [], true);
    }

    public function getAllExpenseByGroupAndDay($groupeId, $day)
    {
        $date = (new \DateTimeImmutable($day))->setTime(0, 0);

        $expensesData = $this->expenseRepository->findExpensesByGroupeAndDay($groupeId, $date);

        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);

        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, 200, [], true);
    }

    public function getAllExpenseByGroupAndWeek($groupeId, $day)
    {
        $date = new \DateTimeImmutable($day);

        $monday = $date->modify('monday this week')->setTime(0, 0, 0);
        $sunday = $date->modify('sunday this week')->setTime(23, 59, 59);

        $expensesData = $this->expenseRepository->findExpensesByGroupeBetweenDates($groupeId, $monday, $sunday);

        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);

        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, 200, [], true);
    }

    public function getAllExpensesByCategory($categoryId)
    {
        $category = $this->categoryRepository->find($categoryId);

        $expensesData = $this->expenseRepository->findBy(['category' => $category]);

        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);

        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, 200, [], true);
    }

    public function getAllExpensesByCategoryAndMonth($categoryId, $monthStart)
    {
        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $expensesData = $this->expenseRepository->findExpensesByCategoryAndDate($categoryId, $date);

        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);

        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, 200, [], true);
    }
    public function postExpense($data): JsonResponse
    {
        $group = $this->em->getRepository(Groupe::class)->find($data->groupId);
        $category = $this->em->getRepository(Category::class)->find($data->categoryId);
        $creator = $this->em->getRepository(User::class)->find($data->authorId);

        if (!$group || !$category || !$creator) {
            return $this->json(['error' => 'Références invalides'], Response::HTTP_BAD_REQUEST);
        }
        $expense = new Expense();
        $expense->setTitle($data->title);
        $expense->setGroupe($group);
        $expense->setAmount($data->amount);
        $expense->setCreator($creator);
        $expense->setSpentAt(new \DateTimeImmutable($data->spentAt));
        $expense->setCreatedAt(new \DateTimeImmutable());
        $expense->setCategory($category);
        $errors = $this->validator->validate($expense);
        if (count($errors) > 0) {
            return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
        }

        $this->em->persist($expense);
        $this->em->flush();

        return $this->json(['message' => 'Dépense créé avec succès'], Response::HTTP_CREATED);
    }

    public function updateExpense(int $id, Request $request): JsonResponse
    {
        $expense = $this->em->getRepository(Expense::class)->find($id);

        if (!$expense) {
            return $this->json(['error' => 'Dépense introuvable'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent());

        $group = $this->em->getRepository(Groupe::class)->find($data->groupId ?? $expense->getGroupe()->getId());
        $category = $this->em->getRepository(Category::class)->find($data->categoryId ?? $expense->getCategory()->getId());
        $creator = $this->em->getRepository(User::class)->find($data->authorId ?? $expense->getCreator()->getId());

        if (!$group || !$category || !$creator) {
            return $this->json(['error' => 'Références invalides'], Response::HTTP_BAD_REQUEST);
        }

        $expense->setTitle($data->title ?? $expense->getTitle());
        $expense->setAmount($data->amount ?? $expense->getAmount());
        $expense->setSpentAt(new \DateTimeImmutable($data->spentAt ?? $expense->getSpentAt()->format('Y-m-d')));
        $expense->setGroupe($group);
        $expense->setCategory($category);
        $expense->setCreator($creator);

        $errors = $this->validator->validate($expense);
        if (count($errors) > 0) {
            return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
        }

        $this->em->flush();

        return $this->json(['message' => 'Dépense mise à jour avec succès']);
    }
}
