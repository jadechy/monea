<?php

namespace App\DTO;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\CategoryController;
use App\Entity\Category;

#[ApiResource(operations: [
    new Get(
        uriTemplate: '/categories/{groupeId}/list',
        controller: CategoryController::class . '::getCategoryByGroup',
        uriVariables: [
            'groupeId' => new Link(fromClass: null, fromProperty: 'groupeId')
        ],
        read: false,
        name: 'category_list_group',
        requirements: ['groupeId' => '\d+'],
        normalizationContext: ['groups' => ['category:read']]
    ),
])]
class CategoryDTO
{
    #[Groups(['category:read'])]
    public int $id;

    #[Groups(['category:read'])]
    public string $label;

    #[Groups(['category:read'])]
    public string $color;

    public function __construct(Category $category)
    {
        $this->id = $category->getId();
        $this->label = $category->getLabel();
        $this->color = $category->getColor();
    }
}