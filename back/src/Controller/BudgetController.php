<?php

namespace App\Controller;

use App\DTO\BudgetDTO;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

use App\Entity\Budget;
use App\Repository\BudgetRepository;
use App\Repository\GroupeRepository;
use App\Repository\ExpenseRepository;

#[AsController]
class BudgetController
{

    public function __construct(private BudgetRepository $budgetRepository, private GroupeRepository $groupeRepository, private ExpenseRepository $expenseRepository)
    {
    }

    public function getBudget(string $groupeId, int $month): BudgetDTO
    {
        $groupe = $this->groupeRepository->findOneBy(['id' => $groupeId]);
        $budget = $this->budgetRepository->findOneBy(['month' => $month , 'groupe' => $groupe]);

        return new BudgetDTO($budget->getAmount());
    }

    public function getRemainingBudget(string $groupeId, int $month): BudgetDTO
    {
        $groupe = $this->groupeRepository->findOneBy(['id' => $groupeId]);
        $budget = $this->budgetRepository->findOneBy(['month' => $month , 'groupe' => $groupe]);

        $expenses = $this->expenseRepository->findExpensesByGroupAndMonth($groupeId, $month);
        $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

        $amount = $budget->getAmount() - $totalExpenses;

        return new BudgetDTO($amount);
    }
}
