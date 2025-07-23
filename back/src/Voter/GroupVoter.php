<?php

namespace App\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use App\Entity\Groupe;
use App\Entity\User;
use App\Repository\MemberRepository;

/**
 * @extends Voter<string, mixed>
 */
class GroupVoter extends Voter
{
    final public const VIEW = 'view';
    final public const EDIT = 'edit';
    final public const MANAGE = 'manage';
    final public const DELETE = 'delete';

    public function __construct(private MemberRepository $memberRepository) {}

    protected function supports(string $attribute, mixed $subject): bool
    {
        if (!in_array($attribute, [self::VIEW, self::EDIT, self::DELETE, self::MANAGE], true)) {
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
            return false;
        }

        /** @var Groupe $groupe */
        $groupe = $subject;

        $member = $this->memberRepository->findOneBy([
            'groupe' => $groupe,
            'individual' => $user,
        ]);

        if (!$member) {
            return false;
        }

        // On vérifie que le membre est accepté
        if (!$member->getStatus()->isActive()) {
            return false;
        }

        return match ($attribute) {
            self::VIEW => $member->getRole()->canView(),
            self::EDIT => $member->getRole()->canEdit(),
            self::DELETE => $member->getRole()->canDelete(),
            self::MANAGE => $member->getRole()->canManageExpenses(),
            default => throw new \LogicException('This code should not be reached!'),
        };
    }
}
