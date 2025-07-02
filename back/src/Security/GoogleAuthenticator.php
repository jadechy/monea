<?php

namespace App\Security;

use App\Entity\Groupe;
use App\Entity\RefreshToken;
use App\Enum\UserRoleEnum;

use App\Entity\User;
use App\Enum\ColorEnum;
use App\Enum\GroupTypeEnum;
use App\Repository\UserRepository;
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
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class GoogleAuthenticator extends OAuth2Authenticator
{
    private ClientRegistry $clientRegistry;
    private EntityManagerInterface $entityManager;
    private RouterInterface $router;
    private UserRepository $userRepository;
    private JWTTokenManagerInterface $jwtManager;
    private RefreshTokenManagerInterface $refreshTokenManager;


    public function __construct(
        ClientRegistry $clientRegistry,
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        UserRepository $userRepository,
        JWTTokenManagerInterface $jwtManager,
        RefreshTokenManagerInterface $refreshTokenManager,
    ) {
        $this->clientRegistry = $clientRegistry;
        $this->entityManager = $entityManager;
        $this->router = $router;
        $this->userRepository = $userRepository;
        $this->jwtManager = $jwtManager;
        $this->refreshTokenManager = $refreshTokenManager;
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
        $accessToken = $this->fetchAccessToken($client);

        return new SelfValidatingPassport(
            new UserBadge($accessToken->getToken(), function () use ($accessToken, $client) {
                /** @var GoogleUser $googleUser */
                $googleUser = $client->fetchUserFromToken($accessToken);

                $existingUser = $this->userRepository->findOneBy(['googleId' => $googleUser->getId()]);

                if ($existingUser) {
                    return $existingUser;
                }

                $existingUser = $this->userRepository->findOneBy(['email' => $googleUser->getEmail()]);

                if ($existingUser) {
                    $existingUser->setGoogleId($googleUser->getId());
                    $this->entityManager->flush();
                    return $existingUser;
                }

                $user = new User();
                $user->setEmail($googleUser->getEmail());
                $user->setGoogleId($googleUser->getId());

                $user->setName($googleUser->getName());
                $user->setLastName($googleUser->getLastName());
                $user->setUsername($googleUser->getName());
                $user->setRoles([UserRoleEnum::USER]);
                $user->setPlainPassword('password123');
                $user->setPicture($googleUser->getAvatar());
                $user->setCreatedAt(new \DateTimeImmutable());
                $user->setBirthday(new \DateTimeImmutable('2003-09-21'));



                $this->entityManager->persist($user);
                $this->entityManager->flush();
                $this->entityManager->persist($user);

                $group = new Groupe();
                $group->setName("Personnel");
                $group->setType(GroupTypeEnum::PERSONNAL);
                $group->setCreator($user);
                $group->setCreatedAt(new \DateTimeImmutable());
                $group->setColor(ColorEnum::Pink);
                $group->setPicture('');
                $this->entityManager->persist($group);
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


        return new RedirectResponse('http://localhost:5173/oauth/callback?'    . http_build_query([
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
