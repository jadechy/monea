<?php

namespace App\State\Member;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Member;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\MemberRepository;

class MemberDeleteProcessor implements ProcessorInterface
{
    public function __construct(private EntityManagerInterface $em, private MemberRepository $memberRepository) {}

    public function process($data, Operation $operation, array $uriVariables = [], array $context = []): void
    {
        $member = $this->memberRepository->findOneBy([
            'individual' => $uriVariables['userId'],
            'groupe' => $uriVariables['groupeId'],
        ]);

        if ($member) {
            $this->em->remove($member);
            $this->em->flush();
        }
    }
}
