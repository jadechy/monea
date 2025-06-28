<?php

namespace App\Enum;

enum UserRoleEnum: string
{
    case USER = 'ROLE_USER';
    case ADMIN = 'ROLE_ADMIN';
    case MANAGER = 'ROLE_MANAGER';
}
