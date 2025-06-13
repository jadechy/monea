<?php

namespace App\ApiResource;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Link;
use App\Entity\User;
use App\Entity\Groupe;
use App\State\MemberProvider;

#[ApiResource(
    operations: [
        new Get(
            uriTemplate: '/members/user/{userId}/groupe/{groupeId}',
            uriVariables: [
                'userId' => new Link(fromClass: User::class, identifiers: ['id']),
                'groupeId' => new Link(fromClass: Groupe::class, identifiers: ['id']),
            ],
            provider: MemberProvider::class
        ),
        new Post(
            uriTemplate: '/members/user/{userId}/groupe/{groupeId}',
            uriVariables: [
                'userId' => new Link(fromClass: User::class, identifiers: ['id']),
                'groupeId' => new Link(fromClass: Groupe::class, identifiers: ['id']),
            ],
            processor: MemberPostProcessor::class
        ),
        new Delete(
            uriTemplate: '/members/user/{userId}/groupe/{groupeId}',
            uriVariables: [
                'userId' => new Link(fromClass: User::class, identifiers: ['id']),
                'groupeId' => new Link(fromClass: Groupe::class, identifiers: ['id']),
            ],
            processor: MemberDeleteProcessor::class
        ),
        new Patch(
            uriTemplate: '/members/user/{userId}/groupe/{groupeId}',
            uriVariables: [
                'userId' => new Link(fromClass: User::class, identifiers: ['id']),
                'groupeId' => new Link(fromClass: Groupe::class, identifiers: ['id']),
            ],
            processor: MemberPatchProcessor::class
        )
    ]
)]
class MemberResource
{
    public int $userId;
    public int $groupeId;
    public ?string $role = null;
}
