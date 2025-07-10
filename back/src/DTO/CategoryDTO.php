<?php

namespace App\DTO;

use Symfony\Component\Serializer\Annotation\Groups;
use App\Entity\Category;
use App\Enum\ColorEnum;
class CategoryDTO
{
    #[Groups(['category:read', 'expense:read', 'budget:read', 'groupe:read'])]
    public int $id;

    #[Groups(['category:read', 'expense:read', 'budget:read', 'groupe:read'])]
    public string $label;

    #[Groups(['category:read', 'expense:read', 'budget:read', 'groupe:read'])]
    public ColorEnum $color;

    public function __construct(Category $category)
    {
        $this->id = $category->getId();
        $this->label = $category->getLabel();
        $this->color = $category->getColor();
    }
}
