<?php

namespace App\DTO;

use App\Entity\User;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

class UserDTO
{
    #[Assert\NotBlank]
    #[Groups(['user:write', 'expense:read', 'groupe:read', 'user:read'])]
    public int $id;

    #[Assert\NotBlank]
    #[Groups(['user:write', 'expense:read', 'groupe:read', 'array_expense:read', 'user:read'])]
    public ?string $picture = null;

    #[Assert\NotBlank]
    #[Groups(['user:write', 'expense:read', 'groupe:read', 'array_expense:read', 'user:read'])]
    public string $username;

    #[Assert\NotBlank]
    #[Groups([
        'user:write',
        'expense:read',
        'groupe:read'
    ])]
    public string $name;

    #[Assert\NotBlank]
    #[Groups([
        'user:write',
        'expense:read',
        'groupe:read'
    ])]
    public string $lastname;

    public function __construct(User $user)
    {
        $this->id = $user->getId();
        $this->picture = $user->getPicture();
        $this->username = $user->getUsername();
        $this->name = $user->getName();
        $this->lastname = $user->getLastname();
    }
}
