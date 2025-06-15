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

    public function findExpensesByGroupeAndDate(int $groupeId, \DateTimeInterface $date)
    {
        $start = (clone $date)->modify('first day of this month')->setTime(0,0,0);
        $end = (clone $date)->modify('last day of this month')->setTime(23,59,59);

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
