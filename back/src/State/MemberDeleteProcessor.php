<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Member;
use Doctrine\ORM\EntityManagerInterface;

class MemberDeleteProcessor implements ProcessorInterface
{
    public function __construct(private EntityManagerInterface $em) {}

    public function process($data, Operation $operation, array $uriVariables = [], array $context = []): void
    {
        $member = $this->em->getRepository(Member::class)->findOneBy([
            'individual' => $uriVariables['userId'],
            'groupe' => $uriVariables['groupeId'],
        ]);

        if ($member) {
            $this->em->remove($member);
            $this->em->flush();
        }
    }
}
