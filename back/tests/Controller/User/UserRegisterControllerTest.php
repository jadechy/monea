<?php

namespace App\Tests\Controller\User;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class UserRegisterControllerTest extends WebTestCase
{
    public function testRegisterSuccess(): void
    {
        $client = static::createClient();

        // Préparer les données valides du DTO UserRegisterDTO
        $payload = [
            "email" => "testuser@example.com",
            "username" => "testuser",
            "name" => "Test",
            "lastname" => "User",
            "password" => "password123",
            "confirmPassword" => "password123"
        ];
        $client->request(
            'POST',
            "/api/register",
            [],
            [],
            ['CONTENT_TYPE' => 'application/ld+json'],
            json_encode($payload)
        );


        $response = $client->getResponse();

        // Vérifier le statut HTTP 201 Created
        $this->assertEquals(201, $response->getStatusCode());

        // Vérifier la structure JSON de la réponse
        $data = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('message', $data);
        $this->assertEquals('Utilisateur créé avec succès', $data['message']);
    }

    public function testRegisterPasswordMismatch(): void
    {
        $client = static::createClient();

        $payload = [
            "email" => "testuser2@example.com",
            "username" => "testuser2",
            "name" => "Test2",
            "lastname" => "User2",
            "password" => "password123",
            "confirmPassword" => "wrongpassword"
        ];

        $client->request(
            'POST',
            '/register',
            [],
            [],
            ['CONTENT_TYPE' => 'application/ld+json'],
            json_encode($payload)
        );

        $response = $client->getResponse();

        // Vérifier le code 400 Bad Request
        $this->assertEquals(400, $response->getStatusCode());

        $data = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('errors', $data);
        $this->assertEquals('Les mots de passe ne correspondent pas', $data['errors']);
    }
}
