<?php

namespace App\Controller;

use App\DTO\BudgetDTO;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

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

    public function getBudget(string $groupeId, $monthStart): BudgetDTO
    {
        $groupe = $this->groupeRepository->find($groupeId);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);
        $amount = $this->computeTotalBudgetForGroup($groupe, $date);

        return new BudgetDTO($amount);
    }

    public function getRemainingBudget(string $groupeId, $monthStart): BudgetDTO
    {
        $groupe = $this->groupeRepository->find($groupeId);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);
        $budgetAmount = $this->computeTotalBudgetForGroup($groupe, $date);

        $expenses = $this->expenseRepository->findExpensesByGroupeAndDate($groupeId, $date);
        $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

        $amount = $budgetAmount - $totalExpenses;

        return new BudgetDTO($amount);
    }
}
