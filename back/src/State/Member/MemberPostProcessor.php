<?php

namespace App\State\Member;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Member;
use App\Entity\User;
use App\Entity\Groupe;
use Doctrine\ORM\EntityManagerInterface;

class MemberPostProcessor implements ProcessorInterface
{
    public function __construct(private EntityManagerInterface $em) {}

    public function process($data, Operation $operation, array $uriVariables = [], array $context = []): Member
    {
        $user = $this->em->getRepository(User::class)->find($uriVariables['userId']);
        $groupe = $this->em->getRepository(Groupe::class)->find($uriVariables['groupeId']);

        if (!$user || !$groupe) {
            throw new \RuntimeException('User or Groupe not found');
        }

        $existing = $this->em->getRepository(Member::class)->findOneBy([
            'individual' => $user,
            'groupe' => $groupe
        ]);

        if ($existing) {
            throw new \RuntimeException('Member already exists');
        }

        $member = new Member();
        $member->setIndividual($user);
        $member->setGroupe($groupe);
        $member->setRole($data->role ?? 'member');
        $member->setAddOn(new \DateTimeImmutable());

        $this->em->persist($member);
        $this->em->flush();

        return $member;
    }
}
