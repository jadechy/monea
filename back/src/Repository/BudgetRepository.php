<?php

namespace App\Repository;

use App\Entity\Budget;
use DateTimeImmutable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Budget>
 */
class BudgetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Budget::class);
    }

    /**
     * @return Budget|null
     */
    public function findBudgetByCategoryAndDate($categoryId, $date): ?Budget
    {
        return $this->createQueryBuilder('b')
            ->leftJoin('b.category', 'c')
            ->where('c.id = :catId')
            ->andWhere('b.monthStart = :date')
            ->setParameter('catId', $categoryId)
            ->setParameter('date', $date)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * @return Budget[]
     */
    public function findBudgetByCategory($categoryId): array
    {
        return $this->createQueryBuilder('b')
            ->leftJoin('b.category', 'c')
            ->where('c.id = :categoryId')
            ->setParameter('categoryId', $categoryId)
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Budget[]
     */
    public function findBudgetByGroupAndYear($groupeId, $year): array
    {
        $startDate = new \DateTimeImmutable("$year-01-01");
        $endDate = $startDate->modify('+1 year');

        $qb = $this->createQueryBuilder('b');

        $qb->select(
            "SUBSTRING(b.monthStart, 1, 7) AS month", // 'YYYY-MM' extrait de la date
            "SUM(b.amount) AS totalAmount"
        )
            ->leftJoin('b.category', 'c')
            ->leftJoin('c.groupe', 'g')
            ->where('g.id = :groupeId')
            ->andWhere('b.monthStart >= :startDate')
            ->andWhere('b.monthStart < :endDate')
            ->groupBy('month')
            ->orderBy('month', 'ASC')
            ->setParameter('groupeId', $groupeId)
            ->setParameter('startDate', $startDate)
            ->setParameter('endDate', $endDate);

        return $qb->getQuery()->getResult();
    }

    /**
     * @return Budget[]
     */
    public function findBudgetByGroupAndMonth(int $groupeId, string $month): array
    {
        $startDate = new \DateTimeImmutable($month);
        $endDate = $startDate->modify('+1 month');

        $qb = $this->createQueryBuilder('b');

        $qb->select(
            "SUBSTRING(b.monthStart, 1, 10) AS spendAt",
            "SUM(b.amount) AS totalAmount"
        )
            ->leftJoin('b.category', 'c')
            ->leftJoin('c.groupe', 'g')
            ->where('g.id = :groupeId')
            ->andWhere('b.monthStart >= :startDate')
            ->andWhere('b.monthStart < :endDate')
            ->groupBy('spendAt')
            ->orderBy('spendAt', 'ASC')
            ->setParameter('groupeId', $groupeId)
            ->setParameter('startDate', $startDate)
            ->setParameter('endDate', $endDate);

        return $qb->getQuery()->getResult();
    }

    /**
     * @return Budget|null
     */
    public function findDefaultBudgetByGroupAndMonth(int $groupeId, DateTimeImmutable $startDate): ?Budget
    {
        $endDate = $startDate->modify('+1 month');

        $qb = $this->createQueryBuilder('b');

        $qb->leftJoin('b.category', 'c')
            ->leftJoin('c.groupe', 'g')
            ->where('g.id = :groupeId')
            ->andWhere('b.monthStart >= :startDate')
            ->andWhere('b.monthStart < :endDate')
            ->andWhere('c.label = :categoryLabel')
            ->setParameter('groupeId', $groupeId)
            ->setParameter('startDate', $startDate)
            ->setParameter('endDate', $endDate)
            ->setParameter('categoryLabel', 'default')
            ->orderBy('b.monthStart', 'ASC')
            ->setMaxResults(1);

        return $qb->getQuery()->getOneOrNullResult();
    }

    //    /**
    //     * @return Budget[] Returns an array of Budget objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('b')
    //            ->andWhere('b.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('b.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Budget
    //    {
    //        return $this->createQueryBuilder('b')
    //            ->andWhere('b.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
