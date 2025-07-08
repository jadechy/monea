<?php

namespace App\DTO;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\GroupeController;
use App\Entity\Groupe;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;
use App\DTO\MemberDTO;
use DateTimeImmutable;

#[ApiResource(operations: [
    new GetCollection(
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
    public DateTimeImmutable $createdAt;

    #[Groups(['groupe:read'])]
    public GroupTypeEnum $type;

    #[Groups(['groupe:read'])]
    public ?string $picture;

    #[Groups(['groupe:read'])]
    public ColorEnum $color;

    /** @var ExpenseDTO[] */
    #[Groups(['groupe:read'])]
    public array $expenses;

    /** @var MemberDTO[] */
    #[Groups(['groupe:read'])]
    public array $members;

    #[Groups(['groupe:read'])]
    public UserDTO $creator;

    /** @var CategoryDTO[] */
    #[Groups(['groupe:read'])]
    public array $categories;

    public function __construct(Groupe $groupe)
    {
        $this->id = $groupe->getId();
        $this->name = $groupe->getName();
        $this->createdAt = $groupe->getCreatedAt();
        $this->type = $groupe->getType();
        $this->picture = $groupe->getPicture();
        $this->color = $groupe->getColor();



        foreach ($groupe->getExpenses() as $expense) {
            $this->expenses[] = new ExpenseDTO($expense);
        }

        foreach ($groupe->getMembers() as $member) {
            $this->members[] = new MemberDTO($member);
        }


        $this->creator = new UserDTO($groupe->getCreator());

        foreach ($groupe->getCategories() as $category) {
            $this->categories[] = new CategoryDTO($category);
        }
    }
}
