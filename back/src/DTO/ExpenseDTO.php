<?php

namespace App\DTO;

use Symfony\Component\Serializer\Annotation\Groups;
use App\Entity\Expense;
use DateTimeImmutable;
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
