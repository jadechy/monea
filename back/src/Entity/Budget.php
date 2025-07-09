<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Post;
use App\Controller\BudgetController;
use App\Repository\BudgetRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ApiResource(
    operations: [
        new Post(
            uriTemplate: '/budgets/edit',
            name: 'budgets_edit',
            controller: BudgetController::class . "::postBudgets",
            deserialize: false,
            read: false,
            validate: false,
        )
    ]
)]
#[ORM\Entity(repositoryClass: BudgetRepository::class)]
#[ORM\Table(name: 'MON_BUDGET')]
class Budget
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'BGT_ID')]
    private int $id;

    #[ORM\Column(name: 'BGT_AMOUNT', nullable: false)]
    #[Assert\NotNull(message: "Le montant ne peut pas être nul.")]
    #[Assert\Positive(message: "Le montant doit être strictement positif.")]
    #[Assert\Type(type: 'float', message: "Le montant doit être un nombre décimal.")]
    #[Assert\Range(
        min: 0.01,
        max: 10000,
        notInRangeMessage: "Le montant doit être compris entre {{ min }} et {{ max }}."
    )]
    private float $amount;

    #[ORM\Column(name: 'BGT_MONTH_START')]
    #[Assert\NotNull(message: "La date de début de mois est obligatoire.")]
    #[Assert\Type(\DateTimeImmutable::class)]
    private \DateTimeImmutable $monthStart;

    #[ORM\ManyToOne(inversedBy: 'budgets')]
    #[ORM\JoinColumn(name: 'CAT_ID', referencedColumnName: 'CAT_ID', nullable: false)]
    #[Assert\NotNull(message: "La catégorie est obligatoire.")]
    private Category $category;

    public function getId(): int
    {
        return $this->id;
    }

    public function getAmount(): float
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
