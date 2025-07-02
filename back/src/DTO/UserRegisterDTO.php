<?php

namespace App\DTO;

use Doctrine\DBAL\Types\Types;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

class UserRegisterDTO
{
    #[Assert\NotBlank]
    #[Assert\Email]
    #[Groups(['user:write'])]
    public string $email;

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
    public string $username;

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
    public string $name;

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
    public string $lastname;

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
    #[Assert\Type(Types::DATE_IMMUTABLE)]
    public \DateTimeImmutable $birthday;

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
    public string $password;

    #[Assert\NotBlank]
    #[Groups(['user:write'])]
    public string $confirmPassword;
}
