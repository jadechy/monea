<?php

namespace App\State\Member;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Member;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\MemberRepository;
use App\ApiResource\MemberResource;

class MemberPatchProcessor implements ProcessorInterface
{
    public function __construct(private EntityManagerInterface $em, private MemberRepository $memberRepository) {}

    public function process($data, Operation $operation, array $uriVariables = [], array $context = []): MemberResource
    {
        $member = $this->memberRepository->findOneBy([
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

        return new MemberResource(
            userId: $uriVariables['userId'],
            groupeId: $uriVariables['groupeId'],
            role: $member->getRole(),
        );
    }
}
