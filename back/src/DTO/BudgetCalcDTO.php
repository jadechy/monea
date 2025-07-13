<?php

namespace App\DTO;

use Symfony\Component\Serializer\Annotation\Groups;

class BudgetCalcDTO
{
    #[Groups(['budget:read'])]
    public float $amount;

    public function __construct(float $amount)
    {
        $this->amount = $amount;
    }
}
