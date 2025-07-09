<?php

namespace App\Entity;

use App\Enum\MemberRoleEnum;
use App\Repository\MemberRepository;
use App\Enum\MemberStatusEnum;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MemberRepository::class)]
#[ORM\Table(name: 'MON_MEMBER')]
class Member
{
    #[ORM\Column(length: 20, name: 'MBR_ROLE', enumType: MemberRoleEnum::class, nullable: false)]
    #[Groups(['groupe:read', 'member:read', 'user:read'])]
    private MemberRoleEnum $role = MemberRoleEnum::MEMBER;

    #[ORM\Column(name: 'MBR_ADD_ON', nullable: false)]
    #[Groups(['member:read'])]
    private \DateTimeImmutable $addOn;

    #[ORM\Column(name: 'MBR_STATUS', enumType: MemberStatusEnum::class)]
    #[Groups(['groupe:read', 'member:read', 'user:read'])]
    private MemberStatusEnum $status;

    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: 'members')]
    #[ORM\JoinColumn(name: 'GRP_ID', referencedColumnName: 'GRP_ID', nullable: false)]
    #[Groups(['groupe:read', 'member:read', 'user:read'])]
    private Groupe $groupe;

    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: 'members')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    #[Groups(['groupe:read', 'member:read', 'user:read'])]
    private User $individual;

    public function getRole(): MemberRoleEnum
    {
        return $this->role;
    }

    public function setRole(MemberRoleEnum $role): static
    {
        $this->role = $role;

        return $this;
    }

    public function getAddOn(): \DateTimeImmutable
    {
        return $this->addOn;
    }

    public function setAddOn(\DateTimeImmutable $addOn): static
    {
        $this->addOn = $addOn;

        return $this;
    }

    public function getStatus(): MemberStatusEnum
    {
        return $this->status;
    }

    public function setStatus(MemberStatusEnum $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getGroupe(): Groupe
    {
        return $this->groupe;
    }

    public function setGroupe(Groupe $groupe): static
    {
        $this->groupe = $groupe;

        return $this;
    }

    public function getIndividual(): User
    {
        return $this->individual;
    }

    public function setIndividual(User $individual): static
    {
        $this->individual = $individual;

        return $this;
    }
}
