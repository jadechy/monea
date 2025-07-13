<?php

namespace App\DTO;

use Symfony\Component\Serializer\Annotation\Groups;
use App\Entity\Groupe;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;
use App\DTO\MemberDTO;
use App\Entity\User;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use DateTimeImmutable;

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

    #[Groups(['groupe:read'])]
    public MemberRoleEnum $userRole;

    #[Groups(['groupe:read'])]
    public MemberStatusEnum $userStatus;

    /** @var ExpenseDTO[] */
    public array $expenses;

    /** @var MemberDTO[] */
    public array $members;

    /** @var CategoryDTO[] */
    public array $categories;

    public function __construct(Groupe $groupe, User $currentUser)
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
            $dto = new MemberDTO($member);
            $this->members[] = $dto;
            if ($member->getIndividual()->getId() === $currentUser->getId()) {
                $this->userRole = $member->getRole();
                $this->userStatus = $member->getStatus();
            }
        }

        foreach ($groupe->getCategories() as $category) {
            $this->categories[] = new CategoryDTO($category);
        }
    }
}
