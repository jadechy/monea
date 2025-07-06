<?php

namespace App\Controller;

use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;

use App\DTO\ExpenseDTO;
use App\Entity\Category;
use App\Entity\Expense;
use App\Entity\Groupe;
use App\Entity\RecurringExpense;
use App\Entity\User;
use App\Enum\RecurringFrequencyEnum;
use App\Repository\GroupeRepository;
use App\Repository\ExpenseRepository;
use App\Repository\CategoryRepository;
use App\Service\RecurringExpenseService;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\TextUI\XmlConfiguration\Group;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;

#[AsController]
class ExpenseController extends AbstractController
{
    public function __construct(
        private GroupeRepository $groupeRepository,
        private ExpenseRepository $expenseRepository,
        private CategoryRepository $categoryRepository,
        private SerializerInterface $serializer,
        private ValidatorInterface $validator,
        private EntityManagerInterface $em,

    ) {}

    /**
     * Regroupe les dépenses par date (Y-m-d), trie par date descendante.
     *
     * @param Expense[] $expensesData
     * @return array<string, ExpenseDTO[]>
     */
    private function createExpenseArray(array $expensesData): array
    {
        $expenses = [];

        foreach ($expensesData as $expense) {
            $date = $expense->getSpentAt()->format('Y-m-d');

            if (!isset($expenses[$date])) {
                $expenses[$date] = [];
            }

            $expenses[$date][] = new ExpenseDTO($expense);
        }

        krsort($expenses);

        return $expenses;
    }


    public function getExpenseById($id): JsonResponse
    {
        $expense = $this->expenseRepository->find($id);
        if (!$expense) {
            return new JsonResponse(
                ['message' => 'Dépense non trouvée.'],
                Response::HTTP_NOT_FOUND
            );
        }
        $expenseDTO = new ExpenseDTO($expense);
        $json = $this->serializer->serialize($expenseDTO, 'json', [
            'groups' => ['expense:read'],
        ]);

        return new JsonResponse(
            $json,
            Response::HTTP_OK,
            [],
            true
        );
    }

