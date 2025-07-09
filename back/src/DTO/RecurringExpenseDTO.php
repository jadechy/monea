<?php

namespace App\DTO;

use App\Entity\RecurringExpense;
use App\Enum\RecurringFrequencyEnum;
use Symfony\Component\Serializer\Attribute\Groups;
use Symfony\Component\Validator\Constraints as Assert;

class RecurringExpenseDTO
{
    #[Assert\NotBlank]
    #[Groups(['expense:read', 'groupe:read'])]
    public int $id;

    #[Assert\NotBlank]
    #[Groups(['expense:read', 'groupe:read'])]
    public int $repetitionCount;

    #[Assert\NotBlank]
    #[Groups(['expense:read', 'groupe:read'])]
    public RecurringFrequencyEnum $frequency;

    #[Assert\NotNull]
    #[Groups(['expense:read', 'groupe:read'])]
    public \DateTimeImmutable $endDate;

    public function __construct(RecurringExpense $recurringExpense)
    {
        $this->id = $recurringExpense->getId();
        $this->repetitionCount = $recurringExpense->getRepetitionCount();
        $this->frequency = $recurringExpense->getFrequency();
        $this->endDate = $recurringExpense->getEndDate();
    }
}
