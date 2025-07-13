<?php

namespace App\Voter;

use App\Entity\Groupe;
use App\Entity\User;

class CreateExpenseSubject
{
    public function __construct(
        public readonly Groupe $groupe,
        public readonly User $creator
    ) {}
}
