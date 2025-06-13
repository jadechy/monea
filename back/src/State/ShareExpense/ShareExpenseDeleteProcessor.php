<?php

namespace App\State\ShareExpense;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\ShareExpense;
use Doctrine\ORM\EntityManagerInterface;

class ShareExpenseDeleteProcessor implements ProcessorInterface
{
    public function __construct(private EntityManagerInterface $em) {}

    public function process($data, Operation $operation, array $uriVariables = [], array $context = []): void
    {
        $shareExpense = $this->em->getRepository(ShareExpense::class)->findOneBy([
            'contributor' => $uriVariables['userId'],
            'expense' => $uriVariables['expenseId'],
        ]);

        if ($shareExpense) {
            $this->em->remove($shareExpense);
            $this->em->flush();
        }
    }
}
