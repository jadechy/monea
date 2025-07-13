<?php

namespace App\DTO;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\BudgetController;

#[ApiResource(operations: [
    new Get(
        uriTemplate: '/budget/{groupeId}/{monthStart}',
        controller: BudgetController::class . '::getBudget',
        read: false,
        name: 'budget_get_total',
        normalizationContext: ['groups' => ['budget:read']]
    ),
    new Get(
        uriTemplate: '/budget/{groupeId}/{monthStart}/remaining',
        controller: BudgetController::class . '::getRemainingBudget',
        read: false,
        name: 'budget_get_remaining',
        normalizationContext: ['groups' => ['budget:read']]
    ),
    new Get(
        uriTemplate: '/budget/{categoryId}/{monthStart}/remaining/category',
        controller: BudgetController::class . '::getRemainingBudgetByCategoryAndMonth',
        uriVariables: [
            'categoryId' => new Link(fromClass: null, fromProperty: 'categoryId'),
            'monthStart' => new Link(fromClass: null, fromProperty: 'monthStart'),
        ],
        read: false,
        name: 'budget_get_remaining_by_category',
        requirements: [
            'categoryId' => '\d+',
            'monthStart' => '\d{4}-\d{2}-\d{2}'
        ],
        normalizationContext: ['groups' => ['budget:read']]
    ),
    new GetCollection(
        uriTemplate: '/budget/{groupeId}/{year}/year/remaining/list',
        controller: BudgetController::class . '::getRemainingBudgetByGroupAndYear',
        read: false,
        name: 'budget_get_remaining_by_groupe_and_year',
        normalizationContext: ['groups' => ['budget:read']]
    ),
    new GetCollection(
        uriTemplate: '/budget/{groupeId}/{month}/month/remaining/list',
        controller: BudgetController::class . '::getRemainingBudgetByGroupAndMonth',
        read: false,
        name: 'budget_get_remaining_by_groupe_and_month',
        normalizationContext: ['groups' => ['budget:read']]
    ),
])]
class BudgetCalcDTO
{
    #[Groups(['budget:read'])]
    public float $amount;

    public function __construct(float $amount)
    {
        $this->amount = $amount;
    }
}
