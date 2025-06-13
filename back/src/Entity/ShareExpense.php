<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ShareExpenseRepository;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity(repositoryClass: ShareExpenseRepository::class)]
#[ORM\Table(name: 'MON_SHARE_EXPENSE')]
class ShareExpense
{
    #[ORM\Id]

    #[ORM\Column(name: 'SHR_PERCENTAGE')]
    private int $percentage;

    #[ORM\ManyToOne(inversedBy: 'sharedExpenses')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    private ?User $contributor = null;

    #[ORM\ManyToOne(inversedBy: 'sharedExpenses')]
    #[ORM\JoinColumn(name: 'EXP_ID', referencedColumnName: 'EXP_ID', nullable: false)]
    private ?Expense $expense = null;

    public function getPercentage(): int
    {
        return $this->percentage;
    }

    public function setPercentage(int $percentage): static
    {
        $this->percentage = $percentage;

        return $this;
    }

    public function getContributor(): ?User
    {
        return $this->contributor;
    }

    public function setContributor(?User $contributor): static
    {
        $this->contributor = $contributor;

        return $this;
    }

    public function getExpense(): ?Expense
    {
        return $this->expense;
    }

    public function setExpense(?Expense $expense): static
    {
        $this->expense = $expense;

        return $this;
    }
}
