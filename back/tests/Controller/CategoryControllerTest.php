<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use App\Entity\Groupe;
use App\Repository\UserRepository;

class CategoryControllerTest extends WebTestCase
{
    public function testFetchCategoryByGroup(): void
    {
        $client = static::createClient();
        
        $groupId = 11;

        $userRepository = static::getContainer()->get(UserRepository::class);
        $testUser = $userRepository->find(1);
        $client->loginUser($testUser);

        $client->request('GET', "/api/categories/{$groupId}/list");

        $response = $client->getResponse();

        echo $response->getContent();

        $this->assertResponseIsSuccessful();

        $responseData = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('label', $responseData);
        $this->assertArrayHasKey('color', $responseData);
        
        $this->assertIsString($responseData['label']);
        $this->assertIsString($responseData['color']);

        if (isset($responseData['expenses'])) {
            $this->assertIsArray($responseData['expenses']);
            foreach ($responseData['expenses'] as $expenses) {
                $this->assertArrayHasKey('id', $expenses);
                $this->assertArrayHasKey('amount', $expenses);
            }
        }

        if (isset($responseData['groupe'])){
            $this->assertInstanceOf(Groupe::class, $responseData['groupe']);
        }

        if (isset($responseData['budgets'])) {
            $this->assertIsArray($responseData['budgets']);
            foreach ($responseData['budgets'] as $budgets) {
                $this->assertArrayHasKey('id', $budgets);
                $this->assertArrayHasKey('amount', $budgets);
            }
        }
    }
}