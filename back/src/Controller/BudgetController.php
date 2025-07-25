<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use App\DTO\BudgetDTO;
use App\DTO\BudgetInputDTO;
use App\Entity\Budget;
use App\Entity\Groupe;
use App\Entity\Category;
use App\Repository\BudgetRepository;
use App\Repository\GroupeRepository;
use App\Repository\CategoryRepository;
use App\Repository\ExpenseRepository;
use App\Voter\GroupVoter;
use DateTimeImmutable;

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

    private function computeTotalBudgetForGroup(Groupe $groupe, \DateTimeImmutable $monthStart): float
    {
        $categories = $this->categoryRepository->findBy(['groupe' => $groupe]);
        /** @var float $total */
        $total = 0.0;
        foreach ($categories as $category) {
            /** @var Budget|null $budgetCategory */
            $budgetCategory = $this->budgetRepository->findBudgetByCategoryAndDate($category->getId(), $monthStart);
            if ($budgetCategory) {
                $total += $budgetCategory->getAmount();
            }
        }

        return $total;
    }

    public function getBudget(int $groupeId, DateTimeImmutable $monthStart): JsonResponse
    {
        /** @var Groupe|null $group */
        $group = $this->groupeRepository->find($groupeId);
        if (!$group) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }
        $this->denyAccessUnlessGranted(GroupVoter::VIEW, $group);

        $date = ($monthStart)->modify('first day of this month')->setTime(0, 0);
        $amount = $this->computeTotalBudgetForGroup($group, $date);

        return $this->json([
            'amount' => $amount
        ]);
    }

    public function getRemainingBudget(int $groupeId, DateTimeImmutable $monthStart): JsonResponse
    {
        /** @var Groupe|null $group */
        $group = $this->groupeRepository->find($groupeId);
        if (!$group) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }
        $this->denyAccessUnlessGranted(GroupVoter::VIEW, $group);

        $date = ($monthStart)->modify('first day of this month')->setTime(0, 0);
        $budgetAmount = $this->computeTotalBudgetForGroup($group, $date);

        $start = (clone $date)->modify('first day of this month')->setTime(0, 0, 0);
        $end = (clone $date)->modify('last day of this month')->setTime(23, 59, 59);

        $expenses = $this->expenseRepository->findExpensesByGroupeBetweenDates($groupeId, $start, $end);
        $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));

        $amount = $budgetAmount - $totalExpenses;

        return $this->json([
            'amount' => $amount
        ]);
    }

    public function getBudgetByGroupe(int $groupeId, DateTimeImmutable $monthStart): JsonResponse
    {
        /** @var Groupe|null $group */
        $group = $this->groupeRepository->find($groupeId);
        if (!$group) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }
        $this->denyAccessUnlessGranted(GroupVoter::VIEW, $group);

        $categories = $this->categoryRepository->findBy(['groupe' => $group]);

        $date = ($monthStart)->modify('first day of this month')->setTime(0, 0);

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

    public function getRemainingBudgetList(int $groupeId, DateTimeImmutable $monthStart): JsonResponse
    {
        /** @var Groupe|null $group */
        $group = $this->groupeRepository->find($groupeId);
        if (!$group) {
            return new JsonResponse(['error' => 'Groupe non trouvé.'], Response::HTTP_NOT_FOUND);
        }
        $this->denyAccessUnlessGranted(GroupVoter::VIEW, $group);

        /** @var Category[] $categories */
        $categories = $this->categoryRepository->findBy(['groupe' => $group]);

        $date = ($monthStart)->modify('first day of this month')->setTime(0, 0);

        $budgets = [];
        $defaultCategory = $group->getDefaultCategory();
        if (!$defaultCategory) {
            return new JsonResponse(['error' => 'Catégorie par défaut non définie.'], Response::HTTP_BAD_REQUEST);
        };
        $categories[] = $defaultCategory;

        $uniqueCategories = [];
        foreach ($categories as $cat) {
            $uniqueCategories[$cat->getId()] = $cat;
        }

        foreach ($uniqueCategories as $category) {
            $categoryId = $category->getId();

            /** @var Budget|null $budgetCategory */
            $budgetCategory = $this->budgetRepository->findBudgetByCategoryAndDate($categoryId, $date);

            if (!$budgetCategory) {
                $budgetCategory = new Budget();
                $budgetCategory->setAmount(0);
                $budgetCategory->setMonthStart($date);
                $budgetCategory->setCategory($category);
                $this->em->persist($budgetCategory);
                $newBudgets[] = $budgetCategory;
            }
        }
        $this->em->flush();

        foreach ($uniqueCategories as $category) {
            $categoryId = $category->getId();
            $budgetCategory = $this->budgetRepository->findBudgetByCategoryAndDate($categoryId, $date);
            if (!$budgetCategory) {
                return $this->json(['error' => 'Budget introuvable'], Response::HTTP_NOT_FOUND);
            }

            $expenses = $this->expenseRepository->findExpensesByCategoryAndDate($categoryId, $date);
            $totalExpenses = array_sum(array_map(fn($e) => $e->getAmount(), $expenses));
            $remaining = $budgetCategory->getAmount() - $totalExpenses;

            $budgets[] = new BudgetDTO($budgetCategory, $remaining);
        }

        $json = $this->serializer->serialize($budgets, 'json', ['groups' => ['budget:read']]);

        return new JsonResponse($json, 200, [], true);
    }

    public function getRemainingBudgetByGroupAndYear(int $groupeId, DateTimeImmutable $year): JsonResponse
    {
        $budgetsData = $this->budgetRepository->findBudgetByGroupAndYear($groupeId, $year);
        $expensesData = $this->expenseRepository->findExpensesByGroupAndYear($groupeId, $year);

        $months = [];
        $expensesByMonth = [];
        $expensesByMonthCategory = [];
        $categoryMeta = [];

        foreach ($expensesData as $expense) {
            $month = $expense->getSpentAt()->format('Y-m');
            $categoryId = $expense->getCategory()->getId();
            $amount = $expense->getAmount();

            $months[$month] = true;

            $expensesByMonth[$month] = ($expensesByMonth[$month] ?? 0) + $amount;

            $expensesByMonthCategory[$month][$categoryId] = ($expensesByMonthCategory[$month][$categoryId] ?? 0) + $amount;

            $categoryMeta[$categoryId] = [
                'label' => $expense->getCategory()->getLabel(),
                'color' => $expense->getCategory()->getColor(),
            ];
        }

        $budgetsByMonthCategory = [];
        $budgetsByMonth = [];

        foreach ($budgetsData as $budget) {
            $month = $budget->getMonthStart()->format('Y-m');
            $categoryId = $budget->getCategory()->getId();
            $amount = $budget->getAmount();

            $months[$month] = true;

            $budgetsByMonth[$month] = ($budgetsByMonth[$month] ?? 0) + $amount;

            $budgetsByMonthCategory[$month][$categoryId] = $amount;
        }
        if (empty($months)) {
            for ($m = 1; $m <= 12; $m++) {
                $monthKey = sprintf('%04d-%02d', $year->format("Y"), $m);
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
    public function getRemainingBudgetByGroupAndMonth(int $groupeId, DateTimeImmutable $month): JsonResponse
    {
        $budgetsData = $this->budgetRepository->findBudgetByGroupAndMonth($groupeId, $month);
        $expensesData = $this->expenseRepository->findExpensesByGroupAndMonth($groupeId, $month);

        $days = [];
        $expensesByDay = [];
        $expensesByDayCategory = [];
        $categoryMeta = [];
        foreach ($expensesData as $expense) {
            $day = $expense->getSpentAt()->format('Y-m');
            $categoryId = $expense->getCategory()->getId();
            $amount = $expense->getAmount();

            $days[$day] = true;

            $expensesByDay[$day] = ($expensesByDay[$day] ?? 0) + $amount;
            $expensesByDayCategory[$day][$categoryId] = ($expensesByDayCategory[$day][$categoryId] ?? 0) + $amount;

            $categoryMeta[$categoryId] = [
                'label' => $expense->getCategory()->getLabel(),
                'color' => $expense->getCategory()->getColor(),
            ];
        }

        $budgetsByDay = [];
        $budgetsByDayCategory = [];
        foreach ($budgetsData as $budget) {
            $day = $budget->getMonthStart()->format('Y-m');
            $categoryId = $budget->getCategory()->getId();
            $amount = $budget->getAmount();

            $days[$day] = true;

            $budgetsByDay[$day] = ($budgetsByDay[$day] ?? 0) + $amount;
        }
        if (empty($days)) {
            $start = $month;
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
                    /** @var array<string, array<int, float>> $budgetsByDayCategory */
                    $categoryBudget = isset($budgetsByDayCategory[$day][$categoryId])
                        ? $budgetsByDayCategory[$day][$categoryId]
                        : 0;

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

    public function getBudgetByCategory(int $categoryId): JsonResponse
    {
        $budgetsData = $this->budgetRepository->findBudgetByCategory($categoryId);

        $budgets = array_map(fn($budget) => new BudgetDTO($budget), $budgetsData);

        $json = $this->serializer->serialize($budgets, 'json', ['groups' => ['budget:read']]);

        return new JsonResponse($json, 200, [], true);
    }

    public function getBudgetByCategoryAndMonth(int $categoryId, string $monthStart): JsonResponse
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

    public function getRemainingBudgetByCategoryAndMonth(int $categoryId, string $monthStart): JsonResponse
    {
        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);
        /** @var Category|null $category */
        $category = $this->categoryRepository->find($categoryId);
        if (!$category) {
            return new JsonResponse(['error' => 'Catégorie non trouvée.'], Response::HTTP_BAD_REQUEST);
        }
        /** @var Budget|null $budget */
        $budget = $this->budgetRepository->findOneBy(['category' => $category, 'monthStart' => $date]);

        if (!$budget) {
            $budget = new Budget();
            $budget->setMonthStart($date);
            $budget->setCategory($category);
            $budget->setAmount(0.0);
        }
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
        /** @var BudgetInputDTO $data */
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

        return new JsonResponse(['message' => 'success'], Response::HTTP_OK);
    }
}
