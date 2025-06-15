<?php

namespace App\DTO;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\BudgetController;
use App\Entity\Budget;

#[ApiResource(operations: [
    new Get(
        uriTemplate: '/budgets/{groupeId}/{monthStart}/list',
        controller: BudgetController::class . '::getBudgetByGroupe',
        read: false,
        name: 'budget_list',
        normalizationContext: ['groups' => ['budget:read']]
    ),
    new Get(
        uriTemplate: '/budgets/{categoryId}/category',
        controller: BudgetController::class . '::getBudgetByCategory',
        uriVariables: [
            'categoryId' => new Link(fromClass: null, fromProperty: 'categoryId')
        ],
        read: false,
        name: 'budget_category',
        requirements: ['categoryId' => '\d+'],
        normalizationContext: ['groups' => ['budget:read']]
    ),
])]
class BudgetDTO
{
    #[Groups(['budget:read'])]
    public int $id;

    #[Groups(['budget:read'])]
    public float $amount;

    #[Groups(['budget:read'])]
    public string $monthStart;

    #[Groups(['budget:read'])]
    public array $category;

    public function __construct(Budget $budget)
    {
        $category = $budget->getCategory();

        $this->id = $budget->getId();
        $this->amount = $budget->getAmount();
        $this->monthStart = $budget->getMonthStart()->format('Y-m-d');

        $this->category = [
            'categoryId' => $category->getId(),
            'label' => $category->getLabel(),
            'color' => $category->getColor()
        ];
    }
}