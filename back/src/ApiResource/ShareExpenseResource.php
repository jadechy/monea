<?php

namespace App\ApiResource;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Link;
use App\Entity\User;
use App\Entity\Expense;
use App\State\ShareExpense\ShareExpenseProvider;
use App\State\ShareExpense\ShareExpensePostProcessor;
use App\State\ShareExpense\ShareExpenseDeleteProcessor;
use App\State\ShareExpense\ShareExpensePatchProcessor;

#[ApiResource(
    operations: [
        new Get(
            uriTemplate: '/share_expenses/user/{userId}/expense/{expenseId}',
            uriVariables: [
                'userId' => new Link(fromClass: User::class, identifiers: ['id']),
                'expenseId' => new Link(fromClass: Expense::class, identifiers: ['id']),
            ],
            provider: ShareExpenseProvider::class
        ),
        new Post(
            uriTemplate: '/share_expenses/user/{userId}/expense/{expenseId}',
            uriVariables: [
                'userId' => new Link(fromClass: User::class, identifiers: ['id']),
                'expenseId' => new Link(fromClass: Expense::class, identifiers: ['id']),
            ],
            processor: ShareExpensePostProcessor::class
        ),
        new Delete(
            uriTemplate: '/share_expenses/user/{userId}/expense/{expenseId}',
            uriVariables: [
                'userId' => new Link(fromClass: User::class, identifiers: ['id']),
                'expenseId' => new Link(fromClass: Expense::class, identifiers: ['id']),
            ],
            processor: ShareExpenseDeleteProcessor::class
        ),
        new Patch(
            uriTemplate: '/share_expenses/user/{userId}/expense/{expenseId}',
            uriVariables: [
                'userId' => new Link(fromClass: User::class, identifiers: ['id']),
                'expenseId' => new Link(fromClass: Expense::class, identifiers: ['id']),
            ],
            processor: ShareExpensePatchProcessor::class
        )
    ]
)]
class ShareExpenseResource
{
    public int $userId;
    public int $expenseId;
    public ?int $percentage = null;
}
