<?php

namespace App\DTO;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\ExpenseController;
use App\Entity\Expense;
use DateTimeImmutable;

#[ApiResource(operations: [
    new Get(
        uriTemplate: '/expenses/{id}',
        controller: ExpenseController::class . '::getExpenseById',
        read: false,
        name: 'expense_id',
        normalizationContext: ['groups' => ['expense:read']]
    ),
    new GetCollection(
        uriTemplate: '/expenses/groupe/{groupeId}/list',
        controller: ExpenseController::class . '::getAllExpenseByGroup',
        uriVariables: [
            'groupeId' => new Link(fromClass: null, fromProperty: 'groupeId')
        ],
        read: false,
        name: 'expenses_groupe',
        requirements: [
            'groupeId' => '\d+'
        ],
        normalizationContext: ['groups' => ['array_expense:read', 'category:read']]
    ),
    new GetCollection(
        uriTemplate: '/expenses/groupe/{groupeId}/mois/{monthStart}/list',
        controller: ExpenseController::class . '::getAllExpenseByGroupAndMonth',
        uriVariables: [
            'groupeId' => new Link(fromClass: null, fromProperty: 'groupeId'),
            'monthStart' => new Link(fromClass: null, fromProperty: 'monthStart'),
        ],
        read: false,
        name: 'expenses_groupe_month',
        requirements: [
            'groupeId' => '\d+',
            'monthStart' => '\d{4}-\d{2}-\d{2}'
        ],
        normalizationContext: ['groups' => ['expense:read']]
    ),
    new GetCollection(
        uriTemplate: '/expenses/groupe/{groupeId}/week/{day}/list',
        controller: ExpenseController::class . '::getAllExpenseByGroupAndDay',
        uriVariables: [
            'groupeId' => new Link(fromClass: null, fromProperty: 'groupeId'),
            'day' => new Link(fromClass: null, fromProperty: 'day'),
        ],
        read: false,
        name: 'expenses_groupe_week',
        requirements: [
            'groupeId' => '\d+',
            'day' => '\d{4}-\d{2}-\d{2}'
        ],
        normalizationContext: ['groups' => ['expense:read']]
    ),
    new GetCollection(
        uriTemplate: '/expenses/groupe/{groupeId}/day/{day}/list',
        controller: ExpenseController::class . '::getAllExpenseByGroupAndDay',
        uriVariables: [
            'groupeId' => new Link(fromClass: null, fromProperty: 'groupeId'),
            'day' => new Link(fromClass: null, fromProperty: 'day'),
        ],
        read: false,
        name: 'expenses_groupe_day',
        requirements: [
            'groupeId' => '\d+',
            'day' => '\d{4}-\d{2}-\d{2}'
        ],
        normalizationContext: ['groups' => ['expense:read']]
    ),
    new GetCollection(
        uriTemplate: '/expenses/category/{categoryId}/list',
        controller: ExpenseController::class . '::getAllExpensesByCategory',
        uriVariables: [
            'categoryId' => new Link(fromClass: null, fromProperty: 'categoryId')
        ],
        read: false,
        name: 'expenses_category',
        requirements: [
            'categoryId' => '\d+'
        ],
        normalizationContext: ['groups' => ['expense:read']]
    ),
    new GetCollection(
        uriTemplate: '/expenses/category/{categoryId}/{monthStart}/list',
        controller: ExpenseController::class . '::getAllExpensesByCategoryAndMonth',
        uriVariables: [
            'categoryId' => new Link(fromClass: null, fromProperty: 'categoryId'),
            'monthStart' => new Link(fromClass: null, fromProperty: 'monthStart'),
        ],
        read: false,
        name: 'expenses_category_month',
        requirements: [
            'categoryId' => '\d+',
            'monthStart' => '\d{4}-\d{2}-\d{2}'
        ],
        normalizationContext: ['groups' => ['expense:read']]
    ),
])]
class ExpenseDTO
{
    #[Groups(['expense:read', 'array_expense:read'])]
    public int $id;

    #[Groups(['expense:read', 'array_expense:read'])]
    public float $amount;

    #[Groups(['expense:read', 'array_expense:read'])]
    public string $title;

    public DateTimeImmutable $createdAt;

    #[Groups(['expense:read'])]
    public DateTimeImmutable $spentAt;

    #[Groups(['expense:read'])]
    public int $groupe;

    #[Groups(['expense:read', 'array_expense:read'])]
    public CategoryDTO $category;

    #[Groups(['expense:read', 'array_expense:read'])]
    public UserDTO $creator;

    /** @var UserDTO[] */
    #[Groups(['expense:read'])]
    public array $participants = [];

    #[Groups(['expense:read'])]
    public ?RecurringExpenseDTO $recurring = null;

    public function __construct(Expense $expense)
    {
        $this->id = $expense->getId();
        $this->amount = $expense->getAmount();
        $this->title = $expense->getTitle();
        $this->createdAt = $expense->getCreatedAt();
        $this->spentAt = $expense->getSpentAt();
        $this->category = new CategoryDTO($expense->getCategory());
        $this->groupe = $expense->getGroupe()->getId();
        $this->creator = new UserDTO($expense->getCreator());
        if ($expense->getRecurringExpense()) {
            $this->recurring = new RecurringExpenseDTO($expense->getRecurringExpense());
        }
        foreach ($expense->getParticipants() as $participant) {
            $this->participants[] = new UserDTO($participant);
        }
    }
}
