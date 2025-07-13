<?php

namespace App\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use App\Entity\Groupe;
use App\Entity\User;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use App\Repository\MemberRepository;

class GroupeVoter extends Voter
{
    final public const MODIFIER = 'modifier';

    public function __construct(private MemberRepository $memberRepository){}
    
    protected function supports(string $attribute, mixed $subject): bool
    {
        if (!in_array($attribute, [self::MODIFIER])) {
            return false;
        }

        if (!$subject instanceof Groupe) {
            return false;
        }

        return true;
    }

    
    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (!$user instanceof User) {
            // l'utilisateur doit être connecté
            return false;
        }
        
        /** 
        * @var Groupe
        */
        $groupe = $subject;
        return match ($attribute) {
            self::MODIFIER => $this->peutModifier($groupe, $user),
            default => throw new \LogicException('This code should not be reached!'),
        };
    }
    
    private function peutModifier(Groupe $groupe, User $user): bool
    {
        $member = $this->memberRepository->findOneBy([
            'groupe' => $groupe,
            'individual' => $user,
        ]);
        
        if (!$member) {
            return false;
        }

        return $member->getStatus() === MemberStatusEnum::ACCEPTED &&
           !in_array($member->getRole(), [
               MemberRoleEnum::VIEWER,
               MemberRoleEnum::ANONYME,
               MemberRoleEnum::BANNED,
               MemberRoleEnum::MEMBER,
           ]);
        
    }

}

