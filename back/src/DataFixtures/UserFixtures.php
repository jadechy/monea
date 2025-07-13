<?php

namespace App\DataFixtures;

use App\Entity\Groupe;
use App\Entity\User;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;
use App\Enum\UserRoleEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class UserFixtures extends Fixture
{

    public function __construct() {}

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        for ($i = 0; $i < 10; $i++) {
            $user = new User();

            $username = strtolower($faker->userName . $faker->numberBetween(1, 99));
            $user->setUsername($username);

            $user->setName($faker->firstName);
            $user->setLastname($faker->lastName);
            $user->setEmail($faker->unique()->safeEmail);
            $birthday = \DateTimeImmutable::createFromMutable(
                $faker->dateTimeBetween('-80 years', '-18 years')
            );

            $user->setBirthday($birthday);
            // Mot de passe commun "password123" hashé
            $user->setPlainPassword('password123');

            /** @var UserRoleEnum $role */
            $role = $faker->randomElement(UserRoleEnum::cases());
            $user->setRoles([$role]);

            $user->setCreatedAt(new \DateTimeImmutable('-' . $faker->numberBetween(0, 365) . ' days'));

            $user->setPicture($faker->imageUrl(200, 200, 'people', true));

            $manager->persist($user);

            $group = new Groupe();
            $group->setName("Espace personnel");
            $group->setType(GroupTypeEnum::PERSONNAL);
            $group->setCreatedAt(new \DateTimeImmutable());
            $group->setColor(ColorEnum::Pink);
            $group->setPicture('');
            $manager->persist($group);
            $this->addReference('user_' . $i, $user);
        }

        $manager->flush();
    }
}
