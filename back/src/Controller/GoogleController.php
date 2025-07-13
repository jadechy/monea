<?php

namespace App\Controller;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class GoogleController extends AbstractController
{
    /**
     * Démarre le processus d'authentification Google
     * Redirige l'utilisateur vers Google pour l'autorisation
     */
    #[Route('/connect/google', name: 'connect_google_start')]
    public function connectAction(ClientRegistry $clientRegistry): RedirectResponse
    {
        return $clientRegistry
            ->getClient('google')
            ->redirect([
                'openid',
                'email',
                'profile'
            ], []);
    }

    /**
     * Route de callback après autorisation Google
     * Cette méthode sera interceptée par GoogleAuthenticator
     */
    #[Route('/connect/google/check', name: 'connect_google_check')]
    public function connectCheckAction(Request $request, ClientRegistry $clientRegistry)
    {
        // Cette méthode peut être vide car elle sera interceptée par l'authenticateur
        // Le GoogleAuthenticator va gérer l'authentification automatiquement

        // En cas de problème avec l'authenticateur, on peut ajouter une logique de fallback ici
        throw new \Exception('Cette route devrait être interceptée par GoogleAuthenticator');
    }
}
