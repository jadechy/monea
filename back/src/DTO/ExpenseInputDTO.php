<?php

namespace App\DTO;

use DateTimeImmutable;
use Symfony\Component\Validator\Constraints as Assert;

class ExpenseInputDTO
{
    #[Assert\NotBlank]
    public ?float $amount = null;

    #[Assert\NotBlank]
    public ?string $title = null;

    #[Assert\NotNull]
    public ?DateTimeImmutable $spentAt = null;

    #[Assert\NotBlank]
    public ?int $groupId = null;

    #[Assert\NotBlank]
    public ?int $categoryId = null;

    #[Assert\NotBlank]
    public ?int $authorId = null;

    public ?RecurringExpenseInputDTO $recurring = null;
}
