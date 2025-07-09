<?php

namespace App\DTO;

use App\Entity\Member;
use App\Enum\MemberRoleEnum;
use DateTimeImmutable;

class MemberDTO
{
    public UserDTO $user;
    public MemberRoleEnum $role;
    public DateTimeImmutable $addOn;
    public function __construct(Member $member)
    {
        $this->user = new UserDTO($member->getIndividual());
        $this->role = $member->getRole();
        $this->addOn = $member->getAddOn();
    }
}
