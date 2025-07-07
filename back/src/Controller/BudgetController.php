<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

use App\DTO\BudgetDTO;
use App\DTO\BudgetInputDTO;
use App\Entity\Budget;
use App\Entity\Groupe;
use App\Repository\BudgetRepository;
use App\Repository\GroupeRepository;
use App\Repository\CategoryRepository;
use App\Repository\ExpenseRepository;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

#[AsController]
class BudgetController extends AbstractController
{

    public function __construct(
        private BudgetRepository $budgetRepository,
        private GroupeRepository $groupeRepository,
        private ExpenseRepository $expenseRepository,
        private CategoryRepository $categoryRepository,
        private SerializerInterface $serializer,
        private EntityManagerInterface $em,
    ) {}

    private function computeTotalBudgetForGroup(Groupe $groupe, \DateTimeInterface $monthStart): float
    {
        $categories = $this->categoryRepository->findBy(['groupe' => $groupe]);

        $total = 0;
        foreach ($categories as $category) {
            $budgetCategory = $this->budgetRepository->findBudgetByCategoryAndDate($category->getId(), $monthStart);
            if ($budgetCategory) {
                $total += $budgetCategory->getAmount();
            }
        }

        return $total;
    }

    public function getBudget(string $groupeId, $monthStart)
    {
        $groupe = $this->groupeRepository->find($groupeId);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);
        $amount = $this->computeTotalBudgetForGroup($groupe, $date);

