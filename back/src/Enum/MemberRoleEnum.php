<?php

namespace App\Enum;

enum MemberRoleEnum: string
{
    case AUTHOR = 'author';
    case ADMIN = 'admin';
    case MEMBER = 'member';
    case VIEWER = 'viewer';
    case ANONYME = 'anonyme';
    case BANNED = 'banned';
}
