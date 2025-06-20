<?php

namespace App\DataFixtures;

use App\Entity\Expense;
use App\Entity\Groupe;
use App\Entity\Category;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory as FakerFactory;

class ExpenseFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = FakerFactory::create('fr_FR');

        $userRefs = ['user_0', 'user_1', 'user_2'];

        // Charger tous les groupes et leurs catégories
        $groupes = [];
        for ($i = 0; $i < 3; $i++) {
            /** @var Groupe $groupe */
            $groupe = $this->getReference('groupe_' . $i, Groupe::class);
            $groupes[] = $groupe;
        }

        // Préparer les catégories groupées par groupe
        $categoriesParGroupe = [];
        for ($i = 0; $i < 20; $i++) {
            /** @var Category $cat */
            $cat = $this->getReference('category_' . $i, Category::class);
            $groupeId = $cat->getGroupe()->getId();
            $categoriesParGroupe[$groupeId][] = $cat;
        }

        for ($i = 0; $i < 20; $i++) {
            $expense = new Expense();

            $expense->setTitle($faker->words(mt_rand(2, 5), true));
            $expense->setAmount($faker->randomFloat(2, 5, 200));
            $expense->setSpentAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween('-3 months', 'now')));
            $expense->setCreatedAt(new \DateTimeImmutable());

            // Choisir un groupe
            $groupe = $faker->randomElement($groupes);
            $expense->setGroupe($groupe);

            // Choisir une catégorie associée à ce groupe
            $groupeId = $groupe->getId();
            $categories = $categoriesParGroupe[$groupeId] ?? [];

            if (!empty($categories)) {
                $expense->setCategory($faker->randomElement($categories));
            }

            // Créateur
            $expense->setCreator($this->getReference($faker->randomElement($userRefs), User::class));

            $manager->persist($expense);
            $this->addReference('expense_' . $i, $expense);
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            CategoryFixtures::class,
            GroupeFixtures::class,
            UserFixtures::class,
        ];
    }
}
