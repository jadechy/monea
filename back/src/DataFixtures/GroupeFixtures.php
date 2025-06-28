<?php

namespace App\DataFixtures;

use App\Entity\Groupe;
use App\Entity\User;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class GroupeFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        $users = [];
        for ($i = 0; $i < 10; $i++) {
            $users[] = $this->getReference('user_' . $i, User::class);
        }

        $types = ['privé', 'public', 'secret', 'open'];

        for ($i = 0; $i < 15; $i++) {
            $groupe = new Groupe();

            $groupe->setName(ucfirst($faker->words(2, true)));
            $groupe->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween('-2 years', 'now')));
            $groupe->setType($faker->randomElement(GroupTypeEnum::cases()));
            $groupe->setColor($faker->randomElement(ColorEnum::cases()));
            $groupe->setPicture($faker->imageUrl(400, 300, 'business', true));

            $groupe->setCreator($faker->randomElement($users));

            $manager->persist($groupe);

            $this->addReference('groupe_' . $i, $groupe);
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            UserFixtures::class,
        ];
    }
}
