<?php

namespace App\DTO;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\ExpenseController;
use App\Entity\Expense;

#[ApiResource(operations: [
    new Get(
        uriTemplate: '/expenses/{groupeId}',
        controller: ExpenseController::class . '::getAllExpenseByGroup',
        uriVariables: [
            'groupeId' => new Link(fromClass: null, fromProperty: 'groupeId')
        ],
        read: false,
        name: 'expenses_groupe',
        requirements: ['groupeId' => '\d+'],
        normalizationContext: ['groups' => ['expense:read']]
    )
])]
class ExpenseDTO
{
    #[Groups(['expense:read'])]
    public int $id;

    #[Groups(['expense:read'])]
    public float $amount;

    #[Groups(['expense:read'])]
    public string $title;

    #[Groups(['expense:read'])]
    public \DateTimeImmutable $createdAt;

    #[Groups(['expense:read'])]
    public \DateTimeImmutable $spentAt;

    #[Groups(['expense:read'])]
    public int $groupe;

    #[Groups(['expense:read'])]
    public int $category;

    #[Groups(['expense:read'])]
    public int $creator;

    #[Groups(['expense:read'])]
    public array $participants;

    #[Groups(['expense:read'])]
    public ?int $recurringExpense;

    public function __construct(Expense $expense)
    {
        $this->id = $expense->getId();
        $this->amount = $expense->getAmount();
        $this->title = $expense->getTitle();
        $this->createdAt = $expense->getCreatedAt();
        $this->spentAt = $expense->getSpentAt();

        $this->category = $expense->getCategory()?->getId();
        $this->groupe = $expense->getGroupe()?->getId();
        $this->creator = $expense->getCreator()?->getId();
        $this->recurringExpense = $expense->getRecurringExpense()?->getId();

        foreach ($expense->getParticipants() as $participant){
            $this->participants[] = [
                'userId' => $participant?->getId(),
                'username' => $participant?->getUsername(),
                'name' => $participant?->getName()
            ];
        }
    }
}