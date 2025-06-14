<?php

namespace App\State\Member;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Member;
use Doctrine\ORM\EntityManagerInterface;

class MemberPatchProcessor implements ProcessorInterface
{
    public function __construct(private EntityManagerInterface $em) {}

    public function process($data, Operation $operation, array $uriVariables = [], array $context = []): Member
    {
        $member = $this->em->getRepository(Member::class)->findOneBy([
            'individual' => $uriVariables['userId'],
            'groupe' => $uriVariables['groupeId'],
        ]);

        if (!$member) {
            throw new \RuntimeException('Member not found');
        }

        if (property_exists($data, 'role') && $data->role !== null) {
            $member->setRole($data->role);
        }

        $this->em->flush();

        return $member;
    }
}
