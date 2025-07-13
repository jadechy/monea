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
    public function findBudgetByCategoryAndDate(int $categoryId, DateTimeImmutable $date): ?Budget
    {
        /** @var Budget|null */
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
    public function findBudgetByCategory(int $categoryId): array
    {
        /** @var Budget[]  */
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
    public function findBudgetByGroupAndYear(int $groupeId, DateTimeImmutable $year): array
    {
        $startDate = (new \DateTimeImmutable())->setDate((int)$year->format('Y'), 1, 1)->setTime(0, 0);
        $endDate = $startDate->modify('+1 year');

        $qb = $this->createQueryBuilder('b');

        /** @var Budget[] */
        return $qb->select('b')
            ->leftJoin('b.category', 'c')
            ->leftJoin('c.groupe', 'g')
            ->where('g.id = :groupeId')
            ->andWhere('b.monthStart >= :startDate')
            ->andWhere('b.monthStart < :endDate')
            ->orderBy('b.monthStart', 'ASC')
            ->setParameter('groupeId', $groupeId)
            ->setParameter('startDate', $startDate)
            ->setParameter('endDate', $endDate)
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Budget[]
     */
    public function findBudgetByGroupAndMonth(int $groupeId, DateTimeImmutable $month): array
    {
        $startDate = $month;
        $endDate = $startDate->modify('+1 month');

        $qb = $this->createQueryBuilder('b');

        /** @var Budget[] */
        return $qb->select('b')
            ->leftJoin('b.category', 'c')
            ->leftJoin('c.groupe', 'g')
            ->where('g.id = :groupeId')
            ->andWhere('b.monthStart >= :startDate')
            ->andWhere('b.monthStart < :endDate')
            ->orderBy('b.monthStart', 'ASC')
            ->setParameter('groupeId', $groupeId)
            ->setParameter('startDate', $startDate)
            ->setParameter('endDate', $endDate)
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Budget|null
     */
    public function findDefaultBudgetByGroupAndMonth(int $groupeId, DateTimeImmutable $startDate): ?Budget
    {
        $endDate = $startDate->modify('+1 month');

        $qb = $this->createQueryBuilder('b');

        /** @var Budget|null */
        return $qb->leftJoin('b.category', 'c')
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
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
