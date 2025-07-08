<?php

namespace App\DTO;

use DateTimeImmutable;
use Symfony\Component\Validator\Constraints as Assert;

class ExpenseInputDTO
{
    #[Assert\NotBlank]
    public float $amount;

    #[Assert\NotBlank]
    public string $title;

    #[Assert\NotNull]
    public DateTimeImmutable $spentAt;

    #[Assert\NotBlank]
    public int $groupId;

    #[Assert\NotBlank]
    public int $categoryId;

    #[Assert\NotBlank]
    public int $authorId;

    public ?RecurringExpenseInputDTO $recurring = null;
}
