<?php 

namespace App\Enum;

enum MemberStatusEnum: string 
{
    case PENDING = 'pending';
    case ACCEPTED = 'accepted';
    case REFUSED = 'refused';
}