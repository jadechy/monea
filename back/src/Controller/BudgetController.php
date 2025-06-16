<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

use App\DTO\BudgetCalcDTO;
use App\DTO\BudgetDTO;
use App\Entity\Budget;
use App\Entity\Groupe;
use App\Repository\BudgetRepository;
use App\Repository\GroupeRepository;
use App\Repository\CategoryRepository;
use App\Repository\ExpenseRepository;

#[AsController]
class BudgetController
{

    public function __construct(private BudgetRepository $budgetRepository, private GroupeRepository $groupeRepository, private ExpenseRepository $expenseRepository, private CategoryRepository $categoryRepository)
    {
    }

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

    public function getBudget(string $groupeId, $monthStart): BudgetCalcDTO
    {
        $groupe = $this->groupeRepository->find($groupeId);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);
        $amount = $this->computeTotalBudgetForGroup($groupe, $date);

        return new BudgetCalcDTO($amount);
    }

    public function getRemainingBudget(string $groupeId, $monthStart): BudgetCalcDTO
    {
        $groupe = $this->groupeRepository->find($groupeId);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);
        $budgetAmount = $this->computeTotalBudgetForGroup($groupe, $date);

        $expenses = $this->expenseRepository->findExpensesByGroupeAndDate($groupeId, $date);
        $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

        $amount = $budgetAmount - $totalExpenses;

        return new BudgetCalcDTO($amount);
    }

    public function getBudgetByGroupe(string $groupeId, string $monthStart)
    {
        $groupe = $this->groupeRepository->find($groupeId);
        $categories = $this->categoryRepository->findBy(['groupe' => $groupe]);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $budgets = [];
        foreach ($categories as $category) {
            $budgetCategory = $this->budgetRepository->findBudgetByCategoryAndDate($category->getId(), $monthStart);
            if($budgetCategory){
                $budgets[] = new BudgetDTO($budgetCategory);
            }
        }

        return $budgets;
    }

    public function getBudgetByCategory(string $categoryId)
    {
        $budgetsData = $this->budgetRepository->findBudgetByCategory($categoryId);

        $budgets = array_map(fn($budget) => new BudgetDTO($budget), $budgetsData);

        return $budgets;
    }

    public function getBudgetByCategoryAndMonth(string $categoryId, string $monthStart, SerializerInterface $serializer)
    {
        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $budgetData = $this->budgetRepository->findBudgetByCategoryAndDate($categoryId, $date);
       
        if ($budgetData) {
            $budgetDTO = new BudgetDTO($budgetData);

            $json = $serializer->serialize($budgetDTO, 'json', ['groups' => ['budget:read']]);

            return new JsonResponse($json, 200, [], true);
        }

        return new JsonResponse(null, 404);
    }

    public function getRemainingBudgetByCategoryAndMonth(string $categoryId, string $monthStart)
    {
        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $category = $this->categoryRepository->find($categoryId);
        $budget = $this->budgetRepository->findOneBy(['category' => $category, 'monthStart' => $date]);

        $totalBudget = $budget->getAmount();

        $expenses = $this->expenseRepository->findExpensesByCategoryAndDate($categoryId, $date);
        $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

        $amount = $totalBudget - $totalExpenses;

        return new BudgetCalcDTO($amount);
    }
}
