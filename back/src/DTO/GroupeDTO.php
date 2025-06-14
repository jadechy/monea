<?php

namespace App\DTO;

use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\GroupeController;
use App\Entity\Groupe;

#[ApiResource(operations: [
    new Get(
        uriTemplate: '/groupes/{userId}/list',
        controller: GroupeController::class . '::getAllGroupesByUser',
        read: false,
        name: 'groupes_user',
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
    public \DateTimeImmutable $createdAt;

    #[Groups(['groupe:read'])]
    public string $type;

    #[Groups(['groupe:read'])]
    public bool $isActive;

    #[Groups(['groupe:read'])]
    public array $expenses;

    #[Groups(['groupe:read'])]
    public array $members;

    #[Groups(['groupe:read'])]
    public array $budgets;

    #[Groups(['groupe:read'])]
    public int $creator;

    #[Groups(['groupe:read'])]
    public array $categories;

    public function __construct(Groupe $groupe)
    {
        $this->id = $groupe->getId();
        $this->name = $groupe->getName();
        $this->createdAt = $groupe->getCreatedAt();
        $this->type = $groupe->getType();
        $this->isActive = $groupe->isActive();

        foreach ($groupe->getExpenses() as $expense){
            $this->expenses[] = [
                'expenseId' => $expense?->getId(),
                'amount' => $expense?->getAmount(),
                'title' => $expense?->getTitle(),
                'createdAt' => $expense?->getCreatedAt(),
            ];
        }
        
        foreach ($groupe->getMembers() as $member){
            $this->members[] = [
                'memberId' => $member?->getIndividual()->getId(),
                'role' => $member?->getRole(),
                'addOn' => $member?->getAddOn()
            ];
        }

        foreach ($groupe->getBudgets() as $budget){
            $this->budgets[] = [
                'budgetId' => $budgets?->getId(),
                'month' => $budgets?->getMonth(),
                'amount' => $budgets?->getAmount(),
                'creator' => $budgets?->getCreator()->getId(),
            ];
        }

        $this->creator = $groupe->getCreator()->getId();

        foreach ($groupe->getCategories() as $category){
            $this->categories[] = [
                'categoryId' => $categories?->getId(),
                'label' => $categories?->getLabel(),
                'color' => $categories?->getColor(),
            ];
        }
    }
}