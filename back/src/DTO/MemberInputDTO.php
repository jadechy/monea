<?php

namespace App\DTO;

use Symfony\Component\Validator\Constraints as Assert;
use App\Enum\MemberStatusEnum;
use App\Enum\MemberRoleEnum;
use Symfony\Component\Serializer\Annotation\Groups;

class MemberInputDTO
{
    #[Assert\NotBlank]
    #[Groups(['member:write'])]
    public MemberRoleEnum $role;

    #[Assert\NotBlank]
    #[Groups(['member:write'])]
    public \DateTimeImmutable $addOn;

    #[Assert\NotNull]
    #[Groups(['member:write'])]
    public MemberStatusEnum $status;

    #[Assert\NotBlank]
    #[Groups(['member:write'])]
    public int $groupId;

    #[Assert\NotBlank]
    #[Groups(['member:write'])]
    public int $authorId;

    public static function fromObject(\stdClass $object): self
    {
        $dto = new self();

        if (!isset($object->role) || (!is_string($object->role) && !is_int($object->role))) {
            throw new \InvalidArgumentException('role manquant ou invalide');
        }
        $dto->role = MemberRoleEnum::from($object->role);

        if (!isset($object->addOn) || !is_string($object->addOn)) {
            throw new \InvalidArgumentException('addOn manquant ou invalide');
        }
        $dto->addOn = new \DateTimeImmutable($object->addOn);

        if (!isset($object->status) || (!is_string($object->status) && !is_int($object->status))) {
            throw new \InvalidArgumentException('status manquant ou invalide');
        }
        $dto->status = MemberStatusEnum::from($object->status);

        if (!isset($object->groupId) || !is_int($object->groupId)) {
            throw new \InvalidArgumentException('groupId manquant ou invalide');
        }
        $dto->groupId = $object->groupId;

        if (!isset($object->authorId) || !is_int($object->authorId)) {
            throw new \InvalidArgumentException('authorId manquant ou invalide');
        }
        $dto->authorId = $object->authorId;

        return $dto;
    }
}