    public function getAllExpenseByGroup($groupeId): JsonResponse
    {
        if ($groupeId <= 0) {
            return new JsonResponse(['error' => 'ID de groupe invalide'], Response::HTTP_BAD_REQUEST);
        }
        $groupe = $this->groupeRepository->find($groupeId);
        if (!$groupe) {
            return new JsonResponse(['error' => 'Groupe not found'], Response::HTTP_NOT_FOUND);
        }
        $expensesData = $this->expenseRepository->findBy(['groupe' => $groupe]);

        $expenses = $this->createExpenseArray($expensesData);


        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);
        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, Response::HTTP_OK, [], true);
    }

    public function getAllExpenseByGroupAndMonth($groupeId, $monthStart)
    {
        $date = new \DateTimeImmutable($monthStart);
        $start = (clone $date)->modify('first day of this month')->setTime(0, 0, 0);
        $end = (clone $date)->modify('last day of this month')->setTime(23, 59, 59);

        $expensesData = $this->expenseRepository->findExpensesByGroupeBetweenDates($groupeId, $start, $end);
        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);
        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, 200, [], true);
    }

    public function getAllExpenseByGroupAndDay($groupeId, $day)
    {
        $date = (new \DateTimeImmutable($day))->setTime(0, 0);

        $expensesData = $this->expenseRepository->findExpensesByGroupeAndDay($groupeId, $date);

        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);

        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, 200, [], true);
    }

    public function getAllExpenseByGroupAndWeek($groupeId, $day)
    {
        $date = new \DateTimeImmutable($day);

        $monday = $date->modify('monday this week')->setTime(0, 0, 0);
        $sunday = $date->modify('sunday this week')->setTime(23, 59, 59);

        $expensesData = $this->expenseRepository->findExpensesByGroupeBetweenDates($groupeId, $monday, $sunday);

        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);

        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, 200, [], true);
    }

    public function getAllExpensesByCategory($categoryId)
    {
        $category = $this->categoryRepository->find($categoryId);

        $expensesData = $this->expenseRepository->findBy(['category' => $category]);

        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);

        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, 200, [], true);
    }

    public function getAllExpensesByCategoryAndMonth($categoryId, $monthStart)
    {
        $date = (new \DateTimeImmutable($monthStart))->modify('first day of this month')->setTime(0, 0);

        $expensesData = $this->expenseRepository->findExpensesByCategoryAndDate($categoryId, $date);

        $expenses = $this->createExpenseArray($expensesData);

        $json = $this->serializer->serialize($expenses, 'json', [
            'groups' => ['expense:read'],
        ]);

        if ($json === '[]') {
            $json = '{}';
        }
        return new JsonResponse($json, 200, [], true);
    }
    public function postExpense($data): JsonResponse
    {
        $group = $this->em->getRepository(Groupe::class)->find($data->groupId);
        $creator = $this->em->getRepository(User::class)->find($data->authorId);

        if (!$group  || !$creator) {
            return $this->json(['error' => 'Références invalides'], Response::HTTP_NOT_FOUND);
        }
        $category = null;
        if (!empty($data->categoryId)) {
            $category = $this->em->getRepository(Category::class)->find($data->categoryId);
        } elseif ($group !== null) {
            $category = $group->getDefaultCategory();
        }

        if (!$category) {
            return $this->json(['error' => 'Catégorie non trouvée'], Response::HTTP_BAD_REQUEST);
        }


        if ($data->recurringExpense) {
            $expense = new Expense();
            $expense->setTitle($data->title);
            $expense->setGroupe($group);
            $expense->setAmount($data->amount);
            $expense->setCreator($creator);
            $expense->setSpentAt(new \DateTimeImmutable($data->spentAt));
            $expense->setCreatedAt(new \DateTimeImmutable());
            $expense->setCategory($category);

            $errors = $this->validator->validate($expense);
            if (count($errors) > 0) {
                return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
            }

            $result = $this->recurringExpenseByCreateExpense($data, $group, $creator, $category, $expense);
            if ($result instanceof JsonResponse) {
                return $result;
            }
        } else {
            $expense = new Expense();
            $expense->setTitle($data->title);
            $expense->setGroupe($group);
            $expense->setAmount($data->amount);
            $expense->setCreator($creator);
            $expense->setSpentAt($data->spentAt);
            $expense->setCreatedAt(new \DateTimeImmutable());
            $expense->setCategory($category);

            $errors = $this->validator->validate($expense);
            if (count($errors) > 0) {
                return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
            }

            $this->em->persist($expense);
        }
        $this->em->flush();

        return $this->json(['message' => 'Dépense créé avec succès'], Response::HTTP_CREATED);
    }

    public function updateExpense(int $id, Request $request): JsonResponse
    {
        $expense = $this->em->getRepository(Expense::class)->find($id);

        if (!$expense) {
            return $this->json(['error' => 'Dépense introuvable'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent());

        $group = $this->em->getRepository(Groupe::class)->find($data->groupId ?? $expense->getGroupe()->getId());
        $creator = $this->em->getRepository(User::class)->find($data->authorId ?? $expense->getCreator()->getId());

        if (!$group  || !$creator) {
            return $this->json(['error' => 'Références invalides'], Response::HTTP_NOT_FOUND);
        }
        $category = null;
        if (!empty($data->categoryId) || !empty($expense->getCategory()->getId())) {
            $category = $this->em->getRepository(Category::class)->find($data->categoryId ?? $expense->getCategory()->getId());
        } elseif ($group !== null) {
            $category = $group->getDefaultCategory();
        }

        if (!$category) {
            return $this->json(['error' => 'Catégorie non trouvée'], Response::HTTP_BAD_REQUEST);
        }
        if (!empty($data->recurringExpense) && $expense->getRecurringExpense()) {
            dd($data->recurringExpense);
            $result = $this->recurringExpenseByUpdateExpense($data, $expense, $group, $creator, $category);
            if ($result instanceof JsonResponse) {
                return $result;
            }
        } else if (!empty($data->recurringExpense)) {
            $result = $this->recurringExpenseByCreateExpense($data, $group, $creator, $category, $expense);
            if ($result instanceof JsonResponse) {
                return $result;
            }
        } else {
            if ($expense->getRecurringExpense()) {
                $this->deleteRecurringExpense($expense);
            }
            $expense->setTitle($data->title ?? $expense->getTitle());
            $expense->setAmount($data->amount ?? $expense->getAmount());
            $expense->setSpentAt(new \DateTimeImmutable($data->spentAt ?? $expense->getSpentAt()->format('Y-m-d')));
            $expense->setGroupe($group);
            $expense->setCategory($category);
            $expense->setCreator($creator);

            $errors = $this->validator->validate($expense);
            if (count($errors) > 0) {
                return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
            }
        }

        $this->em->flush();

        return $this->json(['message' => 'Dépense mise à jour avec succès']);
    }


    private function generateRecurringExpenses(object $data, \DateTimeImmutable $startDate, \DateTimeImmutable $endDate, RecurringExpense $recurringExpense, Groupe $group, User $creator, Category $category, ?Expense $excludeExpense = null): array|Response
    {
        $recurring = $data->recurringExpense;
        $frequency = RecurringFrequencyEnum::tryFrom($recurring->frequency);
        if (!$frequency) {
            return new JsonResponse(['error' => 'Fréquence invalide'], Response::HTTP_BAD_REQUEST);
        }
        $interval = match ($frequency->value) {
            'daily' => new \DateInterval('P1D'),
            'weekly' => new \DateInterval('P1W'),
            'monthly' => new \DateInterval('P1M'),
            'yearly' => new \DateInterval('P1Y'),
            default => null,
        };

        if ($interval === null) {
            return $this->json(['error' => 'Fréquence invalide'], Response::HTTP_BAD_REQUEST);
        }

        $expenses = [];
        $current = $startDate;

        while ($current <= $endDate) {
            for ($i = 0; $i < $recurring->repetitionCount; $i++) {
                $daysOffset = (int)(($interval->days ?? 1) / $recurring->repetitionCount) * $i;
                $expenseDate = $current->add(new \DateInterval("P{$daysOffset}D"));

                if ($expenseDate > $endDate) {
                    break;
                }

                if ($excludeExpense && $expenseDate == $excludeExpense->getSpentAt()) {
                    continue;
                }

                $expense = new Expense();
                $expense->setTitle($data->title ?? $excludeExpense?->getTitle());
                $expense->setAmount($data->amount ?? $excludeExpense?->getAmount());
                $expense->setGroupe($group);
                $expense->setCreator($creator);
                $expense->setCategory($category);
                $expense->setCreatedAt(new \DateTimeImmutable());
                $expense->setSpentAt($expenseDate);
                $expense->setRecurringExpense($recurringExpense);

                $errors = $this->validator->validate($expense);
                if (count($errors) > 0) {
                    return $this->json(['errors' => (string) $errors], Response::HTTP_BAD_REQUEST);
                }

                $this->em->persist($expense);
                $expenses[] = $expense;
            }

            $current = $current->add($interval);
        }
        $this->em->flush();
        return $expenses;
    }



    private function recurringExpenseByCreateExpense($data, Groupe $group, User $creator, Category $category,  Expense $mainExpense)
    {
        $recurring = $data->recurringExpense;

        if (
            !isset($recurring->frequency) ||
            !isset($recurring->repetitionCount) ||
            !isset($recurring->endDate)
        ) {
            return $this->json(['error' => 'Champs de récurrence manquants'], Response::HTTP_BAD_REQUEST);
        }
        $frequency = RecurringFrequencyEnum::tryFrom($recurring->frequency);
        if (!$frequency) {
            return new JsonResponse(['error' => 'Fréquence invalide'], Response::HTTP_BAD_REQUEST);
        }
        $endDate = new \DateTimeImmutable($recurring->endDate);

        $recurringExpense = new RecurringExpense();
        $recurringExpense->setFrequency($frequency);
        $recurringExpense->setRepetitionCount($recurring->repetitionCount);
        $recurringExpense->setEndDate($endDate);

        $this->em->persist($recurringExpense);
        $mainExpense->setRecurringExpense($recurringExpense);
        $this->em->persist($mainExpense);

        $startDate = new \DateTimeImmutable($data->spentAt);
        $this->generateRecurringExpenses($data, $startDate, $endDate, $recurringExpense, $group, $creator, $category, $mainExpense);

        return true;
    }

    private function recurringExpenseByUpdateExpense($data, Expense $expense, Groupe $group, User $creator, Category $category)
    {

        $recurring = $data->recurringExpense;
        $recurringExpense = $expense->getRecurringExpense();

        if (
            !isset($recurring->frequency) ||
            !isset($recurring->repetitionCount) ||
            !isset($recurring->endDate)
        ) {
            return $this->json(['error' => 'Champs de récurrence manquants'], Response::HTTP_BAD_REQUEST);
        }
        $frequency = RecurringFrequencyEnum::tryFrom($recurring->frequency);
        if (!$frequency) {
            return new JsonResponse(['error' => 'Fréquence invalide'], Response::HTTP_BAD_REQUEST);
        }
        $recurringExpense->setFrequency($frequency);
        $recurringExpense->setRepetitionCount($recurring->repetitionCount);
        $recurringExpense->setEndDate($recurring->endDate);


        // Supprimer toutes les dépenses liées SAUF celle qu'on est en train de modifier
        $allExpenses = $this->em->getRepository(Expense::class)->findBy(['recurringExpense' => $recurringExpense]);
        foreach ($allExpenses as $e) {
            if ($e->getId() !== $expense->getId()) {
                $this->em->remove($e);
            }
        }

        // Regénérer les dépenses à partir de la nouvelle récurrence
        $startDate = new \DateTimeImmutable($data->spentAt ?? $expense->getSpentAt()->format('Y-m-d'));
        $endDate = new \DateTimeImmutable($recurring->endDate);
        $this->generateRecurringExpenses($data, $startDate, $endDate, $recurringExpense, $group, $creator, $category, $expense);
    }

    private function deleteRecurringExpense(Expense $expense)
    {
        $recurringExpense = $expense->getRecurringExpense();
        if (!$recurringExpense) return;
        $recurringExpense->removeExpense($expense);
        $allExpenses =  $recurringExpense->getExpenses();
        foreach ($allExpenses as $currentExpense) {
            $this->em->remove($currentExpense);
        }
        $this->em->remove($recurringExpense);
        $this->em->flush();
    }





    // NEW TEST
    public function create(Request $request, RecurringExpenseService $recurringExpenseService)
    {
        $data = json_decode($request->getContent());
        try {
            [$group, $creator, $category] = $this->validateReferences($data->groupId, $data->authorId, $data->categoryId ?? null);
        } catch (\InvalidArgumentException $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
        $expense = new Expense();
        $expense->setTitle($data->title);
        $expense->setGroupe($group);
        $expense->setAmount($data->amount);
        $expense->setCreator($creator);
        $expense->setSpentAt(new \DateTimeImmutable($data->spentAt));
        $expense->setCreatedAt(new \DateTimeImmutable());
        $expense->setCategory($category);
        $this->validateExpense($expense);
        $this->em->persist($expense);

        if (isset($data->recurringExpense)) {
            $recurringExpenseService->createSeries($expense, $data);
        }
        $this->em->flush();

        return $this->json(['message' => 'Expense created', 'id' => $expense->getId()], 201);
    }
    /**
     * @param Expense $expense The base expense to update
     * @param array $data The data from the request (decoded JSON)
     * @return Expense[] The updated expenses
     * @throws \InvalidArgumentException if data is invalid
     */
    public function update(int $id, Request $request,  RecurringExpenseService $recurringExpenseService)
    {

        $expense = $this->em->getRepository(Expense::class)->find($id);

        if (!$expense) {
            return $this->json(['error' => 'Dépense introuvable'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent());

        $groupId = $data->groupId ?? $expense->getGroupe()->getId();
        $authorId = $data->authorId ?? $expense->getCreator()->getId();
        $categoryId = $data->categoryId ?? $expense->getCategory()?->getId();

        try {
            [$group, $creator, $category] = $this->validateReferences($groupId, $authorId, $categoryId);
        } catch (\InvalidArgumentException $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
        $recurringData = $data->recurringExpense ?? null;
        $recurringExpense = $expense->getRecurringExpense();

        if ($recurringData) {
            // 🕒 On prépare la nouvelle date de fin pour la comparaison
            $newEndDate = new \DateTimeImmutable($recurringData->endDate);

            // 🎯 On vérifie si les paramètres de récurrence n'ont pas changé
            $sameFrequency = $recurringExpense && $recurringExpense->getFrequency()->value === $recurringData->frequency;
            $sameRepetition = $recurringExpense && $recurringExpense->getRepetitionCount() === $recurringData->repetitionCount;
            $sameEndDate = $recurringExpense && $recurringExpense->getEndDate()->getTimestamp() === $newEndDate->getTimestamp();

            if ($sameFrequency && $sameRepetition && $sameEndDate) {
                // 🔁 Si la série est identique, on met à jour toutes les dépenses liées à cette récurrence
                $expensesToUpdate = $this->em->getRepository(Expense::class)->findBy([
                    'recurringExpense' => $recurringExpense
                ]);
                foreach ($expensesToUpdate as $exp) {
                    $this->applyDataToExpense($exp, $data, $category, $group, $creator);
                    $this->validateExpense($exp);
                }
            } else {
                // ♻️ Sinon, on supprime toutes les anciennes dépenses récurrentes (sauf celle en cours)
                if ($recurringExpense) {
                    $expensesToDelete = $this->em->getRepository(Expense::class)->findBy([
                        'recurringExpense' => $recurringExpense
                    ]);
                    foreach ($expensesToDelete as $exp) {
                        if ($exp->getId() !== $expense->getId()) {
                            $this->em->remove($exp);
                        }
                    }
                }
                // 🔨 Puis on recrée une nouvelle série récurrente avec les nouvelles données
                $recurringExpenseService->createSeries($expense, $data);
            }
        } else if ($recurringExpense) {
            // Cas où on enlève la récurrence : suppression des dépenses liées sauf la dépense courante
            $expensesToDelete = $this->em->getRepository(Expense::class)->findBy([
                'recurringExpense' => $recurringExpense
            ]);
            foreach ($expensesToDelete as $exp) {
                if ($exp->getId() !== $expense->getId()) {
                    $this->em->remove($exp);
                }
            }
            $expense->setRecurringExpense(null);
            $this->em->remove($recurringExpense);
        }
        if (isset($data->spentAt)) {
            $expense->setSpentAt(new \DateTimeImmutable($data->spentAt));
        }
        $this->applyDataToExpense($expense, $data, $category, $group, $creator);
        $this->validateExpense($expense);
        $this->em->persist($expense);
        $this->em->flush();

        return [$expense];
    }

    private function applyDataToExpense(Expense $expense,  $data, Category $category, Groupe $group, User $creator): void
    {
        $expense->setTitle($data->title ?? $expense->getTitle());
        $expense->setAmount($data->amount ?? $expense->getAmount());
        $expense->setCategory($category);
        $expense->setGroupe($group);
        $expense->setCreator($creator);
    }

    private function validateExpense(Expense $expense): void
    {
        $errors = $this->validator->validate($expense);
        if (count($errors) > 0) {
            throw new \InvalidArgumentException((string) $errors);
        }
    }

    private function validateReferences(?int $groupId, ?int $authorId, ?int $categoryId = null): array
    {
        $group = $this->em->getRepository(Groupe::class)->find($groupId);
        $creator = $this->em->getRepository(User::class)->find($authorId);

        if (!$group || !$creator) {
            throw new \InvalidArgumentException('Références groupe ou auteur invalides');
        }

        $category = null;
        if ($categoryId !== null) {
            $category = $this->em->getRepository(Category::class)->find($categoryId);
        }

        if (!$category) {
            $category = $group->getDefaultCategory();
        }

        if (!$category) {
            throw new \InvalidArgumentException('Catégorie non trouvée');
        }

        return [$group, $creator, $category];
    }
}
