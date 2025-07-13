<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ExpenseControllerTest extends WebTestCase
{
    private function getJsonResponse(string $url): array
    {
        $client = static::createClient();
        $client->request('GET', $url);

        $this->assertResponseIsSuccessful();

        $content = $client->getResponse()->getContent();
        $this->assertJson($content);

        return json_decode($content, true);
    }

    /**
     * -----------------------------
     * Tests : GET /api/expenses/{id}
     * -----------------------------
     */
    public function testFetchExpenseById(): void
    {
        $expenseId = 1;
        $data = $this->getJsonResponse("/api/expenses/{$expenseId}");

        $this->assertEquals($expenseId, $data['id']);
        $this->assertIsNumeric($data['amount']);
        $this->assertIsString($data['title']);
        $this->assertLessThanOrEqual(255, strlen($data['title']));
        $this->assertIsString($data['createdAt']);
        $this->assertIsString($data['groupe']);
        $this->assertTrue(is_null($data['category']) || is_string($data['category']));
        $this->assertIsString($data['creator']);
        $this->assertIsString($data['spentAt']);

        if (isset($data['recurringExpense'])) {
            $this->assertIsArray($data['recurringExpense']);
        }

        if (isset($data['participants'])) {
            $this->assertIsArray($data['participants']);
            foreach ($data['participants'] as $participant) {
                $this->assertArrayHasKey('id', $participant);
                $this->assertArrayHasKey('name', $participant);
            }
        }
    }

    /**
     * ----------------------------------------------
     * Tests : GET /api/expenses/groupe/{group}/list
     * ----------------------------------------------
     */
    public function testFetchAllExpenseByGroupSuccess(): void
    {
        $groupId = 1;
        $data = $this->getJsonResponse("/api/expenses/groupe/$groupId/list");
        $this->assertIsArray($data);
    }

    // public function testFetchAllExpenseByGroupNotFound(): void
    // {
    //     $client = static::createClient();
    //     $client->request('GET', '/api/expenses/groupe/99999/list');
    //     $this->assertResponseStatusCodeSame(404);
    // }

    /**
     * -------------------------------------------------------------
     * Tests : GET /api/expenses/groupe/{group}/{month}/list
     * -------------------------------------------------------------
     */
    public function testFetchAllExpenseByGroupAndMonthSuccess(): void
    {
        $groupId = 1;
        $month = urlencode("2025-06-01");
        $data = $this->getJsonResponse("/api/expenses/groupe/$groupId/$month/list");
        $this->assertIsArray($data);
    }

    public function testFetchAllExpenseByGroupAndMonthInvalidDate(): void
    {
        $client = static::createClient();
        $client->request('GET', "/api/expenses/groupe/1/invalid-date/list");
        $this->assertResponseStatusCodeSame(404);
    }

    // public function testFetchAllExpenseByGroupAndMonthGroupNotFound(): void
    // {
    //     $client = static::createClient();
    //     $client->request('GET', "/api/expenses/groupe/99999/2025-06-01/list");
    //     $this->assertResponseStatusCodeSame(404);
    // }

    /**
     * --------------------------------------------------
     * Tests : GET /api/expenses/category/{category}/list
     * --------------------------------------------------
     */
    public function testFetchAllExpenseByCategorySuccess(): void
    {
        $categoryId = 1;
        $data = $this->getJsonResponse("/api/expenses/category/$categoryId/list");
        $this->assertIsArray($data);
    }

    // public function testFetchAllExpenseByCategoryNotFound(): void
    // {
    //     $client = static::createClient();
    //     $client->request('GET', "/api/expenses/category/99999/list");
    //     $this->assertResponseStatusCodeSame(404);
    // }

    /**
     * --------------------------------------------------------------
     * Tests : GET /api/expenses/category/{category}/{month}/list
     * --------------------------------------------------------------
     */
    public function testFetchAllExpenseByCategoryAndMonthSuccess(): void
    {
        $categoryId = 1;
        $month = urlencode("2025-06-01");
        $data = $this->getJsonResponse("/api/expenses/category/$categoryId/$month/list");
        $this->assertIsArray($data);
    }

    public function testFetchAllExpenseByCategoryAndMonthInvalidDate(): void
    {
        $client = static::createClient();
        $client->request('GET', "/api/expenses/category/1/invalid-date/list");
        $this->assertResponseStatusCodeSame(404);
    }

    // public function testFetchAllExpenseByCategoryAndMonthCategoryNotFound(): void
    // {
    //     $client = static::createClient();
    //     $client->request('GET', "/api/expenses/category/99999/2025-06-01/list");
    //     $this->assertResponseStatusCodeSame(404);
    // }
}
