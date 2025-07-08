<?php

namespace App\Repository;

use App\Entity\Groupe;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Groupe>
 */
class GroupeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Groupe::class);
    }

    /**
     * @return Groupe[]
     */
    public function findGroupesByUser(int $userId): array
    {
        $qb = $this->createQueryBuilder('g')
            ->leftJoin('g.creator', 'c')
            ->leftJoin('g.members', 'm')
            ->leftJoin('m.individual', 'i')
            ->where('c.id = :userId OR i.id = :userId')
            ->setParameter('userId', $userId);
        /** @var Groupe[] $result */
        $result = $qb->getQuery()->getResult();
        return $result;
    }

    //    /**
    //     * @return Groupe[] Returns an array of Groupe objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('g')
    //            ->andWhere('g.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('g.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Groupe
    //    {
    //        return $this->createQueryBuilder('g')
    //            ->andWhere('g.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
