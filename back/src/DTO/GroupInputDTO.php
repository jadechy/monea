<?php

namespace App\DTO;

use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;

class GroupInputDTO
{
    public string $name;
    public GroupTypeEnum $type;
    public ColorEnum $color;

    /** @var CategoryInputDTO[]|null */
    public ?array $categories = null;

    public function __construct() {}
    
    /**
     * @param object{
     *     name: string,
     *     type: int|string,
     *     color: int|string,
     *     categories?: array<object{id?: int, label: string, color: string}>
     * } $data
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
