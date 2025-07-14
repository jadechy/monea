<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use App\Repository\UserRepository;
use App\Repository\GroupeRepository;

class GroupControllerTest extends WebTestCase
{

    public function testFetchGroupsByUser(): void
    {
        $client = static::createClient();

        $userId = 1;
        $user = static::getContainer()->get(UserRepository::class)->find($userId);
        $client->loginUser($user);

        $client->request('GET', "api/groupes/list");

        $this->assertResponseIsSuccessful();
        $this->assertResponseFormatSame('json');

        $responseData = json_decode($client->getResponse()->getContent(), true);

        $this->assertIsArray($responseData);

        foreach ($responseData as $group) {
            $this->assertArrayHasKey('id', $group);
            $this->assertArrayHasKey('name', $group);
            $this->assertArrayHasKey('createdAt', $group);
            $this->assertArrayHasKey('type', $group);
            $this->assertArrayHasKey('creator', $group);
            $this->assertArrayHasKey('picture', $group);
            $this->assertArrayHasKey('color', $group);

            $this->assertIsInt($group['id']);
            $this->assertIsString($group['name']);
            $this->assertIsString($group['createdAt']);
            $this->assertIsString($group['type']);
            $this->assertIsInt($group['creator']);
            $this->assertTrue(is_string($group['picture']) || is_null($group['picture']));
            $this->assertContains($group['color'], [
                'pink',
                'red',
                'yellow',
                'orange',
                'blue',
                'purple',
                'green',
                'gray'
            ]);
        }
    }

