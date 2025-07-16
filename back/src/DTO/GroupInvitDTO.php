<?php

namespace App\DTO;

use Symfony\Component\Serializer\Annotation\Groups;
use App\Entity\Groupe;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;
use App\DTO\MemberDTO;
use App\Entity\User;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use DateTimeImmutable;

class GroupInvitDTO
{
    #[Groups(['groupe:read'])]
    public int $id;

    #[Groups(['groupe:read'])]
    public string $name;

    #[Groups(['groupe:read'])]
    public DateTimeImmutable $createdAt;

    #[Groups(['groupe:read'])]
    public GroupTypeEnum $type;

    #[Groups(['groupe:read'])]
    public ?string $picture;

    #[Groups(['groupe:read'])]
    public ColorEnum $color;

    #[Groups(['groupe:read'])]
    public string $author;

    public function __construct(Groupe $groupe)
    {
        $this->id = $groupe->getId();
        $this->name = $groupe->getName();
        $this->createdAt = $groupe->getCreatedAt();
        $this->type = $groupe->getType();
        $this->picture = $groupe->getPicture();
        $this->color = $groupe->getColor();
        $this->author = $groupe->getAuthor();
    }
}
