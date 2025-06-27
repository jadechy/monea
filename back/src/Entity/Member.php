<?php

namespace App\Entity;

use App\Enum\MemberRole;
use App\Repository\MemberRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MemberRepository::class)]
#[ORM\Table(name: 'MON_MEMBER')]
class Member
{
    #[ORM\Column(length: 15, name: 'MBR_ROLE', enumType: MemberRole::class)]
    #[Groups(['groupe:read', 'member:read', 'user:read'])]
    private MemberRole $role = MemberRole::MEMBER;

    #[ORM\Column(name: 'MBR_ADD_ON')]
    #[Groups(['member:read'])]
    private ?\DateTimeImmutable $addOn = null;

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

    public function getRole(): ?MemberRole
    {
        return $this->role;
    }

    public function setRole(MemberRole $role): static
    {
        $this->role = $role;

        return $this;
    }

    public function getAddOn(): ?\DateTimeImmutable
    {
        return $this->addOn;
    }

    public function setAddOn(\DateTimeImmutable $addOn): static
    {
        $this->addOn = $addOn;

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
