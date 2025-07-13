<?php

namespace App\Controller;

use App\DTO\UserEditDTO;
use App\DTO\UserRegisterDTO;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Uid\Uuid;

use App\Entity\User;
use App\Entity\Member;
use App\Enum\MemberStatusEnum;
use App\Repository\UserRepository;
use App\Repository\GroupInvitationRepository;
use App\Service\FileUploader;
use App\Service\UserSetupService;
use Symfony\Component\HttpFoundation\Request;

#[AsController]
class UserController extends AbstractController
{
    private string $urlClient;

    public function __construct(
        private GroupInvitationRepository $groupInvitationRepository,
        private ValidatorInterface $validator,
        private EntityManagerInterface $em,
        private UserPasswordHasherInterface $passwordHasher,
        private UserSetupService $userSetupService,
        private UserRepository $userRepository
    ) {}

    public function register(UserRegisterDto $input): JsonResponse
    {
        $errors = $this->validator->validate($input);
        if (count($errors) > 0) {
            return $this->json(['errors' => (string) $errors], 400);
        }

        if ($input->password !== $input->confirmPassword) {
            return $this->json(['errors' => 'Les mots de passe ne correspondent pas'], 400);
        }

        $user = new User();
        $user->setEmail($input->email)
            ->setUsername($input->username)
            ->setName($input->name)
            ->setLastname($input->lastname)
            ->setCreatedAt(new \DateTimeImmutable())
            ->setRoles(["ROLE_USER"])
            ->setBirthday($input->birthday);

        $hashedPassword = $this->passwordHasher->hashPassword($user, $input->password);
        $user->setPassword($hashedPassword);
        $errorsUser = $this->validator->validate($user);
        if (count($errorsUser) > 0) {
            return $this->json(['errors' => (string) $errorsUser], Response::HTTP_BAD_REQUEST);
        }
        $this->em->persist($user);

        $error = $this->userSetupService->setupUser($user);
        if ($error) {
            return $this->json($error, Response::HTTP_BAD_REQUEST);
        }

        if ($input->invitationToken) {
            $invitation = $this->groupInvitationRepository->findOneBy(['token' => $input->invitationToken, 'used' => false]);
            if (!$invitation) {
                return new JsonResponse(['error' => 'Invitation invalide ou déjà utilisée'], Response::HTTP_BAD_REQUEST);
            }
            $member = new Member();
            $member->setIndividual($user)
                ->setGroupe($invitation->getGroupe())
                ->setAddOn(new \DateTimeImmutable())
                ->setStatus(MemberStatusEnum::PENDING)
                ->setRole($invitation->getRole());
            $invitation->setUsed(true);
            $this->em->persist($member);
        }
        $this->em->flush();

        return $this->json(['message' => 'Utilisateur créé avec succès'], Response::HTTP_CREATED);
    }

    public function me(): User
    {
        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }

        return $user;
    }

    public function updateUser(UserEditDTO $input): JsonResponse
    {
        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }

        $errors = $this->validator->validate($input);
        if (count($errors) > 0) {
            return $this->json(['errors' => (string) $errors], 400);
        }

        if ($input->email !== null) {
            $user->setEmail($input->email);
        }
        if ($input->username !== null) {
            $user->setUsername($input->username);
        }
        if ($input->name !== null) {
            $user->setName($input->name);
        }
        if ($input->lastname !== null) {
            $user->setLastname($input->lastname);
        }
        if ($input->birthday !== null) {
            try {
                $birthday = new \DateTimeImmutable($input->birthday);
                $user->setBirthday($birthday);
            } catch (\Exception $e) {
                return $this->json(['error' => 'Invalid birthday format'], 400);
            }
        }

        $this->em->flush();

        return $this->json(['message' => 'Utilisateur mis à jour avec succès']);
    }
    public function uploadPicture(Request $request, FileUploader $uploader, EntityManagerInterface $em): JsonResponse
    {

        $user = $this->getUser();

        if (!$user instanceof User) {
            throw $this->createAccessDeniedException('User not authenticated');
        }
        /** @var UploadedFile $file */
        $file = $request->files->get('picture');


        if (!$file) {
            return new JsonResponse(['error' => 'No file provided'], 400);
        }
        if ($user->getPicture()) {
            $oldPath = $uploader->getTargetDirectory() . '/' . basename($user->getPicture());
            if (file_exists($oldPath)) {
                unlink($oldPath);
            }
        }
        if (!in_array($file->getMimeType(), ['image/jpeg', 'image/png'])) {
            return new JsonResponse(['error' => 'Format non supporté'], 400);
        }
        if ($file->getSize() > 7 * 1024 * 1024) {
            return new JsonResponse(['error' => 'Fichier trop volumineux'], 400);
        }
        $filename = $uploader->upload($file, '/user');
        $user->setPicture('/uploads/user/' . $filename);
        $em->flush();

        return new JsonResponse(['picture' => $user->getPicture()]);
    }

    public function forgot(Request $request, MailerInterface $mailer): Response
    {
        $data = json_decode($request->getContent());

        if (!$data || !isset($data->email)) {
            return new JsonResponse(['message' => 'Email manquant ou JSON invalide.'], 400);
        }

        $email = $data->email;

        $user = $this->userRepository->findOneBy(['email' => $email]);
        if (!$user) {
            return new JsonResponse(['error' => 'Aucun utilisateur trouvé avec cette email'], 400);
        }

        $resetToken = Uuid::v4();
        $user->setResetToken($resetToken);

        $this->em->persist($user);
        $this->em->flush();

        // Page de reset de mot de passe
        $baseUrl = "http://localhost:3000/auth/reset";
        $resetLink = $baseUrl . '?resetToken=' . $resetToken;

        $email = (new Email())
            ->from('contact@monea.fr')
            ->to($user->getEmail())
            ->subject('Réinitialisation de votre mot de passe')
            ->html($this->renderView('emails/forgot.html.twig', [
                'user' => $user,
                'resetLink' => $resetLink,
            ]));
        $mailer->send($email);

        return $this->json(['message' => 'Un email de réinitialisation de mot de passe a été envoyé.']);
    }

    public function reset(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent());
        if (!$data || !isset($data->resetToken)) {
            return new JsonResponse(['message' => 'Token manquant ou JSON invalide.'], 400);
        }

        $user = $this->userRepository->findOneBy(['resetToken' => $data->resetToken]);

        if (!$user) {
            throw $this->createNotFoundException('Jeton de réinitialisation invalide.');
        }
   
        /** @var string $password */
        $password = $data->password;
        $repeatPassword = $data->repeatPassword;

        if ($password !== $repeatPassword) {
            return $this->json(['error' => 'Les mots de passe ne correspondent pas.']);
        }

        $user->setPlainPassword($password);
        $user->setResetToken(null);

        $this->em->flush();

        return $this->json(['message' => 'Votre mot de passe a été réinitialisé avec succès']);
    }
}
