<?php

namespace App\DTO;

class UserInputDTO
{
    public int $id;

    public static function fromObject(\stdClass $object): self
    {
        $dto = new self();
        $dto->id = $object->id;
        return $dto;
    }
}
