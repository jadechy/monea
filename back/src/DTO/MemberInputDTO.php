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
        $dto->role = MemberRoleEnum::from($object->role);
        $dto->addOn = $object->addOn;
        $dto->status = MemberStatusEnum::from($object->status);
        $dto->groupId = $object->groupId;
        $dto->authorId = $object->authorId;

        return $dto;
    }
}
