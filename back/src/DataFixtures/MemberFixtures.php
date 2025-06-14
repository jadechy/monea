<?php

namespace App\DataFixtures;

use App\Entity\Groupe;
use App\Entity\Member;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class MemberFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $roles = ['admin', 'member', 'guest', 'editor', 'viewer'];

        for ($i = 0; $i < 5; $i++) {
            $member = new Member();
            $groupe = $this->getReference('groupe_' . ($i % 2), Groupe::class);
            $user = $this->getReference('user_' . $i, User::class);

            $member->setGroupe($groupe);
            $member->setIndividual($user);
            $member->setRole($roles[$i]);
            $member->setAddOn(new \DateTimeImmutable(sprintf('-%d days', $i * 5)));

            $manager->persist($member);
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            GroupeFixtures::class,
            UserFixtures::class,
        ];
    }
}
