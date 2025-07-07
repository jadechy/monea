<?php

namespace App\DTO;

use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Link;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\MemberController;
use App\Entity\Mmeber;

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

}
