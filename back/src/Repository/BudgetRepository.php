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
        $qb = $this->createQueryBuilder('b')
            ->leftJoin('b.category', 'c')
            ->where('c.id = :catId')
            ->andWhere('b.monthStart = :date')
            ->setParameter('catId', $categoryId)
            ->setParameter('date', $date);
        /** @var Budget|null $result */
        $result = $qb->getQuery()->getOneOrNullResult();
        return $result;
    }

    /**
     * @return Budget[]
     */
    public function findBudgetByCategory(int $categoryId): array
    {
        $qb = $this->createQueryBuilder('b')
            ->leftJoin('b.category', 'c')
            ->where('c.id = :categoryId')
            ->setParameter('categoryId', $categoryId);

        /** @var Budget[] $results */
        $results = $qb->getQuery()->getResult();
        return $results;
    }

    /**
     * @return Budget[]
     */
    public function findBudgetByGroupAndYear(int $groupeId, DateTimeImmutable $year): array
    {
        $startDate = (new \DateTimeImmutable())->setDate((int)$year->format('Y'), 1, 1)->setTime(0, 0);
        $endDate = $startDate->modify('+1 year');

        $qb = $this->createQueryBuilder('b');

        $qb->select(
            "SUBSTRING(b.monthStart, 1, 7) AS month",
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

        /** @var Budget[] $results */
        $results = $qb->getQuery()->getResult();
        return $results;
    }

    /**
     * @return Budget[]
     */
    public function findBudgetByGroupAndMonth(int $groupeId, DateTimeImmutable $month): array
    {
        $startDate = $month;
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

        /** @var Budget[] $results */
        $results = $qb->getQuery()->getResult();
        return $results;
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


        /** @var Budget|null $result */
        $result = $qb->getQuery()->getOneOrNullResult();
        return $result;
    }
}
