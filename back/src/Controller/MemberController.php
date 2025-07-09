<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;

use App\Entity\Member;
use App\Entity\User;
use App\Entity\Groupe;
use App\Entity\GroupInvitation;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use App\Repository\MemberRepository;
use App\Repository\UserRepository;
use App\Repository\GroupeRepository;
use App\Repository\GroupInvitationRepository;
use App\DTO\MemberInputDTO;

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
        $role = !empty($data['role']) ? $data['role'] : null;

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
            $member->setRole(MemberRoleEnum::from($role));
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
            $invitation->setRole(MemberRoleEnum::from($role));
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

    public function responseInvitation(int $authorId, int $groupeId, Request $request): JsonResponse
    {
        $response = $request->query->getBoolean('response', false);

        $member = $this->memberRepository->findOneBy(['groupe' => $groupeId, 'individual' => $authorId]);

        $member->setStatus($response ? MemberStatusEnum::ACCEPTED : MemberStatusEnum::REFUSED);

        $this->em->persist($member);
        $this->em->flush();

        return new JsonResponse(['message' => 'Réponse enregistrée']);
    }

    public function updateMemberRole(Request $request, SerializerInterface $serializer): JsonResponse
    {
        try {
            /** @var MemberInputDTO $data */
            $data = $serializer->deserialize($request->getContent(), MemberInputDTO::class, 'json');
        } catch (\Exception $e) {
            return $this->json(['error' => 'JSON invalide : ' . $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        $groupId = $data->groupId;
        $authorId = $data->authorId;
        if (!$groupId) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        if (!$authorId) {
            return new JsonResponse(['error' => 'Utilisateur non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }

        $member = $this->memberRepository->findOneBy(['groupe' => $groupId, 'individual' => $user->getId()]);
        if (!$member) {
            return new JsonResponse(['error' => 'Vous n\'êtes pas un membre du groupe.'], Response::HTTP_NOT_FOUND);
        }

        $modifMember = $this->memberRepository->findOneBy(['groupe' => $groupId, 'individual' => $authorId]);

        if($member->getRole() !== MemberRoleEnum::AUTHOR && $modifMember->getRole() == MemberRoleEnum::AUTHOR){
            throw $this->createAccessDeniedException('Vous n\'avez pas les droits pour modifier');
        }

        if($member->getRole() !== MemberRoleEnum::AUTHOR && $member->getRole() !== MemberRoleEnum::ADMIN) {
            throw $this->createAccessDeniedException('Vous n\'avez pas les droits pour modifier');
        }
            
        $modifMember->setRole($data->role);

        $this->em->persist($modifMember);
        $this->em->flush();

        return $this->json(
            ['message' => 'Le membre a bien été enregistrée'],
            Response::HTTP_OK,
            []
        );
        
    }

    public function leaveGroup(Request $request, SerializerInterface $serializer)
    {
        try {
            /** @var MemberInputDTO $data */
            $data = $serializer->deserialize($request->getContent(), MemberInputDTO::class, 'json');
        } catch (\Exception $e) {
            return $this->json(['error' => 'JSON invalide : ' . $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        $groupId = $data->groupId;
        $authorId = $data->authorId;
        if (!$groupId) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        if (!$authorId) {
            return new JsonResponse(['error' => 'Utilisateur non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }

        $member = $this->memberRepository->findOneBy(['groupe' => $groupId, 'individual' => $user->getId()]);
        if (!$member) {
            return new JsonResponse(['error' => 'Vous n\'êtes pas un membre du groupe.'], Response::HTTP_NOT_FOUND);
        }

        $modifMember = $this->memberRepository->findOneBy(['groupe' => $groupId, 'individual' => $authorId]);

        if($member->getIndividual()->getId() !== $modifMember->getIndividual()->getId()){
            throw $this->createAccessDeniedException('Vous n\'avez pas les droits pour modifier');
        }

        $modifMember->setRole(MemberRoleEnum::ANONYME);
        $modifMember->setStatus(MemberStatusEnum::DELETED);

        $this->em->persist($modifMember);
        $this->em->flush();

        return $this->json(
            ['message' => 'Le membre a bien été enregistrée'],
            Response::HTTP_OK,
            []
        );
    }
}
