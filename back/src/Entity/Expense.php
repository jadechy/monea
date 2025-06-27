<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\ExpenseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

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
    #[Assert\NotNull(message: "Le montant est obligatoire.")]
    #[Assert\Positive(message: "Le montant doit être strictement positif.")]
    #[Assert\Type(type: 'float', message: "Le montant doit être un nombre décimal.")]
    #[Assert\Range(
        min: 0.01,
        max: 10000,
        notInRangeMessage: "Le montant doit être compris entre {{ min }} et {{ max }}."
    )]
    private ?float $amount = null;

    #[ORM\Column(length: 150, name: 'EXP_TITLE')]
    #[Assert\NotBlank(message: "Le titre est obligatoire.")]
    #[Assert\Length(
        max: 150,
        maxMessage: "Le titre ne peut pas dépasser {{ limit }} caractères."
    )]
    private ?string $title = null;

    #[ORM\Column(name: 'EXP_CREATED_AT')]
    #[Assert\NotNull(message: "La date de création est obligatoire.")]
    #[Assert\Type(\DateTimeImmutable::class)]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\ManyToOne(inversedBy: 'expenses')]
    #[Assert\NotNull(message: "Le groupe est obligatoire.")]
    #[ORM\JoinColumn(name: 'GRP_ID', referencedColumnName: 'GRP_ID', nullable: false)]
    private Groupe $groupe;

    #[ORM\ManyToOne(inversedBy: 'expenses')]
    #[ORM\JoinColumn(name: 'CAT_ID', referencedColumnName: 'CAT_ID', nullable: false)]
    #[Assert\NotNull(message: "La catégorie est obligatoire.")]
    private ?Category $category = null;

    #[ORM\ManyToOne(inversedBy: 'expenses')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    #[Assert\NotNull(message: "Le créateur est obligatoire.")]
    private User $creator;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'shareExpenses')]
    private Collection $participants;

    #[ORM\ManyToOne(inversedBy: 'expenses')]
    #[ORM\JoinColumn(name: 'REC_ID', referencedColumnName: 'REC_ID')]
    private ?RecurringExpense $recurringExpense = null;

    #[ORM\Column(name: 'EXP_SPENT_AT')]
    #[Assert\NotNull(message: "La date de dépense est obligatoire.")]
    #[Assert\Type(\DateTimeImmutable::class)]
    private ?\DateTimeImmutable $spentAt = null;

    public function __construct()
    {
        $this->participants = new ArrayCollection();
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

    public function getCreator(): User
    {
        return $this->creator;
    }

    public function setCreator(User $creator): static
    {
        $this->creator = $creator;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getParticipants(): Collection
    {
        return $this->participants;
    }

    public function addParticipant(User $participant): static
    {
        if (!$this->participants->contains($participant)) {
            $this->participants->add($participant);
            $participant->addShareExpense($this);
        }

        return $this;
    }

    public function removeParticipant(User $participant): static
    {
        if ($this->participants->removeElement($participant)) {
            $participant->removeShareExpense($this);
        }

        return $this;
    }

    public function getRecurringExpense(): ?RecurringExpense
    {
        return $this->recurringExpense;
    }

    public function setRecurringExpense(?RecurringExpense $recurringExpense): static
    {
        $this->recurringExpense = $recurringExpense;

        return $this;
    }

    public function getSpentAt(): ?\DateTimeImmutable
    {
        return $this->spentAt;
    }

    public function setSpentAt(\DateTimeImmutable $spentAt): static
    {
        $this->spentAt = $spentAt;

        return $this;
    }
}
