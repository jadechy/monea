<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Groupe;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class CategoryFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $colors = ['red', 'blue', 'green', 'orange', 'violet', 'yellow', 'teal', 'pink', 'cyan'];

        $groupes = [
            $this->getReference('groupe_0', Groupe::class),
            $this->getReference('groupe_1', Groupe::class),
            $this->getReference('groupe_2', Groupe::class),
        ];

        // Génération de 20 catégories
        for ($i = 0; $i < 20; $i++) {
            $category = new Category();

            // Labels réalistes autour de thèmes courants (via Faker ou fixe)
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

            // Prendre un label fixe mais random dans la liste (pour cohérence)
            $label = $possibleLabels[array_rand($possibleLabels)];
            $category->setLabel($label);

            // Couleur aléatoire dans la liste
            $color = $colors[array_rand($colors)];
            $category->setColor($color);

            // Associer à un groupe en cycle
            $groupe = $groupes[$i % count($groupes)];
            $category->setGroupe($groupe);

            $manager->persist($category);

            // Ajouter référence pour d'autres fixtures
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
