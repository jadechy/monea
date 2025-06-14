<?php

namespace App\DataFixtures;

use App\Entity\RecurringExpense;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class RecurringExpenseFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $frequencies = ['daily', 'weekly', 'monthly', 'yearly'];

        for ($i = 0; $i < 5; $i++) {
            $re = new RecurringExpense();

            $re->setRepetitionCount(10 + $i * 5);
            $re->setFrequency($frequencies[$i % count($frequencies)]);

            $endDate = new \DateTimeImmutable(sprintf('+%d months', $i + 1));
            $re->setEndDate($endDate);

            $manager->persist($re);
        }

        $manager->flush();
    }
}
