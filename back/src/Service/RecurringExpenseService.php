<?php

namespace App\Service;

use App\DTO\ExpenseInputDTO;
use App\Entity\Expense;
use App\Entity\RecurringExpense;
use App\Exception\RecurringExpenseValidationException;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class RecurringExpenseService
{
    public function __construct(
        private readonly RecurrenceDateGenerator $dateGenerator,
        private ValidatorInterface $validator,
        private EntityManagerInterface $em

    ) {}

    public function createSeries(Expense $baseExpense, ExpenseInputDTO $data): void
    {
        if (
            !isset($data->recurring->frequency) ||
            !isset($data->recurring->repetitionCount) ||
            !isset($data->recurring->endDate)
        ) {
            throw new \InvalidArgumentException('Champs de récurrence manquants');
        };
        $recurring = new RecurringExpense();
        $recurring->setFrequency($data->recurring->frequency);
        $recurring->setRepetitionCount($data->recurring->repetitionCount);
        $recurring->setEndDate($data->recurring->endDate);
        $dates = $this->dateGenerator->generate(
            $baseExpense->getSpentAt(),
            $recurring->getFrequency(),
            $recurring->getRepetitionCount(),
            $recurring->getEndDate()
        );
        $errors = $this->validator->validate($recurring);
        if (count($errors) > 0) {
            throw new RecurringExpenseValidationException($errors);
        }
        $this->em->persist($recurring);

        $baseExpense->setRecurringExpense($recurring);

        foreach ($dates as $date) {
            if ($date == $baseExpense->getSpentAt()) {
                continue;
            }
            
            $copy = $baseExpense->cloneAsRecurringInstance($date, $recurring);
            $this->em->persist($copy);
        }
        $this->em->flush();
    }
}
