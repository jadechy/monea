<?php

namespace App\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

use App\Entity\User;
use App\Entity\Expense;
use App\Repository\MemberRepository;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use App\Voter\CreateExpenseSubject;

class ExpenseVoter extends Voter
{
    final public const CREER = 'creer';

    public function __construct(private MemberRepository $memberRepository){}

    protected function supports(string $attribute, mixed $subject): bool
    {
        // Si l'attribute n'est pas un de ceux supporté, retourne faux
        if (!in_array($attribute, [self::CREER])) {
            return false;
        }
        
        if ($attribute === self::CREER && $subject instanceof CreateExpenseSubject) {
            return true;
        }

        return false;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (!$user instanceof User) {
            // l'utilisateur doit être connecté
            return false;
        }
        
        /** 
        * @var Expense
        */
        $expense = $subject;
        return match ($attribute) {
            self::CREER => $this->peutCreer($subject, $user),
            default => throw new \LogicException('This code should not be reached!'),
        };
    }

    private function peutCreer(CreateExpenseSubject $subject, User $user): bool
    {
        $member = $this->memberRepository->findOneBy([
            'groupe' => $subject->groupe,
            'individual' => $subject->creator,
        ]);

        if (!$member) {
            return false;
        }

        return $member->getStatus() === MemberStatusEnum::ACCEPTED &&
           !in_array($member->getRole(), [
               MemberRoleEnum::VIEWER,
               MemberRoleEnum::ANONYME,
               MemberRoleEnum::BANNED,
           ]);
    }
}