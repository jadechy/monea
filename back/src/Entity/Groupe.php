<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Controller\GroupeController;
use App\DTO\GroupInputDTO;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;
use App\Repository\GroupeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;


#[ApiResource(
    normalizationContext: ['groups' => ['groupe:read']],
    denormalizationContext: ['groups' => ['groupe:write']],
    operations: [
        new Post(
            uriTemplate: '/groupes',
            controller: GroupeController::class  . '::postGroup',
            name: 'groupe_new',
            input: GroupInputDTO::class,
            deserialize: true,
            read: false,
        ),
        new Patch(
            uriTemplate: '/groupes/{id}',
            controller: GroupeController::class  . '::editGroup',
            name: 'groupe_edit',
            input: GroupInputDTO::class,
            deserialize: true,
            read: false,
        ),
        new Delete()
    ]
)]
#[ORM\Entity(repositoryClass: GroupeRepository::class)]
#[ORM\Table(name: 'MON_GROUPE')]
class Groupe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'GRP_ID')]
    #[Groups(['groupe:read'])]
    private int $id;

    #[ORM\Column(length: 100, name: 'GRP_NAME', nullable: false)]
    #[Assert\NotBlank(
        message: 'Le nom du membre ne peut pas être vide.'
    )]
    #[Assert\Length(
        max: 100,
        maxMessage: 'Le nom du membre ne peut pas dépasser {{ limit }} caractères.'
    )]
    #[Groups(['groupe:read', 'groupe:write'])]
    private ?string $name;

    #[ORM\Column(name: 'GRP_CREATED_AT')]
    #[Assert\NotNull]
    #[Assert\Type(\DateTimeImmutable::class)]
    #[Groups(['groupe:read', 'groupe:write'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 15, name: 'GRP_TYPE', enumType: GroupTypeEnum::class, type: "string")]
    #[Assert\NotNull(
        message: 'Le groupe doit être défini.'
    )]
    #[Groups(['groupe:read', 'groupe:write'])]
    private ?GroupTypeEnum $type = null;

    /**
     * @var Collection<int, Expense>
     */
    #[ORM\OneToMany(targetEntity: Expense::class, mappedBy: 'groupe', cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[Groups(['groupe:read', 'groupe:write'])]
    private Collection $expenses;

    /**
     * @var Collection<int, Member>
     */
    #[ORM\OneToMany(targetEntity: Member::class, mappedBy: 'groupe', cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[Groups(['groupe:read', 'groupe:write'])]
    private Collection $members;

    #[ORM\ManyToOne(inversedBy: 'groupes')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    #[Assert\NotNull(
        message: 'Le créateur doit être défini.'
    )]
    #[Groups(['groupe:read', 'groupe:write'])]
    private User $creator;

    /**
     * @var Collection<int, Category>
     */
    #[ORM\OneToMany(targetEntity: Category::class, mappedBy: 'groupe',  cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[Groups(['groupe:read', 'groupe:write'])]
    private Collection $categories;

    #[ORM\Column(length: 255, name: 'GRP_PICTURE')]
    #[Assert\Length(
        max: 255,
        maxMessage: "Le chemin de la photo ne peut pas dépasser {{ limit }} caractères."
    )]
    #[Groups(['groupe:read', 'groupe:write'])]
    private ?string $picture = null;

    #[ORM\Column(length: 15, name: 'GRP_COLOR', enumType: ColorEnum::class, type: "string", nullable: false)]
    #[Assert\NotNull(message: "La couleur est obligatoire.")]
    #[Assert\Choice(callback: [ColorEnum::class, 'cases'], message: "La couleur choisie n'est pas valide.")]
    #[Groups(['groupe:read', 'groupe:write'])]
    private ColorEnum $color;

    public function __construct()
    {
        $this->expenses = new ArrayCollection();
        $this->members = new ArrayCollection();
        $this->categories = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

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

    public function getType(): GroupTypeEnum
    {
        return $this->type;
    }

    public function setType(GroupTypeEnum $type): static
    {
        $this->type = $type;

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
            $expense->setGroupe($this);
        }

        return $this;
    }

    public function removeExpense(Expense $expense): static
    {
        if ($this->expenses->removeElement($expense)) {
            // set the owning side to null (unless already changed)
            if ($expense->getGroupe() === $this) {
                $expense->setGroupe(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Member>
     */
    public function getMembers(): Collection
    {
        return $this->members;
    }

    public function addMember(Member $member): static
    {
        if (!$this->members->contains($member)) {
            $this->members->add($member);
            $member->setGroupe($this);
        }

        return $this;
    }

    public function removeMember(Member $member): static
    {
        if ($this->members->removeElement($member)) {
            // set the owning side to null (unless already changed)
            if ($member->getGroupe() === $this) {
                $member->setGroupe(null);
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

    /**
     * @return Collection<int, Category>
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->categories->contains($category)) {
            $this->categories->add($category);
            $category->setGroupe($this);
        }

        return $this;
    }


    public function getDefaultCategory(): ?Category
    {
        foreach ($this->categories as $category) {
            if ($category->getLabel() === 'default') {
                return $category;
            }
        }

        return null;
    }
    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): static
    {
        $this->picture = $picture;

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
}
