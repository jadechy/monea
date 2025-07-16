<?php

namespace App\Voter;

use App\Entity\User;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use App\Repository\MemberRepository;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;

/**
 * @extends Voter<string, mixed>
 */
class ExpenseVoter extends Voter
{
    final public const CREER = 'creer';

    public function __construct(private MemberRepository $memberRepository) {}

    protected function supports(string $attribute, mixed $subject): bool
    {
        return $attribute === self::CREER && $subject instanceof CreateExpenseSubject;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();

        if (!$user instanceof User) {
            // L'utilisateur doit être connecté
            return false;
        }

        return match ($attribute) {
            self::CREER => $this->handleCreer($subject),
            default => throw new \LogicException('This code should not be reached!'),
        };
    }

    /**
     * @param mixed $subject
     */
    private function handleCreer(mixed $subject): bool
    {
        \assert($subject instanceof CreateExpenseSubject);
        return $this->peutCreer($subject);
    }

    private function peutCreer(CreateExpenseSubject $subject): bool
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
