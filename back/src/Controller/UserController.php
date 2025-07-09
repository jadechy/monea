<?php

namespace App\Controller;

use App\DTO\UserEditDTO;
use App\DTO\UserRegisterDTO;
use App\Entity\Groupe;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

use App\Entity\User;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;
use App\Repository\UserRepository;
use App\Entity\Member;
use App\Enum\MemberRoleEnum;
use App\Enum\MemberStatusEnum;
use App\Repository\GroupInvitationRepository;

#[AsController]
class UserController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository,
        private GroupInvitationRepository $groupInvitationRepository,
        private SerializerInterface $serializer,
        private ValidatorInterface $validator,
        private EntityManagerInterface $em,
        private UserPasswordHasherInterface $passwordHasher
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
        $user->setEmail($input->email);
        $user->setUsername($input->username);
        $user->setName($input->name);
        $user->setLastname($input->lastname);
        $user->setCreatedAt(new \DateTimeImmutable());
        $user->setRoles(["ROLE_USER"]);
        // $user->setBirthday($input->birthday);

        $hashedPassword = $this->passwordHasher->hashPassword($user, $input->password);
        $user->setPassword($hashedPassword);

        $this->em->persist($user);

        $group = new Groupe();
        $group->setName("Personnel");
        $group->setType(GroupTypeEnum::PERSONNAL);
        $group->setCreator($user);
        $group->setCreatedAt(new \DateTimeImmutable());
        $group->setColor(ColorEnum::Pink);
        $group->setPicture('');
        $this->em->persist($group);
        $this->em->flush();

        if($input->invitationToken){
            $invitation = $this->groupInvitationRepository->findOneBy(['token' => $input->invitationToken, 'used' => false]);
            if (!$invitation) {
                return new JsonResponse(['error' => 'Invitation invalide ou déjà utilisée'], 404);
            }

            $member = new Member();
            $member->setIndividual($user);
            $member->setGroupe($invitation->getGroupe());
            $member->setAddOn(new \DateTimeImmutable());
            $member->setStatus(MemberStatusEnum::PENDING);
            $member->setRole(MemberRoleEnum::MEMBER);

            $invitation->setUsed(true);

            $this->em->persist($member);
            dump(gettype($member->getStatus()), get_class($member->getStatus()));
            dump(gettype($member->getRole()), get_class($member->getRole()));

            $this->em->flush();
        }

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
}
