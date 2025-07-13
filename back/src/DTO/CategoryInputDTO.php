<?php

namespace App\DTO;

use App\Enum\ColorEnum;

class CategoryInputDTO
{
    public ?int $id = null;
    public string $label;
    public ColorEnum $color;
    public function __construct(object $data)
    {
        $this->id = isset($data->id) ? (int) $data->id : null;
        $this->label = $data->label;
        $this->color = ColorEnum::from($data->color);
    }
}
