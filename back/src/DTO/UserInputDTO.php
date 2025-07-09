<?php

namespace App\DTO;

class UserInputDTO
{
    public int $id;
    public string $username;
    public string $name;
    public string $lastname;

    public static function fromObject(\stdClass $object): self
    {
        $dto = new self();
        $dto->id = $object->id;
        $dto->username = $object->username;
        $dto->name = $object->name;
        $dto->lastname = $object->lastname;
        return $dto;
    }
}
