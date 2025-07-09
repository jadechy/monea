<?php

namespace App\Repository;

use App\Entity\Member;
use App\Entity\User;
use App\Entity\Groupe;
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

    public function findRoleByUserAndGroupe(User $user, Groupe $group): Member
    {
        $qb = $this->createQueryBuilder('m')
            ->leftJoin('m.groupe', 'g')
            ->leftJoin('m.individual', 'i')
            ->where('g.id = :groupId')
            ->andWhere('i.id = :userId')
            ->setParameter('groupId', $user->getId())
            ->setParameter('userId', $group->getId());
        
        $result = $qb->getQuery()->getResult();
        return $result;
    }
}
