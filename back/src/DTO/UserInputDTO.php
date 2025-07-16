<?php

namespace App\DTO;

class UserInputDTO
{
    public int $id;

    public static function fromObject(\stdClass $object): self
    {
        $dto = new self();
        if (!isset($object->id) || !is_numeric($object->id)) {
            throw new \InvalidArgumentException('Propriété id manquante ou invalide');
        }

        $dto->id = (int) $object->id;
        return $dto;
    }
}
