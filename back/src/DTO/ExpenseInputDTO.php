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
    public string $spentAt;

    #[Assert\NotBlank]
    public int $groupId;

    #[Assert\NotBlank]
    public int $categoryId;

    #[Assert\NotBlank]
    public int $authorId;

    public ?RecurringExpenseInputDTO $recurring = null;
    public static function fromObject(\stdClass $object): self
    {
        $dto = new self();
        $dto->title = $object->title ?? null;
        $dto->amount = $object->amount ?? null;
        $dto->groupId = $object->groupId ?? null;
        $dto->authorId = $object->authorId ?? null;
        $dto->categoryId = $object->categoryId ?? null;
        $dto->spentAt = $object->spentAt ?? null;
        $dto->recurring = $object->recurring ?? null;

        return $dto;
    }
}
