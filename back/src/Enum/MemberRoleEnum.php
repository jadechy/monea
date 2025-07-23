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
    public function canView(): bool
    {
        return !in_array($this, [self::BANNED, self::ANONYME], true);
    }
    public function canManageExpenses(): bool
    {
        return in_array($this, [self::MEMBER, self::ADMIN, self::AUTHOR], true);
    }

    public function canEdit(): bool
    {
        return in_array($this, [self::ADMIN, self::AUTHOR], true);
    }

    public function canDelete(): bool
    {
        return in_array($this, [self::AUTHOR], true);
    }
}
