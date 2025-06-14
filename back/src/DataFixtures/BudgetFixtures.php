<?php

namespace App\DataFixtures;

use App\Entity\Budget;
use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class BudgetFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        // Exemple de budgets à créer
        $budgetsData = [
            [
                'amount' => 500.00,
                'monthStart' => new \DateTimeImmutable('2025-06-01'),
                'category_ref' => 'category_0',
            ],
            [
                'amount' => 200.00,
                'monthStart' => new \DateTimeImmutable('2025-06-01'),
                'category_ref' => 'category_1',
            ],
            [
                'amount' => 150.00,
                'monthStart' => new \DateTimeImmutable('2025-07-01'),
                'category_ref' => 'category_2',
            ],
        ];

        foreach ($budgetsData as $index => $data) {
            $budget = new Budget();
            $budget->setAmount($data['amount']);
            $budget->setMonthStart($data['monthStart']);

            // Récupérer la catégorie via référence
            $budget->setCategory($this->getReference($data['category_ref'], Category::class));

            $manager->persist($budget);

            // Optionnel : référence pour réutiliser dans d'autres fixtures
            $this->addReference('budget_' . $index, $budget);
        }

        $manager->flush();
    }
    public function getDependencies(): array
    {
        return [
            CategoryFixtures::class,
        ];
    }
}
