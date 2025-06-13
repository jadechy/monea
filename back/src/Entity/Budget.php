<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\BudgetRepository;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity(repositoryClass: BudgetRepository::class)]
#[ORM\Table(name: 'MON_BUDGET')]
class Budget
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'BGT_ID')]
    private int $id;

    #[ORM\Column(name: 'BGT_MONTH')]
    private int $month;

    #[ORM\Column(name: 'BGT_AMOUNT')]
    private ?float $amount = null;

    #[ORM\ManyToOne(inversedBy: 'budget')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    private User $creator;

    #[ORM\ManyToOne(inversedBy: 'budgets')]
    #[ORM\JoinColumn(name: 'GRP_ID', referencedColumnName: 'GRP_ID', nullable: false)]
    private Groupe $groupe;

    public function getId(): int
    {
        return $this->id;
    }

    public function getMonth(): int
    {
        return $this->month;
    }

    public function setMonth(int $month): static
    {
        $this->month = $month;

        return $this;
    }

    public function getAmount(): ?float
    {
        return $this->amount;
    }

    public function setAmount(float $amount): static
    {
        $this->amount = $amount;

        return $this;
    }

    public function getCreator(): User
    {
        return $this->creator;
    }

    public function setCreator(User $creator): static
    {
        $this->creator = $creator;

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
