<?php

namespace App\Service;

use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

use App\Entity\User;
use App\Entity\Groupe;
use App\Entity\Category;
use App\Entity\Member;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;

class UserSetupService
{
    public function __construct(
        private EntityManagerInterface $em,
        private ValidatorInterface $validator,
    ) {}

    /**
     * Initialise les entités liées à un nouvel utilisateur
     * @return array|null Retourne un tableau d'erreur s'il y en a, sinon null
     */
    public function setupUser(User $user): ?array
    {
        $group = new Groupe();
        $group->setName("Espace personnel")
            ->setType(GroupTypeEnum::PERSONNAL)
            ->setCreatedAt(new \DateTimeImmutable())
            ->setColor(ColorEnum::Pink);
        $errorsGroup = $this->validator->validate($group);
        if (count($errorsGroup) > 0) {
            return ['error' => (string) $errorsGroup];
        }
        $this->em->persist($group);

        $member = new Member();
        $member->setGroupe($group)
            ->setStatus(MemberStatusEnum::ACCEPTED)
            ->setRole(MemberRoleEnum::AUTHOR)
            ->setIndividual($user)
            ->setAddOn(new DateTimeImmutable());
        $errorsMember = $this->validator->validate($member);
        if (count($errorsMember) > 0) {
            return ['error' => (string) $errorsMember];
        }
        $this->em->persist($member);

        $defaultCategory = new Category();
        $defaultCategory->setLabel("default")
            ->setColor(ColorEnum::Gray)
            ->setGroupe($group);
        $errorsCategory = $this->validator->validate($defaultCategory);
        if (count($errorsCategory) > 0) {
            return ['error' => (string) $errorsCategory];
        }
        $this->em->persist($defaultCategory);

        return null;
    }
}
