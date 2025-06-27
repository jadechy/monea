<?php

namespace App\Enum;

enum MemberRole: string
{
    case CREATOR = 'creator';
    case ADMIN = 'admin';
    case VIEWER = 'viewer';
    case MEMBER = 'member';
    case REJECTED = 'rejected';
    case WAITING_VALIDATION = 'waiting_validation';
}
