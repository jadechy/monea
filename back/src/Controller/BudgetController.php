<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

use App\DTO\BudgetDTO;
use App\DTO\CategoryCalcDTO;
use App\Entity\Groupe;
use App\Repository\BudgetRepository;
use App\Repository\GroupeRepository;
use App\Repository\CategoryRepository;
use App\Repository\ExpenseRepository;

#[AsController]
class BudgetController extends AbstractController
{

    public function __construct(private BudgetRepository $budgetRepository, private GroupeRepository $groupeRepository, private ExpenseRepository $expenseRepository, private CategoryRepository $categoryRepository, private SerializerInterface $serializer) {}

    private function computeTotalBudgetForGroup(Groupe $groupe, \DateTimeInterface $monthStart): float
    {
        $categories = $this->categoryRepository->findBy(['groupe' => $groupe]);

        $total = 0;
        foreach ($categories as $category) {
            $budgetCategory = $this->budgetRepository->findBudgetByCategoryAndDate($category->getId(), $monthStart);
            if ($budgetCategory) {
                $total += $budgetCategory->getAmount();
            }
        }

        return $total;
    }

    public function getBudget(string $groupeId, $monthStart)
    {
        $groupe = $this->groupeRepository->find($groupeId);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);
        $amount = $this->computeTotalBudgetForGroup($groupe, $date);

        return $this->json([
            'amount' => $amount
        ]);
    }

    public function getRemainingBudget(string $groupeId, $monthStart)
    {
        $groupe = $this->groupeRepository->find($groupeId);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);
        $budgetAmount = $this->computeTotalBudgetForGroup($groupe, $date);

        $start = (clone $date)->modify('first day of this month')->setTime(0, 0, 0);
        $end = (clone $date)->modify('last day of this month')->setTime(23, 59, 59);

        $expenses = $this->expenseRepository->findExpensesByGroupeBetweenDates($groupeId, $start, $end);
        $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

        $amount = $budgetAmount - $totalExpenses;

        return $this->json([
            'amount' => $amount
        ]);
    }

    public function getBudgetByGroupe(string $groupeId, string $monthStart)
    {
        $groupe = $this->groupeRepository->find($groupeId);
        $categories = $this->categoryRepository->findBy(['groupe' => $groupe]);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $budgets = [];
        foreach ($categories as $category) {
            $budgetCategory = $this->budgetRepository->findBudgetByCategoryAndDate($category->getId(), $date);
            if ($budgetCategory) {
                $budgets[] = new BudgetDTO($budgetCategory);
            }
        }

        $json = $this->serializer->serialize($budgets, 'json', ['groups' => ['budget:read']]);

        return new JsonResponse($json, 200, [], true);
    }

    public function getRemainingBudgetList(string $groupeId, string $monthStart)
    {
        $groupe = $this->groupeRepository->find($groupeId);
        $categories = $this->categoryRepository->findBy(['groupe' => $groupe]);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $budgets = [];
        foreach ($categories as $category) {
            $budgetCategory = $this->budgetRepository->findBudgetByCategoryAndDate($category->getId(), $date);

            $categoryId = $category->getId();
            $expenses = $this->expenseRepository->findExpensesByCategoryAndDate($categoryId, $date);
            $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

            if ($budgetCategory) {
                $amount = $budgetCategory->getAmount() - $totalExpenses;

                $budgets[] = new BudgetDTO($budgetCategory, $amount);
            }
        }

        $json = $this->serializer->serialize($budgets, 'json', ['groups' => ['budget:read']]);

        return new JsonResponse($json, 200, [], true);
    }

    public function getRemainingBudgetByGroupAndYear(string $groupeId, int $year)
    {

        $budgetsData = $this->budgetRepository->findBudgetByGroupAndYear($groupeId, $year);

        $expensesData = $this->expenseRepository->findExpensesByGroupAndYear($groupeId, $year);

        $expensesByMonth = [];
        $expensesByMonthCategory = [];

        foreach ($expensesData as $expense) {
            $month = $expense['month'];
            $amount = $expense['totalAmount'];

            $expensesByMonth[$month] = ($expensesByMonth[$month] ?? 0) + $amount;

            $expensesByMonthCategory[$month][] = new CategoryCalcDTO(
                $expense['categoryId'],
                $expense['categoryLabel'],
                $expense['categoryColor'],
                $amount
            );
        }

        $result = [];

        foreach ($budgetsData as $budget) {
            $month = $budget['month'];
            $budgetAmount = $budget['totalAmount'];
            $expenseAmount = $expensesByMonth[$month] ?? 0;
            $remaining = round($budgetAmount - $expenseAmount, 2);

            $categories = $expensesByMonthCategory[$month] ?? [];

            $result[$month] = [
                'remaining' => $remaining,
                'categories' => $categories,
            ];
        }

        return $this->json($result, 200, [], ['json_encode_options' => JSON_PRETTY_PRINT]);
    }

    public function getBudgetByCategory(string $categoryId)
    {
        $budgetsData = $this->budgetRepository->findBudgetByCategory($categoryId);

        $budgets = array_map(fn($budget) => new BudgetDTO($budget), $budgetsData);

        $json = $this->serializer->serialize($budgets, 'json', ['groups' => ['budget:read']]);

        return new JsonResponse($json, 200, [], true);
    }

    public function getBudgetByCategoryAndMonth(string $categoryId, string $monthStart): JsonResponse
    {
        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $budgetData = $this->budgetRepository->findBudgetByCategoryAndDate($categoryId, $date);

        if ($budgetData) {
            $budgetDTO = new BudgetDTO($budgetData);

            $json = $this->serializer->serialize($budgetDTO, 'json', ['groups' => ['budget:read']]);

            return new JsonResponse($json, 200, [], true);
        }

        return new JsonResponse(null, 200);
    }

    public function getRemainingBudgetByCategoryAndMonth(string $categoryId, string $monthStart): JsonResponse
    {
        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $category = $this->categoryRepository->find($categoryId);
        $budget = $this->budgetRepository->findOneBy(['category' => $category, 'monthStart' => $date]);

        $totalBudget = $budget->getAmount();

        $expenses = $this->expenseRepository->findExpensesByCategoryAndDate($categoryId, $date);
        $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

        $amount = $totalBudget - $totalExpenses;

        return $this->json([
            'amount' => $amount
        ]);
    }
}
