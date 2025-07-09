<?php

namespace App\DTO;

use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;

class GroupInputDTO
{
    public string $name;
    public GroupTypeEnum $type;
    public ColorEnum $color;
    public int $authorId;

    /** @var array<int, CategoryInputDTO>|null */
    public ?array $categories = null;
}
