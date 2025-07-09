<?php

namespace App\DataFixtures;

use App\Entity\Expense;
use App\Entity\Groupe;
use App\Entity\Category;
use App\Entity\RecurringExpense;
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

        $groupes = [];
        for ($i = 0; $i < 3; $i++) {
            /** @var Groupe $groupe */
            $groupe = $this->getReference('groupe_' . $i, Groupe::class);
            $groupes[] = $groupe;
        }

        $categoriesParGroupe = [];
        for ($i = 0; $i < 20; $i++) {
            /** @var Category $cat */
            $cat = $this->getReference('category_' . $i, Category::class);
            $groupeId = $cat->getGroupe()->getId();
            $categoriesParGroupe[$groupeId][] = $cat;
        }

        for ($i = 0; $i < 20; $i++) {
            $expense = new Expense();

            /** @var string $title */
            $title = $faker->words(mt_rand(2, 5), true);
            $expense->setTitle($title);
            $expense->setAmount($faker->randomFloat(2, 5, 200));
            $expense->setSpentAt(\DateTimeImmutable::createFromMutable($faker->dateTimeBetween('-3 months', 'now')));
            $expense->setCreatedAt(new \DateTimeImmutable());
            /** @var Groupe $groupe */
            $groupe = $faker->randomElement($groupes);
            $expense->setGroupe($groupe);

            $groupeId = $groupe->getId();
            $categories = $categoriesParGroupe[$groupeId] ?? [];

            if (!empty($categories)) {
                /** @var Category $category */
                $category = $faker->randomElement($categories);
                $expense->setCategory($category);
            }

            /** @var string $userRef */
            $userRef = $faker->randomElement($userRefs);
            $expense->setCreator($this->getReference($userRef, User::class));

            $participants = [];
            $numParticipants = $faker->numberBetween(1, 3);

            while (count($participants) < $numParticipants) {
                $userRef = $faker->randomElement($userRefs);
                if (!in_array($userRef, $participants)) {
                    $participants[] = $userRef;
                }
            }

            foreach ($participants as $userRef) {
                /** @var string $userRef */
                /** @var User $user */
                $user = $this->getReference($userRef, User::class);
                $expense->addParticipant($user);
            }
            if ($i % 3 === 0) {
                $recurring = $this->getReference('recurring_expense_' . ($i % 5), RecurringExpense::class);
                $expense->setRecurringExpense($recurring);
            }
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
            RecurringExpenseFixtures::class
        ];
    }
}
