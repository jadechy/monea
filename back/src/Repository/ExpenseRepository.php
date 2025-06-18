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

    public function findExpensesByGroupeBetweenDates(int $groupeId, \DateTimeInterface $start, \DateTimeInterface $end)
    {
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

    public function findExpensesByGroupeAndDay(int $groupeId, \DateTimeInterface $day)
    {
        $startOfDay = (clone $day)->setTime(0, 0, 0);
        $endOfDay = (clone $day)->setTime(23, 59, 59);

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

    public function findExpensesByCategoryAndDate(int $catId, \DateTimeInterface $date)
    {
        $start = (clone $date)->modify('first day of this month')->setTime(0,0,0);
        $end = (clone $date)->modify('last day of this month')->setTime(23,59,59);

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

    public function findExpensesByGroupAndYear($groupeId, $year)
    {
        $startDate = new \DateTimeImmutable("$year-01-01");
        $endDate = $startDate->modify('+1 year');

        $qb = $this->createQueryBuilder('e');
        $qb->select(
            "SUBSTRING(e.spentAt, 1, 7) AS month", // 'YYYY-MM' sur la date ISO string
            "c.id AS categoryId",
            "c.label AS categoryLabel",
            "c.color AS categoryColor",
            "SUM(e.amount) AS totalAmount"
        )
        ->join('e.category', 'c')
        ->join('e.groupe', 'g')
        ->where('g.id = :groupId')
        ->andWhere('e.spentAt >= :startDate')
        ->andWhere('e.spentAt < :endDate')
        ->groupBy('month, categoryId, categoryLabel, categoryColor')
        ->orderBy('month', 'ASC')
        ->setParameter('groupId', $groupeId)
        ->setParameter('startDate', $startDate)
        ->setParameter('endDate', $endDate);

        $results = $qb->getQuery()->getResult();

        return $results;
    }

    //    /**
    //     * @return Expense[] Returns an array of Expense objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('e')
    //            ->andWhere('e.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('e.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Expense
    //    {
    //        return $this->createQueryBuilder('e')
    //            ->andWhere('e.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
