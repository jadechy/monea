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
        $dto->repetitionCount = (int) $object->repetitionCount;
        $dto->frequency = RecurringFrequencyEnum::from($object->frequency);
        $dto->endDate = new \DateTimeImmutable($object->endDate);

        return $dto;
    }

}
