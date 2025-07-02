<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

use App\Repository\MemberRepository;

final class MemberController extends AbstractController
{
    public function __construct(private MemberRepository $memberRepository)
    {
    }

    public function addMember(string $userId, string $memberId, int $groupeId): Response
    {
        
    }
}
