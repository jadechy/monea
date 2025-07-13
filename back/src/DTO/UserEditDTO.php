<?php

namespace App\DTO;

use DateTimeInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

class UserEditDTO
{
    #[Assert\Email]
    #[Assert\NotBlank(allowNull: true)]
    #[Groups(['user:write'])]
    public ?string $email = null;

    #[Assert\NotBlank(allowNull: true)]
    #[Groups(['user:write'])]
    public ?string $username = null;

    #[Assert\NotBlank(allowNull: true)]
    #[Groups(['user:write'])]
    public ?string $name = null;

    #[Assert\NotBlank(allowNull: true)]
    #[Groups(['user:write'])]
    public ?string $lastname = null;

    // #[Assert\DateTime()]
    #[Groups(['user:write'])]
    public ?string $birthday = null;
}
