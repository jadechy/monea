<?php

namespace App\State\ShareExpense;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\ShareExpense;
use Doctrine\ORM\EntityManagerInterface;

class ShareExpensePatchProcessor implements ProcessorInterface
{
    public function __construct(private EntityManagerInterface $em) {}

    public function process($data, Operation $operation, array $uriVariables = [], array $context = []): ShareExpense
    {
        $shareExpense = $this->em->getRepository(ShareExpense::class)->findOneBy([
            'contributor' => $uriVariables['userId'],
            'expense' => $uriVariables['expenseId'],
        ]);

        if (!$shareExpense) {
            throw new \RuntimeException('Share Expense not found');
        }

        if (property_exists($data, 'percentage') && $data->percentage !== null) {
            $shareExpense->setPercentage($data->percentage);
        }

        $this->em->flush();

        return $shareExpense;
    }
}
