<?php

namespace App\DTO;

use App\Entity\Member;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use Symfony\Component\Serializer\Annotation\Groups;

class MemberInvitationDTO
{
    #[Groups(['member:read'])]
    public UserDTO $user;

    #[Groups(['member:read'])]
    public GroupInvitDTO $group;

    #[Groups(['member:read'])]
    public MemberRoleEnum $role;

    #[Groups(['member:read'])]
    public MemberStatusEnum $status;

    public function __construct(Member $member)
    {
        $this->user = new UserDTO($member->getIndividual());
        $this->group = new GroupInvitDTO($member->getGroupe());
        $this->status = $member->getStatus();
        $this->role = $member->getRole();
    }
}
