<?php

namespace App\DTO;

use App\Enum\RecurringFrequencyEnum;
use Symfony\Component\Validator\Constraints as Assert;

class RecurringExpenseInputDTO
{
    #[Assert\NotBlank]
    public int $repetitionCount;

    #[Assert\NotBlank]
    public RecurringFrequencyEnum $frequency;

    #[Assert\NotNull]
    public \DateTimeImmutable $endDate;

    public static function fromObject(\stdClass $object): self
    {
        $dto = new self();
        if (!isset($object->repetitionCount) || !is_numeric($object->repetitionCount)) {
            throw new \InvalidArgumentException('repetitionCount manquant ou invalide');
        }
        $dto->repetitionCount = (int) $object->repetitionCount;

        if (!isset($object->frequency) || !(is_int($object->frequency) || is_string($object->frequency))) {
            throw new \InvalidArgumentException('frequency manquante ou invalide');
        }
        $dto->frequency = RecurringFrequencyEnum::from($object->frequency);

        if (!isset($object->endDate) || !is_string($object->endDate)) {
            throw new \InvalidArgumentException('endDate manquante ou invalide');
        }
        $dto->endDate = new \DateTimeImmutable($object->endDate);

        return $dto;
    }

}
