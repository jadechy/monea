<?php

namespace App\DTO;

use App\Repository\UserRepository;
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

    public ?int $categoryId = null;

    #[Assert\NotBlank]
    public int $authorId;

    public ?RecurringExpenseInputDTO $recurring = null;

    /** @var int[] */
    public array $participants = [];

    public static function fromObject(\stdClass $object): self
    {
        $dto = new self();

        if (!isset($object->title) || !is_string($object->title)) {
            throw new \InvalidArgumentException('title manquant ou invalide');
        }
        $dto->title = $object->title;

        if (!isset($object->amount) || !is_float($object->amount) && !is_int($object->amount)) {
            throw new \InvalidArgumentException('amount manquant ou invalide');
        }
        $dto->amount = (float) $object->amount;

        if (!isset($object->groupId) || !is_int($object->groupId)) {
            throw new \InvalidArgumentException('groupId manquant ou invalide');
        }
        $dto->groupId = $object->groupId;

        if (!isset($object->authorId) || !is_int($object->authorId)) {
            throw new \InvalidArgumentException('authorId manquant ou invalide');
        }
        $dto->authorId = $object->authorId;

        if (isset($object->categoryId)) {
            if (!is_int($object->categoryId)) {
                throw new \InvalidArgumentException('categoryId invalide');
            }
            $dto->categoryId = $object->categoryId;
        }

        if (!isset($object->spentAt) || !is_string($object->spentAt)) {
            throw new \InvalidArgumentException('spentAt manquant ou invalide');
        }
        $dto->spentAt = $object->spentAt;

        if (isset($object->recurring) && $object->recurring instanceof \stdClass) {
            $dto->recurring = RecurringExpenseInputDTO::fromObject($object->recurring);
        }

        if (!isset($object->participants) || !is_array($object->participants)) {
            throw new \InvalidArgumentException('participants manquant ou invalide');
        }

        $participants = [];

        foreach ($object->participants as $p) {
            if (!is_int($p)) {
                throw new \InvalidArgumentException('participant invalide');
            }
            $participants[] = $p;
        }

        $dto->participants = $participants;

        return $dto;
    }

}
