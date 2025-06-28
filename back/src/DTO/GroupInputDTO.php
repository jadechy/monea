<?php

namespace App\DTO;

use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;

class GroupInputDTO
{
    public ?string $name = null;
    public ?GroupTypeEnum $type = null;
    public ?ColorEnum $color = null;
    public ?int $authorId = null;

    /** @var array<int, CategoryInputDTO>|null */
    public ?array $categories = null;
}
