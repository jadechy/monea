<?php

namespace App\Entity;

use App\Enum\MemberRoleEnum;
use App\Repository\MemberRepository;
use App\Enum\MemberStatusEnum;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\ApiResource;
use App\Controller\MemberController;
use App\DTO\MemberInputDTO;

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
            'authorId' => new Link(fromClass: null, fromProperty: 'authorId'),
            'groupeId' => new Link(fromClass: null, fromProperty: 'groupeId'),
        ],
        controller: MemberController::class  . '::responseInvitation',
        name: 'member_response',
        deserialize: false,
        read: false,
        normalizationContext: ['groups' => ['member:read']]
    )
])]
#[ORM\Entity(repositoryClass: MemberRepository::class)]
#[ORM\Table(name: 'MON_MEMBER')]
class Member
{
    #[ORM\Column(length: 20, name: 'MBR_ROLE', enumType: MemberRoleEnum::class, nullable: false)]
    #[Groups(['groupe:read', 'member:read', 'user:read', 'member:write'])]
    private MemberRoleEnum $role = MemberRoleEnum::MEMBER;

    #[ORM\Column(name: 'MBR_ADD_ON', nullable: false)]
    #[Groups(['member:read', 'member:write'])]
    private \DateTimeImmutable $addOn;

    #[ORM\Column(name: 'MBR_STATUS', enumType: MemberStatusEnum::class)]
    #[Groups(['groupe:read', 'member:read', 'user:read', 'member:write'])]
    private MemberStatusEnum $status;

    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: 'members')]
    #[ORM\JoinColumn(name: 'GRP_ID', referencedColumnName: 'GRP_ID', nullable: false)]
    #[Groups(['groupe:read', 'member:read', 'user:read', 'member:write'])]
    private Groupe $groupe;

    #[ORM\Id]
    #[ORM\ManyToOne(inversedBy: 'members')]
    #[ORM\JoinColumn(name: 'USR_ID', referencedColumnName: 'USR_ID', nullable: false)]
    #[Groups(['groupe:read', 'member:read', 'user:read', 'member:write'])]
    private User $individual;

    public function getRole(): MemberRoleEnum
    {
        return $this->role;
    }

    public function setRole(MemberRoleEnum $role): static
    {
        $this->role = $role;

        return $this;
    }

    public function getAddOn(): \DateTimeImmutable
    {
        return $this->addOn;
    }

    public function setAddOn(\DateTimeImmutable $addOn): static
    {
        $this->addOn = $addOn;

        return $this;
    }

    public function getStatus(): MemberStatusEnum
    {
        return $this->status;
    }

    public function setStatus(MemberStatusEnum $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getGroupe(): Groupe
    {
        return $this->groupe;
    }

    public function setGroupe(Groupe $groupe): static
    {
        $this->groupe = $groupe;

        return $this;
    }

    public function getIndividual(): User
    {
        return $this->individual;
    }

    public function setIndividual(User $individual): static
    {
        $this->individual = $individual;

        return $this;
    }
}
