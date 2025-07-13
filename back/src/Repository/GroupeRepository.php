<?php

namespace App\Repository;

use App\Entity\Groupe;
use App\Enum\MemberStatusEnum;
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
            ->leftJoin('g.members', 'm')
            ->leftJoin('m.individual', 'i')
            ->where('i.id = :userId')
            ->andWhere('m.status = :status')
            ->setParameter('status', MemberStatusEnum::ACCEPTED->value)
            ->setParameter('userId', $userId);
        /** @var Groupe[] $result */
        $result = $qb->getQuery()->getResult();
        return $result;
    }
}
