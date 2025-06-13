<?php

namespace App\State\Member;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\Entity\Member;
use Doctrine\ORM\EntityManagerInterface;

class MemberProvider implements ProviderInterface
{
    public function __construct(private EntityManagerInterface $em) {}

    public function provide(Operation $operation, array $uriVariables = [], array $context = []): ?Member
    {
        return $this->em->getRepository(Member::class)->findOneBy([
            'individual' => $uriVariables['userId'],
            'groupe' => $uriVariables['groupeId'],
        ]);
    }
}
