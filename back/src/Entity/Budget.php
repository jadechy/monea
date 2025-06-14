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

    #[ORM\Column(name: 'BGT_AMOUNT')]
    private ?float $amount = null;

    #[ORM\Column(name: 'BGT_MONTH_START')]
    private \DateTimeImmutable $monthStart;

    #[ORM\ManyToOne(inversedBy: 'budgets')]
    #[ORM\JoinColumn(name: 'CAT_ID', referencedColumnName: 'CAT_ID', nullable: false)]
    private Category $category;

    public function getId(): int
    {
        return $this->id;
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

    public function getMonthStart(): \DateTimeImmutable
    {
        return $this->monthStart;
    }

    public function setMonthStart(\DateTimeImmutable $monthStart): static
    {
        $this->monthStart = $monthStart;

        return $this;
    }

    public function getCategory(): Category
    {
        return $this->category;
    }

    public function setCategory(Category $category): static
    {
        $this->category = $category;

        return $this;
    }
}
