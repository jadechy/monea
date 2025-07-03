<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Enum\RecurringFrequencyEnum;
use App\Repository\RecurringExpenseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity(repositoryClass: RecurringExpenseRepository::class)]
#[ORM\Table(name: 'MON_RECURRING_EXPENSE')]
class RecurringExpense
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'REC_ID')]
    private int $id;

    #[ORM\Column(name: 'REC_REPETITION_COUNT')]
    private ?int $repetitionCount = null;

    #[ORM\Column(length: 20, name: 'REC_FREQUENCY_UNIT')]
    private ?RecurringFrequencyEnum $frequency = null;

    #[ORM\Column(name: 'REC_END_DATE')]
    private ?\DateTimeImmutable $endDate = null;

    /**
     * @var Collection<int, Expense>
     */
    #[ORM\OneToMany(targetEntity: Expense::class, mappedBy: 'recurringExpense')]
    private Collection $expenses;

    public function __construct()
    {
        $this->expenses = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getRepetitionCount(): ?int
    {
        return $this->repetitionCount;
    }

    public function setRepetitionCount(int $repetitionCount): static
    {
        $this->repetitionCount = $repetitionCount;

        return $this;
    }

    public function getFrequency(): ?RecurringFrequencyEnum
    {
        return $this->frequency;
    }

    public function setFrequency(RecurringFrequencyEnum $frequency): static
    {
        $this->frequency = $frequency;

        return $this;
    }

    public function getEndDate(): ?\DateTimeImmutable
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeImmutable $endDate): static
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * @return Collection<int, Expense>
     */
    public function getExpenses(): Collection
    {
        return $this->expenses;
    }

    public function addExpense(Expense $expense): static
    {
        if (!$this->expenses->contains($expense)) {
            $this->expenses->add($expense);
            $expense->setRecurringExpense($this);
        }

        return $this;
    }

    public function removeExpense(Expense $expense): static
    {
        if ($this->expenses->removeElement($expense)) {
            // set the owning side to null (unless already changed)
            if ($expense->getRecurringExpense() === $this) {
                $expense->setRecurringExpense(null);
            }
        }

        return $this;
    }
}
