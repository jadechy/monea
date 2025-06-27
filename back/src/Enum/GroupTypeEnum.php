<?php

namespace App\Enum;

enum GroupType: string
{
    case PERSONNAL = 'personnal';
    case OCCASIONAL = 'occasional';
    case DAILY = 'daily';
}
