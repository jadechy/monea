<?php

namespace App\DTO;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\GroupeController;
use App\Entity\Groupe;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;

#[ApiResource(operations: [
    new Get(
        uriTemplate: '/groupes/{userId}/list',
        controller: GroupeController::class . '::getAllGroupesByUser',
        uriVariables: [
            'userId' => new Link(fromClass: null, fromProperty: 'userId')
        ],
        read: false,
        name: 'groupes_user',
        requirements: [
            'userId' => '\d+'
        ],
        normalizationContext: ['groups' => ['groupe:read']]
    ),
])]
class GroupeDTO
{
    #[Groups(['groupe:read'])]
    public int $id;

    #[Groups(['groupe:read'])]
    public string $name;

    #[Groups(['groupe:read'])]
    public string $createdAt;

    #[Groups(['groupe:read'])]
    public GroupTypeEnum $type;

    #[Groups(['groupe:read'])]
    public string $picture;

    #[Groups(['groupe:read'])]
    public ColorEnum $color;

    #[Groups(['groupe:read'])]
    public array $expenses;

    #[Groups(['groupe:read'])]
    public array $members;

    #[Groups(['groupe:read'])]
    public int $creator;

    #[Groups(['groupe:read'])]
    public array $categories;

    public function __construct(Groupe $groupe)
    {
        $this->id = $groupe->getId();
        $this->name = $groupe->getName();
        $this->createdAt = $groupe->getCreatedAt()->format('Y-m-d');
        $this->type = $groupe->getType();
        $this->picture = $groupe->getPicture();
        $this->color = $groupe->getColor();

        foreach ($groupe->getExpenses() as $expense) {
            $this->expenses[] = [
                'expenseId' => $expense?->getId(),
                'amount' => $expense?->getAmount(),
                'title' => $expense?->getTitle(),
                'createdAt' => $expense?->getCreatedAt()->format('Y-m-d'),
            ];
        }

        foreach ($groupe->getMembers() as $member) {
            $this->members[] = [
                'memberId' => $member?->getIndividual()->getId(),
                'role' => $member?->getRole(),
                'addOn' => $member?->getAddOn()
            ];
        }

        $this->creator = $groupe->getCreator()->getId();

        foreach ($groupe->getCategories() as $category) {
            $this->categories[] = [
                'id' => $category?->getId(),
                'label' => $category?->getLabel(),
                'color' => $category?->getColor(),
            ];
        }
    }
}
