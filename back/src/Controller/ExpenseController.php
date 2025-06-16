<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

use App\DTO\ExpenseDTO;
use App\Repository\GroupeRepository;
use App\Repository\ExpenseRepository;
use App\Repository\CategoryRepository;

#[AsController]
class ExpenseController extends AbstractController
{
    public function __construct(private GroupeRepository $groupeRepository, private ExpenseRepository $expenseRepository, private CategoryRepository $categoryRepository,private SerializerInterface $serializer)
    {
    }

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

        krsort($expenses); // Trie par date descendante

        return $expenses;
    }

    public function getAllExpenseByGroup($groupeId)
    {
        $groupe = $this->groupeRepository->find($groupeId);

        $expensesData = $this->expenseRepository->findBy(['groupe' => $groupe]);

        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);

        return new JsonResponse($json, 200, [], true);
    }

    public function getAllExpenseByGroupAndDate($groupeId, $monthStart)
    {
        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $expensesData = $this->expenseRepository->findExpensesByGroupeAndDate($groupeId, $date);

        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);

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

        return new JsonResponse($json, 200, [], true);
    }
}