    public function testPostGroup(): void
    {
        $client = static::createClient();

        $userId = 1;
        $user = static::getContainer()->get(UserRepository::class)->find($userId);
        $client->loginUser($user);

        $data = [
            'name' => 'Groupe Test',
            'type' => 'shared',
            'color' => 'blue',
            'categories' => [
                ['label' => 'Catégorie 1', 'color' => 'red'],
                ['label' => 'Catégorie 2', 'color' => 'green'],
            ],
        ];

        $client->request(
            'POST',
            '/api/groupes',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($data)
        );

        $this->assertResponseStatusCodeSame(201); 

        $response = json_decode($client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('message', $response);
        $this->assertEquals('Groupe créé avec succès', $response['message']);
    }

    public function testEditGroup(): void
    {
        $client = static::createClient();
        $container = static::getContainer();

        $userId = 1;
        $user = static::getContainer()->get(UserRepository::class)->find($userId);
        $client->loginUser($user);

        $groupId = 1;
        $groupRepo = $container->get('doctrine')->get(GroupeRepository::class);
        $group = $groupRepo->find($groupId);
        $this->assertNotNull($group);

        // 🧪 Données PATCH
        $payload = [
            'name' => 'Groupe Modifié',
            'type' => 'shared',
            'color' => 'yellow',
            'categories' => [
                [
                    'id' => $group->getCategories()->first()->getId(),
                    'label' => 'Catégorie Modifiée',
                    'color' => 'orange',
                ],
                [
                    'label' => 'Nouvelle Catégorie',
                    'color' => 'green',
                ],
            ],
        ];

        $client->request(
            'PATCH',
            '/api/groupes/' . $group->getId(),
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($payload)
        );

        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(200);

        $response = json_decode($client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('message', $response);
        $this->assertEquals('Groupe modifié avec succès', $response['message']);
    }

    public function testDeleteGroupSuccessfully(): void
    {
        $client = static::createClient();
        $container = static::getContainer();

        $userId = 1;
        $userRepo = $container->get('doctrine')->get(UserRepository::class);
        $user = $userRepo->find($userId);
        $client->loginUser($user);

        $groupId = 1;
        $groupRepo = $container->get('doctrine')->get(GroupeRepository::class);
        $group = $groupRepo->find($groupId);
        $this->assertNotNull($group);

        $client->request('DELETE', '/api/groupes/' . $group->getId());

        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(200);

        $response = json_decode($client->getResponse()->getContent(), true);
        $this->assertEquals('Groupe supprimé avec succès', $response['message']);
    }

    public function testDeleteGroupUnauthorized(): void
    {
        $client = static::createClient();

        $client->request('DELETE', '/api/groupes/1');
        $this->assertResponseStatusCodeSame(401);
    }

    public function testDeleteGroupNotAuthor(): void
    {
        $client = static::createClient();
        $container = static::getContainer();

        $userId = 2;
        $userRepo = $container->get('doctrine')->get(UserRepository::class);
        $user = $userRepo->find($userId);
        $client->loginUser($user);

        $groupId = 1;
        $groupRepo = $container->get('doctrine')->get(GroupeRepository::class);
        $group = $groupRepo->find($groupId);
        $this->assertNotNull($group);

        $client->request('DELETE', '/api/groupes/' . $group->getId());

        $this->assertResponseStatusCodeSame(403);
    }

    public function testDeleteGroupNotFound(): void
    {
        $client = static::createClient();
        $container = static::getContainer();

        $userId = 1;
        $userRepo = $container->get('doctrine')->get(UserRepository::class);
        $user = $userRepo->find($userId);
        $client->loginUser($user);

        $client->request('DELETE', '/api/groupes/999999'); 

        $this->assertResponseStatusCodeSame(404);
    }

    public function testFetchMembersByGroup(): void
    {
        $client = static::createClient();
        
        $groupId = 11;

        $userRepository = static::getContainer()->get(UserRepository::class);
        $testUser = $userRepository->find(1);
        $client->loginUser($testUser);

        $client->request('GET', "/api/groupes/{$groupId}/members");

        $response = $client->getResponse();

        echo $response->getContent();

        $this->assertResponseIsSuccessful();

        $responseData = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('name', $responseData);
        $this->assertArrayHasKey('createdAt', $responseData);
        $this->assertArrayHasKey('type', $responseData);
        $this->assertArrayHasKey('picture', $responseData);
        $this->assertArrayHasKey('color', $responseData);
        
        $this->assertIsString($responseData['name']);
        $this->assertIsString($responseData['createdAt']);
        $this->assertIsString($responseData['type']);
        $this->assertIsString($responseData['picture']);
        $this->assertIsString($responseData['color']);

        if (isset($responseData['expenses'])) {
            $this->assertIsArray($responseData['expenses']);
            foreach ($responseData['expenses'] as $expenses) {
                $this->assertArrayHasKey('id', $expenses);
                $this->assertArrayHasKey('amount', $expenses);
            }
        }

        if (isset($responseData['members'])) {
            $this->assertIsArray($responseData['members']);
            foreach ($responseData['members'] as $members) {
                $this->assertArrayHasKey('groupe', $members);
                $this->assertArrayHasKey('individual', $members);
            }
        }

        if (isset($responseData['categories'])) {
            $this->assertIsArray($responseData['categories']);
            foreach ($responseData['categories'] as $categories) {
                $this->assertArrayHasKey('id', $categories);
                $this->assertArrayHasKey('label', $categories);
            }
        }

        if (isset($responseData['groupInvitations'])) {
            $this->assertIsArray($responseData['groupInvitations']);
            foreach ($responseData['groupInvitations'] as $groupInvitations) {
                $this->assertArrayHasKey('id', $groupInvitations);
                $this->assertArrayHasKey('token', $groupInvitations);
            }
        }
    }

    public function testUploadCoverGroupSuccessfully(): void
    {
        $client = static::createClient();
        $container = static::getContainer();

        $userId = 2;
        $userRepo = $container->get('doctrine')->get(UserRepository::class);
        $user = $userRepo->find($userId);
        $client->loginUser($user);

        $groupId = 1;
        $groupRepo = $container->get('doctrine')->get(GroupeRepository::class);
        $group = $groupRepo->find($groupId);
        $this->assertNotNull($group);

        $testImagePath = __DIR__ . '/../Fixtures/test-image.jpg';
        copy(__DIR__ . '/../Fixtures/source-image.jpg', $testImagePath);

        $uploadedFile = new UploadedFile(
            $testImagePath,
            'test-image.jpg',
            'image/jpeg',
            null,
            true
        );

        $client->request(
            'POST',
            '/api/groupes/' . $group->getId() . '/picture',
            [],
            ['picture' => $uploadedFile]
        );

        $this->assertResponseIsSuccessful();
        $responseData = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('picture', $responseData);
        $this->assertStringContainsString('/uploads/group/', $responseData['picture']);
    }
}
