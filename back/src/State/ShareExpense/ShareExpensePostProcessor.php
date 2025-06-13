<?php

namespace App\State\ShareExpense;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\ShareExpense;
use App\Entity\User;
use App\Entity\Expense;
use Doctrine\ORM\EntityManagerInterface;

class ShareExpensePostProcessor implements ProcessorInterface
{
    public function __construct(private EntityManagerInterface $em) {}

    public function process($data, Operation $operation, array $uriVariables = [], array $context = []): ShareExpense
    {
        $user = $this->em->getRepository(User::class)->find($uriVariables['userId']);
        $expense = $this->em->getRepository(Expense::class)->find($uriVariables['expenseId']);

        if (!$user || !$expense) {
            throw new \RuntimeException('User or Expense not found');
        }

        $existing = $this->em->getRepository(ShareExpense::class)->findOneBy([
            'contributor' => $user,
            'expense' => $expense
        ]);

        if ($existing) {
            throw new \RuntimeException('Share Expense already exists');
        }

        $shareExpense = new ShareExpense();
        $shareExpense->setContributor($user);
        $shareExpense->setExpense($expense);
        $shareExpense->setPercentage($data->percentage);

        $this->em->persist($shareExpense);
        $this->em->flush();

        return $shareExpense;
    }
}
