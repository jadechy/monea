<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Get;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

#[ApiResource]
// TO DO: A tester. BUT: Récuperer une liste de groupe pour un utilisateur
// #[ApiResource(
//     uriTemplate: '/users/{id}/groupe',
//     uriVariables: [
//         'id' => new Link(
//             fromClass: Groupe::class,
//             fromProperty: 'groupes'
//         )
//     ],
//     operations: [new Get()]
// )]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: 'MON_USER')]
#[UniqueEntity(fields: ['email'], message: "Cet email est déjà utilisé.")]
#[UniqueEntity(fields: ['username'], message: "Ce pseudonyme est déjà utilisé.")]
class User 
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'USR_ID')]
    private int $id;

    #[ORM\Column(length: 50, name: 'USR_USERNAME', unique: true)]
    #[Assert\NotBlank(message: "Le nom d'utilisateur ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 50,
        minMessage: "Le nom d'utilisateur doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le nom d'utilisateur ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $username;

    #[ORM\Column(length: 50, name: 'USR_NAME')]
    private ?string $name = null;

    #[ORM\Column(length: 50, name: 'USR_LASTNAME')]
    private ?string $lastname = null;

    #[ORM\Column(length: 255, name: 'USR_EMAIL')]
    private ?string $email = null;

    #[ORM\Column(length: 255, name: 'USR_PASSWORD')]
    private ?string $password = null;

    #[ORM\Column(type: 'json', name: 'USR_ROLE')]
    private array $role = [];

    #[ORM\Column(name: 'USR_CREATED_AT')]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, Expense>
     */
    #[ORM\OneToMany(targetEntity: Expense::class, mappedBy: 'creator')]
    private Collection $expenses;

    /**
     * @var Collection<int, Member>
     */
    #[ORM\OneToMany(targetEntity: Member::class, mappedBy: 'individual')]
    private Collection $members;

    /**
     * @var Collection<int, Groupe>
     */
    #[ORM\OneToMany(targetEntity: Groupe::class, mappedBy: 'creator')]
    private Collection $groupes;

    /**
     * @var Collection<int, Expense>
     */
    #[ORM\ManyToMany(targetEntity: Expense::class, inversedBy: 'participants')]
    #[ORM\JoinTable(name: 'MON_SHARE_EXPENSE')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    #[ORM\InverseJoinColumn(name: 'EXP_ID', referencedColumnName: 'EXP_ID', nullable: false)]
    private Collection $shareExpenses;

    #[ORM\Column(length: 255, name: 'USR_PICTURE')]
    private ?string $picture = null;

    #[ORM\Column(length: 255, name: 'USR_RESET_TOKEN')]
    private ?string $resetToken = null;

    public function __construct()
    {
        $this->expenses = new ArrayCollection();
        $this->members = new ArrayCollection();
        $this->groupes = new ArrayCollection();
        $this->shareExpenses = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): static
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getRole(): array
    {
        return $this->role;
    }

    public function setRole(array $role): static
    {
        $this->role = $role;

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
            $expense->setCreator($this);
        }

        return $this;
    }

    public function removeExpense(Expense $expense): static
    {
        if ($this->expenses->removeElement($expense)) {
            // set the owning side to null (unless already changed)
            if ($expense->getCreator() === $this) {
                $expense->setCreator(null);
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
            $member->setIndividual($this);
        }

        return $this;
    }

    public function removeMember(Member $member): static
    {
        if ($this->members->removeElement($member)) {
            // set the owning side to null (unless already changed)
            if ($member->getIndividual() === $this) {
                $member->setIndividual(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Groupe>
     */
    public function getGroupes(): Collection
    {
        return $this->groupes;
    }

    public function addGroupe(Groupe $groupe): static
    {
        if (!$this->groupes->contains($groupe)) {
            $this->groupes->add($groupe);
            $groupe->setCreator($this);
        }

        return $this;
    }

    public function removeGroupe(Groupe $groupe): static
    {
        if ($this->groupes->removeElement($groupe)) {
            // set the owning side to null (unless already changed)
            if ($groupe->getCreator() === $this) {
                $groupe->setCreator(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Expense>
     */
    public function getShareExpenses(): Collection
    {
        return $this->shareExpenses;
    }

    public function addShareExpense(Expense $shareExpense): static
    {
        if (!$this->shareExpenses->contains($shareExpense)) {
            $this->shareExpenses->add($shareExpense);
        }

        return $this;
    }

    public function removeShareExpense(Expense $shareExpense): static
    {
        $this->shareExpenses->removeElement($shareExpense);

        return $this;
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

    public function getResetToken(): ?string
    {
        return $this->resetToken;
    }

    public function setResetToken(string $resetToken): static
    {
        $this->resetToken = $resetToken;

        return $this;
    }
}
