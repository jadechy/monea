<?php

namespace App\State\Member;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\Entity\Member;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\MemberRepository;
use App\ApiResource\MemberResource;

class MemberProvider implements ProviderInterface
{
    public function __construct(private EntityManagerInterface $em, private MemberRepository $memberRepository) {}

    public function provide(Operation $operation, array $uriVariables = [], array $context = []): ?MemberResource
    {
        $member = $this->memberRepository->findOneBy([
            'individual' => $uriVariables['userId'],
            'groupe' => $uriVariables['groupeId'],
        ]);

        if (!$member) {
            return null;
        }

        return new MemberResource(
            userId: $uriVariables['userId'],
            groupeId: $uriVariables['groupeId'],
            role: $member->getRole(),
        );
    }
}
