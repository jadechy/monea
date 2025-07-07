<?php

namespace App\DTO;

class BudgetInputDTO
{
    public int $groupId;
    /** @var BudgetItemDTO[] */
    public array $budgets;
}
class BudgetItemDTO
{
    public float $amount;
    public string $monthStart;
    public int $categoryId;
}
