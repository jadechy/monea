<?php

namespace App\Security;

use App\Entity\RefreshToken;
use App\Enum\UserRoleEnum;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\UserSetupService;
use Doctrine\ORM\EntityManagerInterface;
use Gesdinet\JWTRefreshTokenBundle\Model\RefreshTokenManagerInterface;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Security\Authenticator\OAuth2Authenticator;
use League\OAuth2\Client\Provider\GoogleUser;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class GoogleAuthenticator extends OAuth2Authenticator
{
    private ClientRegistry $clientRegistry;
    private EntityManagerInterface $entityManager;
    private UserRepository $userRepository;
    private JWTTokenManagerInterface $jwtManager;
    private RefreshTokenManagerInterface $refreshTokenManager;
    private UserSetupService $userSetupService;
    private ValidatorInterface $validator;
    private string $urlClient;


    public function __construct(
        ClientRegistry $clientRegistry,
        EntityManagerInterface $entityManager,
        UserRepository $userRepository,
        JWTTokenManagerInterface $jwtManager,
        RefreshTokenManagerInterface $refreshTokenManager,
        UserSetupService $userSetupService,
        ValidatorInterface $validator,
        string $urlClient
    ) {
        $this->clientRegistry = $clientRegistry;
        $this->entityManager = $entityManager;
        $this->userRepository = $userRepository;
        $this->jwtManager = $jwtManager;
        $this->refreshTokenManager = $refreshTokenManager;
        $this->userSetupService = $userSetupService;
        $this->validator = $validator;
        $this->urlClient = $urlClient;
    }

    /**
     * Détermine si cet authenticateur doit être utilisé pour cette requête
     */
    public function supports(Request $request): ?bool
    {
        // N'intercepte que la route de callback Google
        return $request->attributes->get('_route') === 'connect_google_check';
    }

    /**
     * Authentifie l'utilisateur avec le token Google
     */
    public function authenticate(Request $request): Passport
    {
        $client = $this->clientRegistry->getClient('google');
        /** @var \League\OAuth2\Client\Token\AccessToken */
        $accessToken = $this->fetchAccessToken($client);

        return new SelfValidatingPassport(
            new UserBadge($accessToken->getToken(), function () use ($accessToken, $client) {
                /** @var GoogleUser $googleUser */
                $googleUser = $client->fetchUserFromToken($accessToken);
                /** @var string $googleId */
                $googleId = $googleUser->getId();

                $existingUser = $this->userRepository->findOneBy(['googleId' => $googleId]);

                if ($existingUser) {
                    return $existingUser;
                }
                $googleEmail = $googleUser->getEmail();
                if (!$googleEmail) {
                    throw new \RuntimeException('Email manquant dans les données Google.');
                }

                $existingUser = $this->userRepository->findOneBy(['email' => $googleEmail]);

                if ($existingUser) {
                    $existingUser->setGoogleId($googleId);
                    $this->entityManager->flush();
                    return $existingUser;
                }

                $user = new User();
                $user->setEmail($googleEmail);
                $user->setGoogleId($googleId);

                $user->setName($googleUser->getName());
                $user->setLastName($googleUser->getLastName() ?? "");
                $user->setUsername($googleUser->getName());
                $user->setRoles([UserRoleEnum::USER]);
                $user->setPlainPassword('password123');
                $user->setPassword('password123');
                $user->setPicture($googleUser->getAvatar());
                $user->setCreatedAt(new \DateTimeImmutable());
                $user->setBirthday(new \DateTimeImmutable('2003-09-21'));
                $errorsUser = $this->validator->validate($user);
                if (count($errorsUser) > 0) {
                    throw new \RuntimeException('Erreur lors de la validation de l’utilisateur : ' . (string) $errorsUser);
                }
                $this->entityManager->persist($user);

                $error = $this->userSetupService->setupUser($user);
                if ($error) {
                    throw new \RuntimeException('Erreur lors de l\'initialisation de l\'utilisateur : ' . json_encode($error));
                }

                $this->entityManager->flush();

                return $user;
            })
        );
    }

    /**
     * Appelé en cas de succès d'authentification
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {

        $user = $token->getUser();

        if (!$user instanceof User) {
            throw new AccessDeniedException('Access denied message');
        }
        $jwtToken = $this->jwtManager->create($user);
        $refreshToken = new RefreshToken();
        $refreshToken->setUsername($user->getUserIdentifier());
        $refreshToken->setRefreshToken(bin2hex(random_bytes(64)));
        $refreshToken->setValid((new \DateTimeImmutable())->modify('+30 days'));

        $this->refreshTokenManager->save($refreshToken);


        return new RedirectResponse("{$this->urlClient}/oauth/callback?"    . http_build_query([
            'token' => $jwtToken,
            'refresh_token' => $refreshToken->getRefreshToken(),
        ]));
    }

    /**
     * Appelé en cas d'échec d'authentification
     */
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): ?Response
    {
        $message = strtr($exception->getMessageKey(), $exception->getMessageData());

        return new JsonResponse([
            'message' => $message,
        ]);
    }
}
