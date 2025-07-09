<?php

namespace App\DTO;

use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\ApiResource;
use App\Controller\MemberController;

use App\Entity\Member;
use App\Enum\MemberRoleEnum;
use DateTimeImmutable;

#[ApiResource(operations: [
    new Post(
        uriTemplate: '/member/invitation',
        controller: MemberController::class . '::sendInvitation',
        read: false,
        deserialize: false,
        name: 'member_send_invitation',
    )
])]
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
