<?php

namespace App\DTO;

use Symfony\Component\Serializer\Annotation\Groups;
use App\Entity\Budget;

class BudgetDTO
{
    #[Groups(['budget:read'])]
    public int $id;

    #[Groups(['budget:read'])]
    public float $amount;

    #[Groups(['budget:read'])]
    public string $monthStart;

    #[Groups(['budget:read'])]
    public CategoryDTO $category;

    public function __construct(Budget $budget, ?float $amountCalc = null)
    {
        $category = $budget->getCategory();

        $this->id = $budget->getId();
        if ($amountCalc) {
            $this->amount = $amountCalc;
        } else {
            $this->amount = $budget->getAmount();
        }

        $this->monthStart = $budget->getMonthStart()->format('Y-m-d');

        $this->category = new CategoryDTO($category);
    }
}
