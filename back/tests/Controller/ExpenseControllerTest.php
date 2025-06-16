<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ExpenseControllerTest extends WebTestCase
{
    public function testFetchExpenseById(): void
    {
        $client = static::createClient();

        $expenseId = 1; // ou un ID existant dans ta BDD de test

        $client->request('GET', "/api/expenses/{$expenseId}");

        $response = $client->getResponse();

        // Vérifie que la requête est OK (status 200)
        $this->assertResponseIsSuccessful();

        // Récupère le contenu JSON
        $content = $response->getContent();
        $this->assertJson($content);

        $data = json_decode($content, true);

        // Vérifie la présence et le type des champs
        $this->assertArrayHasKey('id', $data);
        $this->assertIsInt($data['id']);
        $this->assertEquals($expenseId, $data['id']);

        $this->assertArrayHasKey('amount', $data);
        $this->assertIsNumeric($data['amount']);

        $this->assertArrayHasKey('title', $data);
        $this->assertIsString($data['title']);
        $this->assertLessThanOrEqual(255, strlen($data['title']));

        $this->assertArrayHasKey('createdAt', $data);
        $this->assertIsString($data['createdAt']);

        $this->assertArrayHasKey('groupe', $data);
        $this->assertIsString($data['groupe']);

        $this->assertArrayHasKey('category', $data);
        $this->assertTrue(is_null($data['category']) || is_string($data['category']));

        $this->assertArrayHasKey('creator', $data);
        $this->assertIsString($data['creator']);

        // recurringExpense est optionnel, si présent, vérifier que c'est un tableau (objet JSON)
        if (isset($data['recurringExpense'])) {
            $this->assertIsArray($data['recurringExpense']);
        }

        $this->assertArrayHasKey('spentAt', $data);
        $this->assertIsString($data['spentAt']);

        // participants est optionnel, si présent, vérifier que c'est un tableau
        if (isset($data['participants'])) {
            $this->assertIsArray($data['participants']);

            // Optionnel : vérifier quelques propriétés des participants
            foreach ($data['participants'] as $participant) {
                $this->assertArrayHasKey('id', $participant);
                $this->assertArrayHasKey('name', $participant);
                // etc. selon UserSchema
            }
        }
    }
}
