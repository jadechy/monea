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
        $faker = FakerFactory::create('fr_FR'); // Faker en français

        // Supposons que tu as déjà 3 groupes, 3 categories, 3 users enregistrés avec ces refs :
        $groupesRefs = ['groupe_0', 'groupe_1', 'groupe_2'];
        $categoryRefs = ['category_0', 'category_1', 'category_2'];
        $userRefs = ['user_0', 'user_1', 'user_2'];

        // On va créer 20 dépenses aléatoires
        for ($i = 0; $i < 20; $i++) {
            $expense = new Expense();

            // Titre réaliste en combinant activité et lieu
            $expense->setTitle($faker->words(mt_rand(2, 5), true));

            // Montant réaliste entre 5 et 200 euros
            $expense->setAmount($faker->randomFloat(2, 5, 200));

            // Dates : dépense entre les 3 derniers mois
            $spentAt = $faker->dateTimeBetween('-3 months', 'now');
            $expense->setSpentAt(\DateTimeImmutable::createFromMutable($spentAt));

            // Date de création = date actuelle
            $expense->setCreatedAt(new \DateTimeImmutable());

            // Références associées choisies aléatoirement parmi celles existantes
            $expense->setGroupe($this->getReference($faker->randomElement($groupesRefs), Groupe::class));
            $expense->setCategory($this->getReference($faker->randomElement($categoryRefs), Category::class));
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
