<?php

namespace App\DTO;

use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;


class CategoryInputDTO
{
    public ?int $id = null;
    public ?string $label = null;
    public ?ColorEnum $color = null;
}
