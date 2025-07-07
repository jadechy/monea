<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

use App\Repository\MemberRepository;
use App\Repository\UserRepository;

final class MemberController extends AbstractController
{
    public function __construct(private MemberRepository $memberRepository, private UserRepository $userRepository)
    {
    }

    public function addMember(string $userId, string $memberId, int $groupeId): Response
    {
        
    }

    /**
     * Envoie d'une invitation par mail
     */
    public function sendInvitation(Request $request, MailerInterface $mailer): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $groupeId = !empty($data['groupeId']) ? $data['groupeId'] : null;
        $userId = !empty($data['userId']) ? $data['userId'] : null;
        $mail = !empty($data['mail']) ? $data['mail'] : null;

        if($userId){
            $user = $this->userRepository->find($userId);

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

        if($mail){
            $registerLink = 'https://localhost:5173/auth/register';

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

        // try {
        //     if ($userId) {
        //         $user = $this->userRepository->find($userId);
        //         $baseUrl = 'https://localhost:5173/invitation';
        //         $invitationLink = $baseUrl . '?userId=' . $userId . '&groupeId=' . $groupeId;

        //         $email = (new Email())
        //             ->from('invitation@monea.fr')
        //             ->to($user->getEmail())
        //             ->subject('Invitation à rejoindre un groupe')
        //             ->html($this->renderView('emails/invitation.html.twig', [
        //                 'user' => $user,
        //                 'invitationLink' => $invitationLink,
        //             ]));
        //         $mailer->send($email);
        //     }

        //     if ($mail) {
        //         $registerLink = 'https://localhost:5173/auth/register';

        //         $email = (new Email())
        //             ->from('invitation@monea.fr')
        //             ->to($mail)
        //             ->subject('Invitation à rejoindre un groupe')
        //             ->html($this->renderView('emails/invitation.html.twig', [
        //                 'user' => null,
        //                 'invitationLink' => $registerLink,
        //             ]));
        //         $mailer->send($email);
        //     }
        // } catch (\Exception $e) {
        //     return new JsonResponse([
        //         'message' => 'Erreur lors de l’envoi de l’invitation : ' . $e->getMessage(),
        //     ], 500);
        // }

        return new JsonResponse(['message' => 'Invitation envoyée']);
    }
}
