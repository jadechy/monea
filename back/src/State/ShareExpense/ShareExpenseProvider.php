<?php

namespace App\State\ShareExpense;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\Entity\ShareExpense;
use Doctrine\ORM\EntityManagerInterface;

class ShareExpenseProvider implements ProviderInterface
{
    public function __construct(private EntityManagerInterface $em) {}

    public function provide(Operation $operation, array $uriVariables = [], array $context = []): ?ShareExpense
    {
        return $this->em->getRepository(ShareExpense::class)->findOneBy([
            'contributor' => $uriVariables['userId'],
            'expense' => $uriVariables['expenseId'],
        ]);
    }
}
