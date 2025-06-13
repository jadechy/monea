<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ExpenseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity(repositoryClass: ExpenseRepository::class)]
#[ORM\Table(name: 'MON_EXPENSE')]
class Expense
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'EXP_ID')]
    private int $id;

    #[ORM\Column(name: 'EXP_AMOUNT')]
    private ?float $amount = null;

    #[ORM\Column(length: 255, name: 'EXP_TITLE')]
    private ?string $title = null;

    #[ORM\Column(name: 'EXP_CREATED_AT')]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\ManyToOne(inversedBy: 'expenses')]
    #[ORM\JoinColumn(name: 'GRP_ID', referencedColumnName: 'GRP_ID', nullable: false)]
    private Groupe $groupe;

    #[ORM\ManyToOne(inversedBy: 'expenses')]
    #[ORM\JoinColumn(name: 'CAT_ID', referencedColumnName: 'CAT_ID', nullable: false)]
    private ?Category $category = null;

    /**
     * @var Collection<int, ShareExpense>
     */
    #[ORM\OneToMany(targetEntity: ShareExpense::class, mappedBy: 'expense')]
    private Collection $sharedExpenses;

    #[ORM\ManyToOne(inversedBy: 'expenses')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    private User $creator;

    public function __construct()
    {
        $this->sharedExpenses = new ArrayCollection();
    }

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

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
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

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection<int, ShareExpense>
     */
    public function getSharedExpenses(): Collection
    {
        return $this->sharedExpenses;
    }

    public function addSharedExpense(ShareExpense $sharedExpense): static
    {
        if (!$this->sharedExpenses->contains($sharedExpense)) {
            $this->sharedExpenses->add($sharedExpense);
            $sharedExpense->setExpense($this);
        }

        return $this;
    }

    public function removeSharedExpense(ShareExpense $sharedExpense): static
    {
        if ($this->sharedExpenses->removeElement($sharedExpense)) {
            // set the owning side to null (unless already changed)
            if ($sharedExpense->getExpense() === $this) {
                $sharedExpense->setExpense(null);
            }
        }

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
}
