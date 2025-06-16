<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class GroupControllerTest extends WebTestCase
{
    public function testFetchGroupsByUser(): void
    {
        $client = static::createClient();
        $userId = 1;

        $client->request('GET', "api/groupes/{$userId}/list");

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
}
