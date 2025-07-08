<?php

namespace App\DTO;

use App\Entity\User;
use Doctrine\DBAL\Types\Types;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

class UserDTO
{

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
    public int $id;

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
    public ?string $picture = null;

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
    public string $username;

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
    public string $name;

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
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
