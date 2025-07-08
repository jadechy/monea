<?php

namespace App\DTO;

use App\Entity\RecurringExpense;
use App\Enum\RecurringFrequencyEnum;
use Symfony\Component\Validator\Constraints as Assert;

class RecurringExpenseDTO
{
    #[Assert\NotBlank]
    public int $id;

    #[Assert\NotBlank]
    public int $repetitionCount;

    #[Assert\NotBlank]
    public RecurringFrequencyEnum $frequency;

    #[Assert\NotNull]
    public \DateTimeImmutable $endDate;

    public function __construct(RecurringExpense $recurringExpense)
    {
        $this->id = $recurringExpense->getId();
        $this->repetitionCount = $recurringExpense->getRepetitionCount();
        $this->frequency = $recurringExpense->getFrequency();
        $this->endDate = $recurringExpense->getEndDate();
    }
}
