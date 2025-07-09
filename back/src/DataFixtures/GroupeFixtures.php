<?php

namespace App\DataFixtures;

use App\Entity\Category;
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

        for ($i = 0; $i < 15; $i++) {
            $groupe = new Groupe();
            $words = $faker->words(2, true);
            /** @var string $name */
            $name = ucfirst(is_array($words) ? implode(' ', $words) : $words);
            $groupe->setName($name);
            $groupe->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween('-2 years', 'now')));
            $filteredTypes = array_filter(GroupTypeEnum::cases(), fn($case) => $case !== GroupTypeEnum::PERSONNAL);
            /** @var GroupTypeEnum  */
            $type = $faker->randomElement($filteredTypes);
            $groupe->setType($type);
            /** @var ColorEnum  */
            $color = $faker->randomElement(ColorEnum::cases());
            $groupe->setColor($color);
            $groupe->setPicture($faker->imageUrl(400, 300, 'business', true));
            /** @var User  */
            $user = $faker->randomElement($users);
            $groupe->setCreator($user);
            $manager->persist($groupe);
            $defaultCategory = new Category();
            $defaultCategory->setLabel('default');
            $defaultCategory->setColor(ColorEnum::Gray);
            $defaultCategory->setGroupe($groupe);
            $manager->persist($defaultCategory);
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
