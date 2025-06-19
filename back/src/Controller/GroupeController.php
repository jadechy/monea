<?php

namespace App\Controller;

use App\DTO\GroupeDTO;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use App\Repository\BudgetRepository;
use App\Repository\GroupeRepository;
use App\Repository\ExpenseRepository;

#[AsController]
class GroupeController extends AbstractController
{
    public function __construct(private BudgetRepository $budgetRepository, private GroupeRepository $groupeRepository, private ExpenseRepository $expenseRepository) {}

    public function getAllGroupesByUser(int $userId): JsonResponse
    {
        $groupesData = $this->groupeRepository->findGroupesByUser($userId);

        $groupes = array_map(
            fn($groupe) => new GroupeDTO($groupe),
            $groupesData
        );

        return new JsonResponse($groupes, Response::HTTP_OK);
    }
}
