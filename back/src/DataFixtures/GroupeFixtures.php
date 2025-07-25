<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Groupe;
use App\Entity\User;
use App\Entity\Member;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
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
            /** @var User  */
            $user = $faker->randomElement($users);
            $manager->persist($groupe);

            $defaultCategory = new Category();
            $defaultCategory->setLabel('default')
                ->setColor(ColorEnum::Gray)
                ->setGroupe($groupe);
            $manager->persist($defaultCategory);

            $member = new Member();
            $member
                ->setRole(MemberRoleEnum::AUTHOR)
                ->setStatus(MemberStatusEnum::ACCEPTED)
                ->setAddOn(new \DateTimeImmutable())
                ->setGroupe($groupe)
                ->setIndividual($user);
            $manager->persist($member);

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
