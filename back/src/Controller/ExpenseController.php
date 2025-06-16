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

#[AsController]
class ExpenseController extends AbstractController
{
    public function __construct(private GroupeRepository $groupeRepository, private ExpenseRepository $expenseRepository)
    {
    }

    public function getAllExpenseByGroup($groupeId)
    {
        $groupe = $this->groupeRepository->find($groupeId);

        $expensesData = $this->expenseRepository->findBy(['groupe' => $groupe]);

        $expenses = [];
        foreach ($expensesData as $expense){
            $date = $expense->getSpentAt()->format('Y-m-d');
            if (!isset($expenses[$date])) {
                $expenses[$date] = [];
            }
            $expenses[$date][] = new ExpenseDTO($expense);
        }

        return $expenses;
    }

    public function getAllExpenseByGroupAndDate($groupeId, $monthStart)
    {
        
    }
}
