<?php

namespace App\DTO;

use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
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
    ),
    new Patch(
        uriTemplate: '/member/update',
        controller: MemberController::class  . '::updateMemberRole',
        name: 'member_edit',
        input: MemberInputDTO::class,
        deserialize: true,
        read: false,
        validationContext: ['groups' => ['member:write']],
    ),
    new Patch(
        uriTemplate: '/member/leave',
        controller: MemberController::class  . '::leaveGroup',
        name: 'member_leave',
        input: MemberInputDTO::class,
        deserialize: true,
        read: false,
        validationContext: ['groups' => ['member:write']],
    ),
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
