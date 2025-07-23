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
use App\Entity\GroupInvitation;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use App\Repository\MemberRepository;
use App\Repository\UserRepository;
use App\Repository\GroupeRepository;
use App\DTO\MemberInputDTO;
use App\DTO\MemberInvitationDTO;
use App\Voter\GroupVoter;

final class MemberController extends AbstractController
{
    public function __construct(private MemberRepository $memberRepository, private UserRepository $userRepository, private GroupeRepository $groupeRepository, private EntityManagerInterface $em, private SerializerInterface $serializer, private string $urlClient) {}

    /**
     * Envoie d'une invitation par mail
     */
    public function sendInvitation(Request $request, MailerInterface $mailer): JsonResponse
    {
        /** @var \stdClass $data */
        $data = json_decode($request->getContent(), false);

        /** @var int $groupeId */
        $groupeId = !empty($data->groupeId) ? $data->groupeId : null;
        $username = !empty($data->username) ? $data->username : null;
        $mail = !empty($data->mail) ? $data->mail : null;
        /** @var string $role */
        $role = !empty($data->role) ? $data->role : null;

        if (!$groupeId) {
            return new JsonResponse(['error' => 'Groupe ID is missing'], 400);
        }

        $groupe = $this->groupeRepository->find($groupeId);
        if (!$groupe) {
            return new JsonResponse(['error' => 'Groupe not found'], 404);
        }

        if ($username) {
            /** @var User $user */
            $user = $this->userRepository->findOneBy(["username" => $username]);

            $member = new Member();
            $member->setRole(MemberRoleEnum::from($role))
                ->setAddOn(new \DateTimeImmutable())
                ->setStatus(MemberStatusEnum::PENDING)
                ->setGroupe($groupe)
                ->setIndividual($user);
            $this->em->persist($member);
            $this->em->flush();

            // Page de notification avec les demandes d'invitation au sein d'un groupe
            /** @var int $userId */
            $baseUrl = "{$this->urlClient}/user/invitation";
            $invitationLink = $baseUrl . '?userId=' . $user->getId() . '&groupeId=' . $groupeId;

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

        /** @var string $mail */
        if ($mail) {
            $invitation = new GroupInvitation();
            $invitation->setEmail($mail)
                ->setUsed(false)
                ->setGroupe($groupe)
                ->setRole(MemberRoleEnum::from($role));
            $this->em->persist($invitation);
            $this->em->flush();

            $registerLink = "{$this->urlClient}/auth/register?invitationToken=" . $invitation->getToken();

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

    public function getAllInvitation(int $authorId): JsonResponse
    {
        $invitationsData = $this->memberRepository->findAllPendingInvitation($authorId);
        if (!$invitationsData) {
            return $this->json(['error' => 'Membre introuvable'], Response::HTTP_NOT_FOUND);
        }

        $invitations = array_map(
            fn(Member $member) => new MemberInvitationDTO($member),
            $invitationsData
        );

        return $this->json($invitations, Response::HTTP_OK, ['groups' => 'member:read']);
    }

    public function responseInvitation(int $authorId, int $groupeId, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), false);
        $response = $data->response ?? false;

        $member = $this->memberRepository->findOneBy(['groupe' => $groupeId, 'individual' => $authorId]);
        if (!$member) {
            return $this->json(['error' => 'Membre introuvable'], Response::HTTP_NOT_FOUND);
        }

        $member->setStatus($response ? MemberStatusEnum::ACCEPTED : MemberStatusEnum::REFUSED);

        $this->em->persist($member);
        $this->em->flush();

        return new JsonResponse(['message' => 'Réponse enregistrée']);
    }

    public function updateMemberRole(Request $request): JsonResponse
    {
        try {
            /** @var MemberInputDTO $data */
            $data = $this->serializer->deserialize($request->getContent(), MemberInputDTO::class, 'json');
        } catch (\Exception $e) {
            return $this->json(['error' => 'JSON invalide : ' . $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        $groupId = $data->groupId;
        $group = $this->groupeRepository->find($groupId);

        $authorId = $data->authorId;
        if (!$group) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        if (!$authorId) {
            return new JsonResponse(['error' => 'Utilisateur non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }
        $this->denyAccessUnlessGranted(GroupVoter::EDIT, $group);
        $modifMember = $this->memberRepository->findOneBy(['groupe' => $groupId, 'individual' => $authorId]);
        if (!$modifMember) {
            return new JsonResponse(['error' => 'Membre introuvable'], Response::HTTP_NOT_FOUND);
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

    public function leaveGroup(Request $request): JsonResponse
    {
        try {
            /** @var MemberInputDTO $data */
            $data = $this->serializer->deserialize($request->getContent(), MemberInputDTO::class, 'json');
        } catch (\Exception $e) {
            return $this->json(['error' => 'JSON invalide : ' . $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        $groupId = $data->groupId;
        $group = $this->groupeRepository->find($groupId);

        $authorId = $data->authorId;
        if (!$group) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        if (!$authorId) {
            return new JsonResponse(['error' => 'Utilisateur non trouvé.'], Response::HTTP_NOT_FOUND);
        }

        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }
        $this->denyAccessUnlessGranted(GroupVoter::VIEW, $group);

        $modifMember = $this->memberRepository->findOneBy(['groupe' => $groupId, 'individual' => $authorId]);
        if (!$modifMember) {
            return new JsonResponse(['error' => 'Membre introuvable'], Response::HTTP_NOT_FOUND);
        }

        $modifMember->setRole(MemberRoleEnum::ANONYME);
        $modifMember->setStatus(MemberStatusEnum::DELETED);

        $this->em->persist($modifMember);
        $this->em->flush();

        return $this->json(
            ['message' => 'Le membre est bien parti du groupe'],
            Response::HTTP_OK,
            []
        );
    }
}
