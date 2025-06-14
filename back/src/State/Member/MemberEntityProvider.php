<?php

namespace App\State\Member;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\Entity\Member;
use App\Repository\MemberRepository;

class MemberEntityProvider implements ProviderInterface
{
    public function __construct(private MemberRepository $memberRepository) {}

    public function provide(Operation $operation, array $uriVariables = [], array $context = []): ?Member
    {
        return $this->memberRepository->findOneBy([
            'individual' => $uriVariables['userId'],
            'groupe' => $uriVariables['groupeId'],
        ]);
    }
}
