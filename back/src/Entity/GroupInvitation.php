<?php

namespace App\Entity;

use App\Repository\GroupInvitationRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: GroupInvitationRepository::class)]
#[ORM\Table(name: 'MON_GROUP_INVITATION')]
class GroupInvitation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'INV_ID')]
    private int $id;

    #[ORM\Column(length: 255, name: 'INV_TOKEN')]
    private string $token;

    #[ORM\Column(length: 50, name: 'INV_EMAIL')]
    private string $email;

    #[ORM\Column(name: 'INV_USED')]
    private bool $used;

    #[ORM\Column(name: 'INV_CREATED_AT')]
    private \DateTimeImmutable $createdAt;

    #[ORM\ManyToOne(inversedBy: 'groupInvitations')]
    #[ORM\JoinColumn(name: 'GRP_ID', referencedColumnName: 'GRP_ID', nullable: false)]
    private Groupe $groupe;

    public function __construct()
    {
        $this->token = Uuid::v4()->toRfc4122();
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function setToken(string $token): static
    {
        $this->token = $token;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function isUsed(): bool
    {
        return $this->used;
    }

    public function setUsed(bool $used): static
    {
        $this->used = $used;

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

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
}
