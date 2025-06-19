<?php

namespace App\DTO;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;

class CategoryCalcDTO
{
    #[Groups(['category:read'])]
    public int $id;

    #[Groups(['category:read'])]
    public string $label;

    #[Groups(['category:read'])]
    public string $color;

    #[Groups(['category:read'])]
    public float $amount;

    public function __construct($id, $label, $color, $amount)
    {
        $this->id = $id;
        $this->label = $label;
        $this->color = $color;
        $this->amount = $amount;
    }
}