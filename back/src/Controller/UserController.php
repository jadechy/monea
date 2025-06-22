<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

use App\DTO\ExpenseDTO;
use App\Repository\GroupeRepository;
use App\Repository\ExpenseRepository;
use App\Repository\CategoryRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class UserController extends AbstractController
{
    public function __construct(private UserRepository $userRepository, private SerializerInterface $serializer) {}
}
