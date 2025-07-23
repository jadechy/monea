<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

use App\DTO\CategoryDTO;
use App\Repository\CategoryRepository;
use App\Repository\GroupeRepository;
use App\Voter\GroupVoter;

#[AsController]
class CategoryController extends AbstractController
{
    public function __construct(
        private GroupeRepository $groupeRepository,
        private CategoryRepository $categoryRepository,
        private SerializerInterface $serializer
    ) {}

    public function getCategoryByGroup(int $groupeId): JsonResponse
    {
        $group = $this->groupeRepository->find($groupeId);
        $this->denyAccessUnlessGranted(GroupVoter::VIEW, $group);

        $categoriesData = $this->categoryRepository->findBy(['groupe' => $group]);

        $categories = array_map(fn($category) => new CategoryDTO($category), $categoriesData);

        $json = $this->serializer->serialize($categories, 'json', ['groups' => ['category:read']]);

        return new JsonResponse($json, 200, [], true);
    }
}
