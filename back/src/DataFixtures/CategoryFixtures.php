<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Groupe;
use App\Enum\ColorEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory as FakerFactory;

class CategoryFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = FakerFactory::create('fr_FR');


        $groupes = [
            $this->getReference('groupe_0', Groupe::class),
            $this->getReference('groupe_1', Groupe::class),
            $this->getReference('groupe_2', Groupe::class),
        ];

        for ($i = 0; $i < 20; $i++) {
            $category = new Category();

            $possibleLabels = [
                'Alimentation',
                'Transport',
                'Loisirs',
                'Santé',
                'Education',
                'Habitation',
                'Vacances',
                'Téléphone',
                'Internet',
                'Vêtements',
                'Sport',
                'Culture',
                'Assurances',
                'Impôts',
                'Dons',
                'Animaux',
                'Énergie',
                'Jardinage',
                'Beauté',
                'Automobile'
            ];

            $label = $possibleLabels[array_rand($possibleLabels)];
            $category->setLabel($label);

            $category->setColor($faker->randomElement(ColorEnum::cases()));

            $groupe = $groupes[$i % count($groupes)];
            $category->setGroupe($groupe);

            $manager->persist($category);

            $this->addReference('category_' . $i, $category);
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            GroupeFixtures::class,
        ];
    }
}
