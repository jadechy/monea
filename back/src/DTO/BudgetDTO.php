<?php

namespace App\DTO;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\BudgetController;

#[ApiResource(operations: [
    new Get(
        uriTemplate: '/budgets/{groupeId}/{month}',
        controller: BudgetController::class . '::getBudget',
        read: false,
        name: 'budget_get_total',
        normalizationContext: ['groups' => ['budget:read']]
    ),
    new Get(
        uriTemplate: '/budgets/{groupeId}/{month}/remaining',
        controller: BudgetController::class . '::getRemainingBudget',
        read: false,
        name: 'budget_get_remaining',
        normalizationContext: ['groups' => ['budget:read']]
    ),
])]
class BudgetDTO
{
    #[Groups(['budget:read'])]
    public float $amount;

    public function __construct(float $amount)
    {
        $this->amount = $amount;
    }
}