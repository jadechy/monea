<?php

namespace App\Enum;

enum MemberStatusEnum: string
{
    case PENDING = 'pending';
    case ACCEPTED = 'accepted';
    case REFUSED = 'refused';
    case DELETED = 'deleted';

    public function isActive(): bool
    {
        return $this === self::ACCEPTED;
    }
}
