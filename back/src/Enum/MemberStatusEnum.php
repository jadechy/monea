<?php 

namespace App\Enum;

enum MemberStatusEnum: string 
{
    case PENDING = 'en attente';
    case ACCEPTED = 'accepté';
    case REFUSED = 'refusé';
}