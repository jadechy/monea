<?php

namespace App\State\Member;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\Member;
use App\Entity\User;
use App\Entity\Groupe;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserRepository;
use App\Repository\GroupeRepository;
use App\Repository\MemberRepository;
use App\ApiResource\MemberResource;

class MemberPostProcessor implements ProcessorInterface
{
    public function __construct(private EntityManagerInterface $em, private UserRepository $userRepository, private GroupeRepository $groupeRepository, private MemberRepository $memberRepository) {}

    public function process($data, Operation $operation, array $uriVariables = [], array $context = []): MemberResource
    {
        $user = $this->userRepository->find($uriVariables['userId']);
        $groupe = $this->groupeRepository->find($uriVariables['groupeId']);

        if (!$user || !$groupe) {
            throw new \RuntimeException('User or Groupe not found');
        }

        $existing = $this->memberRepository->findOneBy([
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

        return new MemberResource(
            userId: $user->getId(),
            groupeId: $groupe->getId(),
            role: $member->getRole(),
        );
    }
}