        return $this->json([
            'amount' => $amount
        ]);
    }

    public function getRemainingBudget(string $groupeId, $monthStart)
    {
        $groupe = $this->groupeRepository->find($groupeId);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);
        $budgetAmount = $this->computeTotalBudgetForGroup($groupe, $date);

        $start = (clone $date)->modify('first day of this month')->setTime(0, 0, 0);
        $end = (clone $date)->modify('last day of this month')->setTime(23, 59, 59);

        $expenses = $this->expenseRepository->findExpensesByGroupeBetweenDates($groupeId, $start, $end);
        $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

        $amount = $budgetAmount - $totalExpenses;

        return $this->json([
            'amount' => $amount
        ]);
    }

    public function getBudgetByGroupe(string $groupeId, string $monthStart)
    {
        /** @var Groupe|null $groupe */
        $groupe = $this->groupeRepository->find($groupeId);
        if (!$groupe) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }
        $categories = $this->categoryRepository->findBy(['groupe' => $groupe]);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $budgets = [];
        foreach ($categories as $category) {
            $budgetCategory = $this->budgetRepository->findBudgetByCategoryAndDate($category->getId(), $date);
            if ($budgetCategory) {
                $budgets[] = new BudgetDTO($budgetCategory);
            }
        }

        $json = $this->serializer->serialize($budgets, 'json', ['groups' => ['budget:read']]);

        return new JsonResponse($json, 200, [], true);
    }

    public function getRemainingBudgetList(string $groupeId, string $monthStart)
    {
        /** @var Groupe|null $groupe */
        $groupe = $this->groupeRepository->find($groupeId);
        if (!$groupe) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }
        $categories = $this->categoryRepository->findBy(['groupe' => $groupe]);

        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $budgets = [];
        foreach ($categories as $category) {
            $defaultCategory = $groupe->getDefaultCategory();
            if (!$defaultCategory) {
                return new JsonResponse(['error' => 'Catégorie par défaut non définie.'], Response::HTTP_BAD_REQUEST);
            };
            /** @var Budget|null $budgetCategoryDefault */
            $budgetCategoryDefault = $this->budgetRepository->findBudgetByCategory($defaultCategory->getId(), $date);
            if (!$budgetCategoryDefault) {
                $budgetCategoryDefault = new Budget();
                $budgetCategoryDefault->setAmount(0);
                $budgetCategoryDefault->setMonthStart($date);
                $budgetCategoryDefault->setCategory($groupe->getDefaultCategory());
                $this->em->persist($budgetCategoryDefault);
                $this->em->flush();
            }
            $budgetCategory = $this->budgetRepository->findBudgetByCategoryAndDate($category->getId(), $date);

            $categoryId = $category->getId();
            $expenses = $this->expenseRepository->findExpensesByCategoryAndDate($categoryId, $date);
            $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

            if ($budgetCategory) {
                $amount = $budgetCategory->getAmount() - $totalExpenses;

                $budgets[] = new BudgetDTO($budgetCategory, $amount);
            }
        }



        $json = $this->serializer->serialize($budgets, 'json', ['groups' => ['budget:read']]);

        return new JsonResponse($json, 200, [], true);
    }

    public function getRemainingBudgetByGroupAndYear(string $groupeId, int $year)
    {
        $budgetsData = $this->budgetRepository->findBudgetByGroupAndYear($groupeId, $year);
        $expensesData = $this->expenseRepository->findExpensesByGroupAndYear($groupeId, $year);

        $months = [];
        $expensesByMonth = [];
        $expensesByMonthCategory = [];
        $categoryMeta = [];

        foreach ($expensesData as $expense) {
            $month = $expense['month'];
            $categoryId = $expense['categoryId'];
            $amount = $expense['totalAmount'];

            $months[$month] = true;

            $expensesByMonth[$month] = ($expensesByMonth[$month] ?? 0) + $amount;

            $expensesByMonthCategory[$month][$categoryId] = ($expensesByMonthCategory[$month][$categoryId] ?? 0) + $amount;

            $categoryMeta[$categoryId] = [
                'label' => $expense['categoryLabel'],
                'color' => $expense['categoryColor'],
            ];
        }

        $budgetsByMonthCategory = [];
        $budgetsByMonth = [];

        foreach ($budgetsData as $budget) {
            $month = $budget['month'];
            $categoryId = $budget['categoryId'] ?? null;
            $amount = $budget['totalAmount'];

            $months[$month] = true;

            $budgetsByMonth[$month] = ($budgetsByMonth[$month] ?? 0) + $amount;

            if ($categoryId !== null) {
                $budgetsByMonthCategory[$month][$categoryId] = $amount;
            }
        }
        if (empty($months)) {
            for ($m = 1; $m <= 12; $m++) {
                $monthKey = sprintf('%04d-%02d', $year, $m);
                $months[$monthKey] = true;
            }
        }
        $result = [];
        foreach (array_keys($months) as $month) {
            $budgetAmount = $budgetsByMonth[$month] ?? 0;
            $expenseAmount = $expensesByMonth[$month] ?? 0;
            $remaining = round($budgetAmount - $expenseAmount, 2);

            $categories = [];

            if (!empty($expensesByMonthCategory[$month])) {
                foreach ($expensesByMonthCategory[$month] as $categoryId => $totalSpent) {
                    $categoryBudget = $budgetsByMonthCategory[$month][$categoryId] ?? 0;
                    $remainingByCategory = round($categoryBudget - $totalSpent, 2);

                    $categories[] = [
                        'id' => $categoryId,
                        'label' => $categoryMeta[$categoryId]['label'],
                        'color' => $categoryMeta[$categoryId]['color'],
                        'remaining' => $remainingByCategory,
                    ];
                }
            }

            $result[$month] = [
                'remaining' => $remaining,
                'categories' => $categories,
            ];
        }

        return $this->json($result, 200, [], ['json_encode_options' => JSON_PRETTY_PRINT]);
    }
    public function getRemainingBudgetByGroupAndMonth(string $groupeId, string $month)
    {
        $budgetsData = $this->budgetRepository->findBudgetByGroupAndMonth($groupeId, $month);
        $expensesData = $this->expenseRepository->findExpensesByGroupAndMonth($groupeId, $month);

        foreach ($expensesData as &$row) {
            $date = $row['spendAt'];
            if ($date instanceof \DateTimeInterface) {
                $row['spendAt'] = $date->format('Y-m-d');
            } else {
                $row['spendAt'] = (new \DateTimeImmutable($date))->format('Y-m-d');
            }
        }
        unset($row);

        $days = [];
        $expensesByDay = [];
        $expensesByDayCategory = [];
        $categoryMeta = [];
        foreach ($expensesData as $expense) {
            $day = $expense['spendAt'];
            $categoryId = $expense['categoryId'];
            $amount = $expense['totalAmount'];

            $days[$day] = true;

            $expensesByDay[$day] = ($expensesByDay[$day] ?? 0) + $amount;
            $expensesByDayCategory[$day][$categoryId] = ($expensesByDayCategory[$day][$categoryId] ?? 0) + $amount;

            $categoryMeta[$categoryId] = [
                'label' => $expense['categoryLabel'],
                'color' => $expense['categoryColor'],
            ];
        }

        $budgetsByDay = [];
        $budgetsByDayCategory = [];
        foreach ($budgetsData as $budget) {
            $day = $budget['spendAt'];
            $categoryId = $budget['categoryId'] ?? null;
            $amount = $budget['totalAmount'];

            $days[$day] = true;

            $budgetsByDay[$day] = ($budgetsByDay[$day] ?? 0) + $amount;

            if ($categoryId !== null) {
                $budgetsByDayCategory[$day][$categoryId] = $amount;
            }
        }
        if (empty($days)) {
            $start = new \DateTimeImmutable($month);
            $daysInMonth = (int) $start->format('t');
            for ($d = 1; $d <= $daysInMonth; $d++) {
                $dayDate = $start->modify('+' . ($d - 1) . ' days');
                $days[$dayDate->format('Y-m-d')] = true;
            }
        }

        $result = [];
        foreach (array_keys($days) as $day) {
            $budgetAmount = $budgetsByDay[$day] ?? 0;
            $expenseAmount = $expensesByDay[$day] ?? 0;
            $remaining = round($budgetAmount - $expenseAmount, 2);

            $categories = [];

            if (!empty($expensesByDayCategory[$day])) {
                foreach ($expensesByDayCategory[$day] as $categoryId => $totalSpent) {
                    $categoryBudget = $budgetsByDayCategory[$day][$categoryId] ?? 0;
                    $remainingByCategory = round($categoryBudget - $totalSpent, 2);

                    $categories[] = [
                        'id' => $categoryId,
                        'label' => $categoryMeta[$categoryId]['label'],
                        'color' => $categoryMeta[$categoryId]['color'],
                        'remaining' => $remainingByCategory,
                    ];
                }
            }

            $result[$day] = [
                'remaining' => $remaining,
                'categories' => $categories,
            ];
        }

        return $this->json($result, 200, [], ['json_encode_options' => JSON_PRETTY_PRINT]);
    }



    public function getBudgetByCategory(string $categoryId)
    {
        $budgetsData = $this->budgetRepository->findBudgetByCategory($categoryId);

        $budgets = array_map(fn($budget) => new BudgetDTO($budget), $budgetsData);

        $json = $this->serializer->serialize($budgets, 'json', ['groups' => ['budget:read']]);

        return new JsonResponse($json, 200, [], true);
    }

    public function getBudgetByCategoryAndMonth(string $categoryId, string $monthStart): JsonResponse
    {
        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $budgetData = $this->budgetRepository->findBudgetByCategoryAndDate($categoryId, $date);

        if ($budgetData) {
            $budgetDTO = new BudgetDTO($budgetData);

            $json = $this->serializer->serialize($budgetDTO, 'json', ['groups' => ['budget:read']]);

            return new JsonResponse($json, 200, [], true);
        }

        return new JsonResponse(null, 200);
    }

    public function getRemainingBudgetByCategoryAndMonth(string $categoryId, string $monthStart): JsonResponse
    {
        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $category = $this->categoryRepository->find($categoryId);
        $budget = $this->budgetRepository->findOneBy(['category' => $category, 'monthStart' => $date]);

        $totalBudget = $budget->getAmount();

        $expenses = $this->expenseRepository->findExpensesByCategoryAndDate($categoryId, $date);
        $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

        $amount = $totalBudget - $totalExpenses;

        return $this->json([
            'amount' => $amount
        ]);
    }

    public function postBudgets(Request $request, SerializerInterface $serializer): JsonResponse
    {
        /** @var BudgetInputDTO $budgetsData */
        $data = $serializer->deserialize(
            $request->getContent(),
            BudgetInputDTO::class,
            'json'
        );
        $groupId = $data->groupId;

        foreach ($data->budgets as $budgetData) {
            $category = $this->categoryRepository->find($budgetData->categoryId);
            if (!$category) {
                return new JsonResponse(['error' => 'Catégorie non trouvée.'], Response::HTTP_BAD_REQUEST);
            }
            $monthStart = new DateTimeImmutable($budgetData->monthStart);
            /** @var Budget|null $budget */
            $budget = $this->budgetRepository->findOneBy(["category" => $category, "monthStart" => $monthStart]);

            if (!$budget) {
                $budget = new Budget();
                $budget->setMonthStart($monthStart);
                $budget->setCategory($category);
            } else if ($budget->getCategory()->getGroupe()->getId() !== $groupId) {
                return new JsonResponse(['error' => 'Le budget existant n’appartient pas au groupe.'], Response::HTTP_BAD_REQUEST);
            };

            /** @var Budget $budget */
            $budget->setAmount($budgetData->amount);
            $this->em->persist($budget);
        };
        $this->em->flush();

        return new JsonResponse(['status' => 'success'], Response::HTTP_OK);
    }
}
