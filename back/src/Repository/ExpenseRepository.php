<?php

namespace App\Repository;

use App\Entity\Expense;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Expense>
 */
class ExpenseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Expense::class);
    }

    /**
     * @return Expense[]
     */
    public function findExpensesByGroupeBetweenDates(int $groupeId, \DateTimeInterface $start, \DateTimeInterface $end): array
    {
        /** @var Expense[] */
        return $this->createQueryBuilder('e')
            ->leftJoin('e.groupe', 'g')
            ->where('g.id = :groupeId')
            ->andWhere('e.spentAt BETWEEN :start AND :end')
            ->setParameter('groupeId', $groupeId)
            ->setParameter('start', $start)
            ->setParameter('end', $end)
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Expense[]
     */
    public function findExpensesByGroupeAndDay(int $groupeId, \DateTimeImmutable $day): array
    {
        $startOfDay = (clone $day)->setTime(0, 0, 0);
        $endOfDay = (clone $day)->setTime(23, 59, 59);

        /** @var Expense[] */
        return $this->createQueryBuilder('e')
            ->leftJoin('e.groupe', 'g')
            ->where('g.id = :groupeId')
            ->andWhere('e.spentAt BETWEEN :start AND :end')
            ->setParameter('groupeId', $groupeId)
            ->setParameter('start', $startOfDay)
            ->setParameter('end', $endOfDay)
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Expense[]
     */
    public function findExpensesByCategoryAndDate(int $catId, \DateTimeImmutable $date): array
    {
        $start = (clone $date)->modify('first day of this month')->setTime(0, 0, 0);
        $end = (clone $date)->modify('last day of this month')->setTime(23, 59, 59);

        /** @var Expense[] */
        return $this->createQueryBuilder('e')
            ->leftJoin('e.category', 'c')
            ->where('c.id = :categoryId')
            ->andWhere('e.spentAt BETWEEN :start AND :end')
            ->setParameter('categoryId', $catId)
            ->setParameter('start', $start)
            ->setParameter('end', $end)
            ->getQuery()
            ->getResult();
    }


    /**
     * @return Expense[]
     */
    public function findExpensesByGroupAndYear(int $groupeId, \DateTimeImmutable $year): array
    {
        $startDate = (new \DateTimeImmutable())->setDate((int)$year->format('Y'), 1, 1)->setTime(0, 0);
        $endDate = $startDate->modify('+1 year');

        /** @var Expense[] */
        return $this->createQueryBuilder('e')
            ->join('e.category', 'c')
            ->join('e.groupe', 'g')
            ->where('g.id = :groupId')
            ->andWhere('e.spentAt >= :startDate')
            ->andWhere('e.spentAt < :endDate')
            ->orderBy('e.spentAt', 'ASC')
            ->setParameter('groupId', $groupeId)
            ->setParameter('startDate', $startDate)
            ->setParameter('endDate', $endDate)
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Expense[]
     */
    public function findExpensesByGroupAndMonth(int $groupeId, \DateTimeImmutable $month): array
    {
        $startDate = $month;
        $endDate = $startDate->modify('+1 month');

        /** @var Expense[] */
        return $this->createQueryBuilder('e')
            ->join('e.category', 'c')
            ->join('e.groupe', 'g')
            ->where('g.id = :groupId')
            ->andWhere('e.spentAt >= :startDate')
            ->andWhere('e.spentAt < :endDate')
            ->setParameter('groupId', $groupeId)
            ->setParameter('startDate', $startDate)
            ->setParameter('endDate', $endDate)
            ->getQuery()
            ->getResult();
    }
}
