<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class BudgetControllerTest extends WebTestCase
{
    /**
     * ----------------------------------------------
     * Tests : GET /api/budget/{groupId}/{month}/remaining
     * ----------------------------------------------
     */
    public function testFetchBudgetGroupRemainingSuccess()
    {
        $client = static::createClient();

        $groupId = 1;
        $month = '2025-06-01';

        $client->request('GET', "/api/budget/{$groupId}/{$month}/remaining");

        $this->assertResponseIsSuccessful();

        $responseData = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('amount', $responseData);
        $this->assertIsNumeric($responseData['amount']);
    }

    // public function testFetchBudgetGroupRemainingNotFound()
    // {
    //     $client = static::createClient();

    //     $groupId = 999999; // groupe non existant
    //     $month = '2025-06-01';

    //     $client->request('GET', "/api/budget/{$groupId}/{$month}/remaining");

    //     $this->assertEquals(404, $client->getResponse()->getStatusCode());
    // }


    /**
     * ----------------------------------------------
     * Tests : GET /api/budget/{groupId}/{month}
     * ----------------------------------------------
     */
    public function testFetchBudgetGroupSuccess()
    {
        $client = static::createClient();

        $groupId = 1;
        $month = '2025-06-01';

        $client->request('GET', "/api/budget/{$groupId}/{$month}");

        $this->assertResponseIsSuccessful();

        $responseData = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('amount', $responseData);
        $this->assertIsNumeric($responseData['amount']);
    }

    // public function testFetchBudgetGroupInvalidDate()
    // {
    //     $client = static::createClient();

    //     $groupId = 1;
    //     $month = 'invalid-date-format';

    //     $client->request('GET', "/api/budget/{$groupId}/{$month}");

    //     $this->assertEquals(400, $client->getResponse()->getStatusCode());
    // }

    /**
     * ----------------------------------------------
     * Tests : GET /api/budget/{categoryId}/{month}/remaining/category
     * ----------------------------------------------
     */
    public function testFetchBudgetCategoryRemainingSuccess()
    {
        $client = static::createClient();

        $categoryId = 1;
        $month = '2025-06-01';

        $client->request('GET', "/api/budget/{$categoryId}/{$month}/remaining/category");

        $this->assertResponseIsSuccessful();

        $responseData = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('amount', $responseData);
        $this->assertIsNumeric($responseData['amount']);
    }

    /**
     * ----------------------------------------------
     * Tests : GET /api/budget/{categoryId}/{month}/category
     * ----------------------------------------------
     */
    public function testFetchBudgetCategorySuccess()
    {
        $client = static::createClient();

        $categoryId = 1;
        $month = '2025-06-01';

        $client->request('GET', "/api/budgets/{$categoryId}/{$month}/category");

        $this->assertResponseIsSuccessful();

        $responseData = json_decode($client->getResponse()->getContent(), true);

        $this->assertArrayHasKey('amount', $responseData);
        $this->assertIsNumeric($responseData['amount']);
    }
}
