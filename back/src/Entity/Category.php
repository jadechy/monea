<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Enum\ColorEnum;
use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ApiResource]
#[ORM\Entity(repositoryClass: CategoryRepository::class)]
#[ORM\Table(name: 'MON_CATEGORY')]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'CAT_ID')]
    private int $id;

    #[ORM\Column(length: 50, name: 'CAT_LABEL', nullable: false)]
    #[Assert\NotBlank(message: "Le libellé est obligatoire.")]
    #[Assert\Length(
        min: 3,
        max: 50,
        minMessage: "Le libellé doit faire au moins {{ limit }} caractères.",
        maxMessage: "Le libellé ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $label;

    #[ORM\Column(length: 8, name: 'CAT_COLOR', enumType: ColorEnum::class, type: "string", nullable: false)]
    #[Assert\NotNull(message: "La couleur est obligatoire.")]
    #[Assert\Choice(callback: [ColorEnum::class, 'cases'], message: "La couleur choisie n'est pas valide.")]
    private ColorEnum $color;

    /**
     * @var Collection<int, Expense>
     */
    #[ORM\OneToMany(targetEntity: Expense::class, mappedBy: 'category', cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $expenses;

    #[ORM\ManyToOne(inversedBy: 'categories')]
    #[ORM\JoinColumn(name: 'GRP_ID', referencedColumnName: 'GRP_ID')]
    #[Assert\NotNull(message: "Le groupe est obligatoire.")]
    private Groupe $groupe;

    /**
     * @var Collection<int, Budget>
     */
    #[ORM\OneToMany(targetEntity: Budget::class, mappedBy: 'category',  cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $budgets;

    public function __construct()
    {
        $this->expenses = new ArrayCollection();
        $this->budgets = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function getColor(): ColorEnum
    {
        return $this->color;
    }

    public function setColor(ColorEnum $color): static
    {
        $this->color = $color;

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
            $expense->setCategory($this);
        }

        return $this;
    }

    public function removeExpense(Expense $expense): static
    {
        if ($this->expenses->removeElement($expense)) {
            // set the owning side to null (unless already changed)
            if ($expense->getCategory() === $this) {
                $expense->setCategory(null);
            }
        }

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

    /**
     * @return Collection<int, Budget>
     */
    public function getBudgets(): Collection
    {
        return $this->budgets;
    }

    public function addBudget(Budget $budget): static
    {
        if (!$this->budgets->contains($budget)) {
            $this->budgets->add($budget);
            $budget->setCategory($this);
        }

        return $this;
    }

    public function removeBudget(Budget $budget): static
    {
        if ($this->budgets->removeElement($budget)) {
            // set the owning side to null (unless already changed)
            if ($budget->getCategory() === $this) {
                $budget->setCategory(null);
            }
        }

        return $this;
    }
}
