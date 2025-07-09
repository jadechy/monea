<?php

namespace App\DataFixtures;

use App\Entity\RecurringExpense;
use App\Enum\RecurringFrequencyEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class RecurringExpenseFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');


        for ($i = 0; $i < 5; $i++) {
            $re = new RecurringExpense();

            $re->setRepetitionCount(10 + $i * 5);

            /** @var RecurringFrequencyEnum $frequency */
            $frequency = $faker->randomElement(RecurringFrequencyEnum::cases());
            $re->setFrequency($frequency);

            $endDate = new \DateTimeImmutable(sprintf('+%d months', $i + 1));
            $re->setEndDate($endDate);

            $manager->persist($re);
            $this->addReference('recurring_expense_' . $i, $re);
        }

        $manager->flush();
    }
}
