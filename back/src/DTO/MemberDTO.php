<?php

namespace App\DTO;

use App\Entity\Member;
use App\Enum\MemberRoleEnum;
use DateTimeImmutable;
use Symfony\Component\Serializer\Annotation\Groups;

class MemberDTO
{
    #[Groups(['groupe:read'])]
    public UserDTO $user;
    #[Groups(['groupe:read'])]
    public MemberRoleEnum $role;
    #[Groups(['groupe:read'])]
    public DateTimeImmutable $addOn;
    public function __construct(Member $member)
    {
        $this->user = new UserDTO($member->getIndividual());
        $this->role = $member->getRole();
        $this->addOn = $member->getAddOn();
    }
}
