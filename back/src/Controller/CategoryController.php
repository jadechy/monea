<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

use App\DTO\CategoryDTO;
use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Repository\GroupeRepository;
use Doctrine\ORM\EntityManagerInterface;

#[AsController]
class CategoryController extends AbstractController
{
    public function __construct(
        private GroupeRepository $groupeRepository,
        private CategoryRepository $categoryRepository,
        private SerializerInterface $serializer
    ) {}

    public function getCategoryByGroup($groupeId)
    {
        $groupe = $this->groupeRepository->find($groupeId);
        $categoriesData = $this->categoryRepository->findBy(['groupe' => $groupe]);

        $categories = array_map(fn($category) => new CategoryDTO($category), $categoriesData);

        $json = $this->serializer->serialize($categories, 'json', ['groups' => ['category:read']]);

        return new JsonResponse($json, 200, [], true);
    }
}
