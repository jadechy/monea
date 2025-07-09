<?php

namespace App\DTO;

use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use App\Controller\MemberController;

use App\Entity\Member;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use DateTimeImmutable;
use Symfony\Component\Serializer\Annotation\Groups;

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
    new Get(
        uriTemplate: '/member/response/{authorId}/{groupeId}',
        uriVariables: [
            'authorId' => new ApiProperty(identifier: true),
            'groupeId' => new ApiProperty(identifier: true),
        ],
        controller: MemberController::class  . '::responseInvitation',
        name: 'member_response',
        deserialize: false,
        read: false,
        normalizationContext: ['groups' => ['member:read']]
    )
])]
class MemberDTO
{
    #[Groups(['groupe:read'])]
    public UserDTO $user;
    #[Groups(['groupe:read'])]
    public MemberRoleEnum $role;
    #[Groups(['groupe:read'])]
    public DateTimeImmutable $addOn;
    #[Groups(['groupe:read'])]
    public MemberStatusEnum $status;
    public function __construct(Member $member)
    {
        $this->user = new UserDTO($member->getIndividual());
        $this->role = $member->getRole();
        $this->addOn = $member->getAddOn();
        $this->status = $member->getStatus();
    }
}
