<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Get;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

use App\Controller\BudgetController;
use App\Repository\BudgetRepository;

#[ApiResource(
    operations: [
        new Post(
            uriTemplate: '/budgets/edit',
            name: 'budgets_edit',
            controller: BudgetController::class . "::postBudgets",
            deserialize: false,
            read: false,
            validate: false,
        ),
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
    ]
)]
#[ORM\Entity(repositoryClass: BudgetRepository::class)]
#[ORM\Table(name: 'MON_BUDGET')]
class Budget
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'BGT_ID')]
    private int $id;

    #[ORM\Column(name: 'BGT_AMOUNT', nullable: false)]
    #[Assert\NotNull(message: "Le montant ne peut pas être nul.")]
    #[Assert\Positive(message: "Le montant doit être strictement positif.")]
    #[Assert\Type(type: 'float', message: "Le montant doit être un nombre décimal.")]
    #[Assert\Range(
        min: 0.01,
        max: 10000,
        notInRangeMessage: "Le montant doit être compris entre {{ min }} et {{ max }}."
    )]
    private float $amount;

    #[ORM\Column(name: 'BGT_MONTH_START')]
    #[Assert\NotNull(message: "La date de début de mois est obligatoire.")]
    #[Assert\Type(\DateTimeImmutable::class)]
    private \DateTimeImmutable $monthStart;

    #[ORM\ManyToOne(inversedBy: 'budgets')]
    #[ORM\JoinColumn(name: 'CAT_ID', referencedColumnName: 'CAT_ID', nullable: false)]
    #[Assert\NotNull(message: "La catégorie est obligatoire.")]
    private Category $category;

    public function getId(): int
    {
        return $this->id;
    }

    public function getAmount(): float
    {
        return $this->amount;
    }

    public function setAmount(float $amount): static
    {
        $this->amount = $amount;

        return $this;
    }

    public function getMonthStart(): \DateTimeImmutable
    {
        return $this->monthStart;
    }

    public function setMonthStart(\DateTimeImmutable $monthStart): static
    {
        $this->monthStart = $monthStart;

        return $this;
    }

    public function getCategory(): Category
    {
        return $this->category;
    }

    public function setCategory(Category $category): static
    {
        $this->category = $category;

        return $this;
    }
}
