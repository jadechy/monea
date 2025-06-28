<?php

namespace App\Controller;

use App\DTO\UserRegisterDTO;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsController]
class UserController extends AbstractController
{
    public function __construct(
        private UserRepository $userRepository,
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
}
