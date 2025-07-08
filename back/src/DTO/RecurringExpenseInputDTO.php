<?php

namespace App\DTO;

use App\Enum\RecurringFrequencyEnum;
use Symfony\Component\Validator\Constraints as Assert;

class RecurringExpenseInputDTO
{
    #[Assert\NotBlank]
    public ?int $repetitionCount = null;

    #[Assert\NotBlank]
    public ?RecurringFrequencyEnum $frequency = null;

    #[Assert\NotNull]
    public ?\DateTimeImmutable $endDate = null;
}
