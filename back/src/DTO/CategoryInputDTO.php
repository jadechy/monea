<?php

namespace App\DTO;

use App\Enum\ColorEnum;


class CategoryInputDTO
{
    public ?int $id = null;
    public string $label;
    public ColorEnum $color;
}
