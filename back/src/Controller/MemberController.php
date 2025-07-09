<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Doctrine\ORM\EntityManagerInterface;

use App\Repository\MemberRepository;
use App\Repository\UserRepository;
use App\Repository\GroupeRepository;
use App\Entity\Member;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;

use App\Entity\GroupInvitation;
use App\Repository\GroupInvitationRepository;

final class MemberController extends AbstractController
{
    public function __construct(private MemberRepository $memberRepository, private UserRepository $userRepository, private GroupeRepository $groupeRepository, private GroupInvitationRepository $groupInvitationRepository, private EntityManagerInterface $em) {}

    // public function addMember(string $userId, string $memberId, int $groupeId): Response {}

    /**
     * Envoie d'une invitation par mail
     */
    public function sendInvitation(Request $request, MailerInterface $mailer): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $groupeId = !empty($data['groupeId']) ? $data['groupeId'] : null;
        $userId = !empty($data['userId']) ? $data['userId'] : null;
        $mail = !empty($data['mail']) ? $data['mail'] : null;

        if (!$groupeId) {
            return new JsonResponse(['error' => 'Groupe ID is missing'], 400);
        }

        $groupe = $this->groupeRepository->find($groupeId);
        if (!$groupe) {
            return new JsonResponse(['error' => 'Groupe not found'], 404);
        }

        if ($userId) {
            $user = $this->userRepository->find($userId);

            $member = new Member();
            $member->setRole(MemberRoleEnum::MEMBER);
            $member->setAddOn(new \DateTimeImmutable());
            $member->setStatus(MemberStatusEnum::PENDING);
            $member->setGroupe($groupe);
            $member->setIndividual($user);
            $this->em->persist($member);
            $this->em->flush();

            // Page de notification avec les demandes d'invitation au sein d'un groupe
            $baseUrl = 'https://localhost:5173/invitation';
            $invitationLink = $baseUrl . '?userId=' . $userId . '&groupeId=' . $groupeId;

            $email = (new Email())
                ->from('invitation@monea.fr')
                ->to($user->getEmail())
                ->subject('Invitation à rejoindre un groupe')
                ->html($this->renderView('emails/invitation.html.twig', [
                    'user' => $user,
                    'invitationLink' => $invitationLink,
                ]));
            $mailer->send($email);
        }

        if ($mail) {
            $invitation = new GroupInvitation();
            $invitation->setEmail($mail);
            $invitation->setUsed(false);
            $invitation->setGroupe($groupe);
            $this->em->persist($invitation);
            $this->em->flush();

            $registerLink = 'https://localhost:5173/auth/register?invitationToken=' . $invitation->getToken();

            $email = (new Email())
                ->from('invitation@monea.fr')
                ->to($mail)
                ->subject('Invitation à rejoindre un groupe')
                ->html($this->renderView('emails/invitation.html.twig', [
                    'user' => null,
                    'invitationLink' => $registerLink,
                ]));
            $mailer->send($email);
        }

        return new JsonResponse(['message' => 'Invitation envoyée']);
    }

}
