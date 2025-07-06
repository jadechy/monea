<?php

namespace App\Service;

use App\Entity\Expense;
use App\Entity\RecurringExpense;
use App\Enum\RecurringFrequencyEnum;
use App\Repository\ExpenseRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class RecurringExpenseService
{
    public function __construct(
        private readonly ExpenseRepository $expenseRepo,
        private readonly RecurrenceDateGenerator $dateGenerator,
        private ValidatorInterface $validator,
        private EntityManagerInterface $em

    ) {}

    public function createSeries(Expense $baseExpense, $data)
    {
        if (
            !isset($data->recurringExpense->frequency) ||
            !isset($data->recurringExpense->repetitionCount) ||
            !isset($data->recurringExpense->endDate)
        ) {
            throw new \InvalidArgumentException('Champs de récurrence manquants');
        };
        $recurring = new RecurringExpense();
        $recurring->setFrequency(RecurringFrequencyEnum::tryFrom($data->recurringExpense->frequency));

        if (!$recurring->getFrequency()) {
            throw new \InvalidArgumentException('Frequency invalide');
        }
        $recurring->setFrequency(RecurringFrequencyEnum::tryFrom($data->recurringExpense->frequency));
        $recurring->setRepetitionCount($data->recurringExpense->repetitionCount);

        $endDate = new \DateTimeImmutable($data->recurringExpense->endDate);
        if (!$endDate) {
            throw new \InvalidArgumentException('Date de fin invalide');
        }
        $recurring->setEndDate($endDate);


        $dates = $this->dateGenerator->generate(

            $baseExpense->getSpentAt(),
            $recurring->getFrequency(),
            $recurring->getRepetitionCount(),
            $recurring->getEndDate()
        );
        $errors = $this->validator->validate($recurring);
        if (count($errors) > 0) {
            return new JsonResponse(
                ['errors' => (string) $errors],
                Response::HTTP_BAD_REQUEST,
                []
            );
        }
        $this->em->persist($recurring);

        $baseExpense->setRecurringExpense($recurring);

        foreach ($dates as $date) {
            if ($date == $baseExpense->getSpentAt()) {
                continue;
            }
            $copy = clone $baseExpense;
            $copy->setSpentAt($date);
            $copy->setRecurringExpense($recurring);
            $this->em->persist($copy);
        }
        $this->em->flush();
    }

    public function updateSeries(RecurringExpense $recurrence, array $fields): void
    {
        foreach ($recurrence->getExpenses() as $expense) {
            foreach ($fields as $field => $value) {
                $setter = 'set' . ucfirst($field);
                if (method_exists($expense, $setter)) {
                    $expense->$setter($value);
                }
            }
            $this->expenseRepo->save($expense);
        }
    }

    public function removeSeriesButKeepOne(Expense $expense): void
    {
        $recurrence = $expense->getRecurringExpense();

        if ($recurrence) {
            foreach ($recurrence->getExpenses() as $e) {
                if ($e->getId() !== $expense->getId()) {
                    $this->expenseRepo->remove($e);
                }
            }
            $expense->setRecurringExpense(null);
            $this->expenseRepo->save($expense);
        }
    }
}
