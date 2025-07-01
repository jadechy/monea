<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use App\Controller\UserController;
use App\DTO\UserEditDTO;
use App\DTO\UserRegisterDTO;
use App\Enum\UserRoleEnum;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

#[ApiResource(
    operations: [
        new Post(
            uriTemplate: '/register',
            controller: UserController::class  . '::register',
            name: 'user_register',
            input: UserRegisterDTO::class,
            deserialize: true,
            read: false,
            denormalizationContext: ['groups' => ['user:write']],
        ),
        new Get(),
        new Get(
            uriTemplate: '/me',
            controller: UserController::class  . '::me',
            name: 'me',
            read: false,
            write: false,
            deserialize: false,
            normalizationContext: ['groups' => ['user:me']],
        ),
        new Patch(
            uriTemplate: '/users/edit',
            controller: UserController::class  . '::updateUser',
            name: 'user_edit',
            input: UserEditDTO::class,
            deserialize: true,
            read: false,
            denormalizationContext: ['groups' => ['user:write']],
        ),
        new Delete(),
    ],
    normalizationContext: ['groups' => ['user:read']],
    denormalizationContext: ['groups' => ['user:write']]
)]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: 'MON_USER')]
#[UniqueEntity(fields: ['email'], message: "Cet email est déjà utilisé.")]
#[UniqueEntity(fields: ['username'], message: "Ce pseudonyme est déjà utilisé.")]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'USR_ID')]
    #[Groups(['user:read', 'user:me'])]
    private int $id;

    #[ORM\Column(length: 50, name: 'USR_USERNAME', unique: true)]
    #[Assert\NotBlank(message: "Le nom d'utilisateur ne peut pas être vide.")]
    #[Assert\Length(
        min: 3,
        max: 50,
        minMessage: "Le nom d'utilisateur doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le nom d'utilisateur ne peut pas dépasser {{ limit }} caractères."
    )]
    #[Groups(['user:read', 'user:write', 'user:me'])]
    private string $username;

    #[ORM\Column(length: 50, name: 'USR_NAME')]
    #[Assert\NotBlank(message: "Le prénom ne peut pas être vide.")]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: "Le prénom doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le prénom ne peut pas dépasser {{ limit }} caractères."
    )]
    #[Groups(['user:read', 'user:write', 'user:me'])]
    private ?string $name = null;

    #[ORM\Column(length: 50, name: 'USR_LASTNAME')]
    #[Groups(['user:read', 'user:write', 'user:me'])]
    #[Assert\NotBlank(message: "Le nom de famille ne peut pas être vide.")]
    #[Assert\Length(
        min: 2,
        max: 50,
        minMessage: "Le nom de famille doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le nom de famille ne peut pas dépasser {{ limit }} caractères."
    )]
    private ?string $lastname = null;

    #[ORM\Column(length: 180, name: 'USR_EMAIL')]
    #[Assert\NotBlank(message: "L'email ne peut pas être vide.")]
    #[Assert\Email(message: "L'email '{{ value }}' n'est pas une adresse email valide.")]
    #[Assert\Length(
        min: 5,
        max: 180,
        minMessage: "L'email doit comporter au moins {{ limit }} caractères.",
        maxMessage: "L'email ne peut pas dépasser {{ limit }} caractères."
    )]
    #[Groups(['user:read', 'user:write', 'user:me'])]
    private ?string $email = null;

    #[ORM\Column(length: 128, name: 'USR_PASSWORD')]
    #[Groups(['user:read', 'user:write'])]
    #[Assert\NotBlank(message: "Le mot de passe ne peut pas être vide.")]
    #[Assert\Length(
        min: 8,
        max: 128,
        minMessage: "Le mot de passe doit comporter au moins {{ limit }} caractères.",
        maxMessage: "Le mot de passe ne peut pas dépasser {{ limit }} caractères."
    )]
    private string $password;

    private ?string $plainPassword = null;

    #[ORM\Column(type: 'json', name: 'USR_ROLES', enumType: UserRoleEnum::class)]
    #[Groups(['user:read', 'user:write', 'user:me'])]
    /**
     * @var array<int, UserRoleEnum::class|string>
     */
    private array $roles = [UserRoleEnum::USER];

    #[ORM\Column(name: 'USR_CREATED_AT')]
    #[Groups(['user:read', 'user:write', 'user:me'])]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, Expense>
     */
    #[ORM\OneToMany(targetEntity: Expense::class, mappedBy: 'creator')]
    #[Groups(['user:read', 'user:write'])]
    private Collection $expenses;

    /**
     * @var Collection<int, Member>
     */
    #[ORM\OneToMany(targetEntity: Member::class, mappedBy: 'individual')]
    #[Groups(['user:read', 'user:write'])]
    private Collection $members;

    /**
     * @var Collection<int, Groupe>
     */
    #[ORM\OneToMany(targetEntity: Groupe::class, mappedBy: 'creator')]
    #[Groups(['user:read', 'user:write'])]
    private Collection $groupes;

    /**
     * @var Collection<int, Expense>
     */
    #[ORM\ManyToMany(targetEntity: Expense::class, inversedBy: 'participants')]
    #[ORM\JoinTable(name: 'MON_SHARE_EXPENSE')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    #[ORM\InverseJoinColumn(name: 'EXP_ID', referencedColumnName: 'EXP_ID', nullable: false)]
    #[Groups(['user:read', 'user:write'])]
    private Collection $shareExpenses;

    #[ORM\Column(length: 255, name: 'USR_PICTURE', nullable: true)]
    #[Assert\Length(
        max: 255,
        maxMessage: "Le chemin de la photo ne peut pas dépasser {{ limit }} caractères."
    )]
    #[Groups(['user:read', 'user:write', 'user:me'])]
    private ?string $picture = null;

    #[ORM\Column(length: 255, name: 'USR_RESET_TOKEN', nullable: true)]
    #[Assert\Length(
        max: 255,
        maxMessage: "Le token de réinitialisation ne peut pas dépasser {{ limit }} caractères."
    )]
    #[Groups(['user:read', 'user:write'])]
    private ?string $resetToken = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE, name: "USR_BIRTHDAY", nullable: false)]
    #[Groups(['user:me'])]
    private \DateTimeImmutable $birthday;


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

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function setPlainPassword(string $plainPassword): void
    {
        $this->plainPassword = $plainPassword;
    }

    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function getRoles(): array
    {
        $roles = array_map(fn(UserRoleEnum $role) => $role->value, $this->roles ?? []);

        $roles[] = 'ROLE_USER';
        return array_unique($roles);
    }
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * The public representation of the user (e.g. a username, an email address, etc.)
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        if (empty($this->email)) {
            throw new \LogicException('User identifier cannot be empty.');
        }

        return $this->email;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void {}

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

    public function setPicture(?string $picture): static
    {
        $this->picture = $picture;

        return $this;
    }

    public function getResetToken(): ?string
    {
        return $this->resetToken;
    }

    public function setResetToken(?string $resetToken): static
    {
        $this->resetToken = $resetToken;

        return $this;
    }

    public function getBirthday(): ?\DateTimeImmutable
    {
        return $this->birthday;
    }

    public function setBirthday(\DateTimeImmutable $birthday): static
    {
        $this->birthday = $birthday;

        return $this;
    }
}
