<?php

namespace App\Repository;

use App\Entity\Member;
use App\Enum\MemberStatusEnum;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Member>
 */
class MemberRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Member::class);
    }

    public function findAllPendingInvitation(int $authorId)
    {
        /** @var Member[]  */
        return $this->createQueryBuilder('m')
            ->leftJoin('m.individual', 'i')
            ->where('i.id = :authorId')
            ->andWhere('m.status = :pending')
            ->setParameter('authorId', $authorId)
            ->setParameter('pending', MemberStatusEnum::PENDING)
            ->getQuery()
            ->getResult();
    }
}
