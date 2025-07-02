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
        $budgetsCount = 0;

        for ($i = 0; $i < 20; $i++) {
            /** @var Category $category */
            $category = $this->getReference('category_' . $i, Category::class);

            if ($i % 7 > 1) continue;
            $budget = new Budget();
            $budget->setAmount(mt_rand(100, 500));
            $budget->setMonthStart(new \DateTimeImmutable('2025-06-01'));
            $budget->setCategory($category);

            $manager->persist($budget);
            $this->addReference('budget_' . $budgetsCount, $budget);
            $budgetsCount++;
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
