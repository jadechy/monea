<?php

namespace App\DTO;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\BudgetController;
use App\Entity\Budget;

#[ApiResource(operations: [
    new GetCollection(
        uriTemplate: '/budgets/{groupeId}/{monthStart}/list',
        controller: BudgetController::class . '::getBudgetByGroupe',
        read: false,
        name: 'budget_list',
        normalizationContext: ['groups' => ['budget:read']]
    ),
    new GetCollection(
        uriTemplate: '/budgets/{groupeId}/{monthStart}/remaining/list',
        controller: BudgetController::class . '::getRemainingBudgetList',
        read: false,
        name: 'budget_remaining_list',
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
    new Get(
        uriTemplate: '/budgets/{categoryId}/{monthStart}/category',
        controller: BudgetController::class . '::getBudgetByCategoryAndMonth',
        uriVariables: [
            'categoryId' => new Link(fromClass: null, fromProperty: 'categoryId'),
            'monthStart' => new Link(fromClass: null, fromProperty: 'monthStart'),
        ],
        read: false,
        name: 'budget_category_month',
        requirements: [
            'categoryId' => '\d+',
            'monthStart' => '\d{4}-\d{2}-\d{2}'
        ],
        normalizationContext: ['groups' => ['budget:read']],
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
    public CategoryDTO $category;

    public function __construct(Budget $budget, ?float $amountCalc = null)
    {
        $category = $budget->getCategory();

        $this->id = $budget->getId();
        if ($amountCalc) {
            $this->amount = $amountCalc;
        } else {
            $this->amount = $budget->getAmount();
        }

        $this->monthStart = $budget->getMonthStart()->format('Y-m-d');

        $this->category = new CategoryDTO($category);
    }
}
