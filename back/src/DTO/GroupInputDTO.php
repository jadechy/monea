<?php

namespace App\DTO;

use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;

class GroupInputDTO
{
    public string $name;
    public GroupTypeEnum $type;
    public ColorEnum $color;

    /** @var array<int, CategoryInputDTO>|null */
    public ?array $categories = null;

    public function __construct() {}
    /**
     * @param stdClass $data
     */
    public function fromObject(object $data): self
    {
        $this->name = $data->name;
        $this->type = GroupTypeEnum::from($data->type);
        $this->color = ColorEnum::from($data->color);

        if (!empty($data->categories)) {
            $this->categories = array_map(fn($cat) => new CategoryInputDTO($cat), $data->categories);
        }

        return $this;
    }
}
