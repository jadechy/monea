<?php

namespace App\DataFixtures;

use App\Entity\Groupe;
use App\Entity\Member;
use App\Entity\User;
use App\Enum\MemberRoleEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker\Factory;

class MemberFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');


        for ($i = 0; $i < 5; $i++) {
            $member = new Member();
            $groupe = $this->getReference('groupe_' . ($i % 2), Groupe::class);
            $user = $this->getReference('user_' . $i, User::class);

            $member->setGroupe($groupe);
            $member->setIndividual($user);

            /** @var MemberRoleEnum $role */
            $role = $faker->randomElement(MemberRoleEnum::cases());
            $member->setRole($role);
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
