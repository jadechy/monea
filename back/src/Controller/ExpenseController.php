<?php

namespace App\Controller;

use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\ORM\EntityManagerInterface;
use stdClass;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;

use App\DTO\ExpenseDTO;
use App\DTO\ExpenseInputDTO;
use App\DTO\RecurringExpenseInputDTO;
use App\DTO\UserInputDTO;
use App\Entity\Category;
use App\Entity\Expense;
use App\Entity\Groupe;
use App\Entity\User;
use App\Voter\CreateExpenseSubject;
use App\Exception\RecurringExpenseValidationException;
use App\Repository\GroupeRepository;
use App\Repository\ExpenseRepository;
use App\Repository\CategoryRepository;
use App\Repository\MemberRepository;
use App\Repository\UserRepository;
use App\Service\RecurringExpenseService;
use DateTimeImmutable;


#[AsController]
class ExpenseController extends AbstractController
{
    public function __construct(
        private GroupeRepository $groupeRepository,
        private ExpenseRepository $expenseRepository,
        private CategoryRepository $categoryRepository,
        private MemberRepository $memberRepository,
        private UserRepository $userRepository,
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

    public function getExpenseById(int $id): JsonResponse
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

    public function getAllExpenseByGroup(int $groupeId): JsonResponse
    {
        if ($groupeId <= 0) {
            return new JsonResponse(['error' => 'ID de groupe invalide'], Response::HTTP_BAD_REQUEST);
        }
        $groupe = $this->groupeRepository->find($groupeId);
        if (!$groupe) {
            return new JsonResponse(['error' => 'Groupe not found'], Response::HTTP_NOT_FOUND);
        }
        $expensesData = $this->expenseRepository->findBy(['groupe' => $groupe]);
        if (empty($expensesData)) {
            return new JsonResponse(new stdClass(), Response::HTTP_OK);
        }

        $expenses = $this->createExpenseArray($expensesData);
        return $this->json($expenses, Response::HTTP_OK, [], ['groups' => ['array_expense:read', 'category:read']]);
    }

    public function getAllExpenseByGroupAndMonth(int $groupeId, string $monthStart): JsonResponse
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

    public function getAllExpenseByGroupAndDay(int $groupeId, string $day): JsonResponse
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

    public function getAllExpenseByGroupAndWeek(int $groupeId, string $day): JsonResponse
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

    public function getAllExpensesByCategory(int $categoryId): JsonResponse
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

    public function getAllExpensesByCategoryAndMonth(int $categoryId, string $monthStart): JsonResponse
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

    public function create(Request $request, RecurringExpenseService $recurringExpenseService): JsonResponse
    {
        $jsonData = json_decode($request->getContent(), false);
        try {
            $data = (new ExpenseInputDTO())->fromObject($jsonData);
        } catch (\InvalidArgumentException $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        try {
            /** @var Groupe $group */
            /** @var User $creator */
            /** @var Category $category */
            [$group, $creator, $category] = $this->validateReferences($data->groupId, $data->authorId, $data->categoryId ?? null);
        } catch (\InvalidArgumentException $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        };

        $membre = $this->memberRepository->findOneBy(['groupe' => $group, 'individual' => $creator]);
        if (!$membre) {
            return $this->json(['error' => 'Membre introuvable'], Response::HTTP_NOT_FOUND);
        }
        
        $expense = new Expense();

        $this->denyAccessUnlessGranted('creer', new CreateExpenseSubject($group, $creator));

        /** @var string */
        $title = $data->title;
        /** @var float */
        $amount = $data->amount;
        $expense->setTitle($title)
            ->setGroupe($group)
            ->setAmount($amount)
            ->setCreator($creator)
            ->setSpentAt(new \DateTimeImmutable($data->spentAt))
            ->setCreatedAt(new \DateTimeImmutable())
            ->setCategory($category);

        if (isset($data->participants)) {
            foreach ($data->participants as $userDto) {
                /** @var UserInputDTO $userDto */
                $user = $this->userRepository->find($userDto->id);

                if (!$user) {
                    throw new \Exception("Utilisateur non trouvé.");
                }

                $expense->addParticipant($user);
            }
        }

        $this->validateExpense($expense);
        $this->em->persist($expense);

        if (isset($data->recurring)) {
            try {
                $recurringExpenseService->createSeries($expense, $data);
            } catch (RecurringExpenseValidationException $e) {
                return new JsonResponse([
                    'errors' => (string) $e->getErrors()
                ], Response::HTTP_BAD_REQUEST);
            }
        }

        $this->em->flush();

        return $this->json(['message' => 'La dépense a bien été enregistrée', 'id' => $expense->getId()], Response::HTTP_CREATED);
    }

    /**
     * @throws \InvalidArgumentException if data is invalid
     */
    public function update(int $id, Request $request, RecurringExpenseService $recurringExpenseService, SerializerInterface $serializer): JsonResponse
    {
        $expense = $this->em->getRepository(Expense::class)->find($id);

        if (!$expense) {
            return $this->json(['error' => 'Dépense introuvable'], Response::HTTP_NOT_FOUND);
        }

        $jsonData = json_decode($request->getContent(), false);

        try {
            /** @var ExpenseInputDTO $data */
            $data = (new ExpenseInputDTO())->fromObject($jsonData);
        } catch (\Exception $e) {
            return $this->json(['error' => 'JSON invalide : ' . $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        $groupId = $data->groupId ?? $expense->getGroupe()->getId();
        $authorId = $data->authorId ?? $expense->getCreator()->getId();
        $categoryId = $data->categoryId ?? $expense->getCategory()->getId();

        try {
            /** @var Groupe $group */
            /** @var User $creator */
            /** @var Category $category */
            [$group, $creator, $category] = $this->validateReferences($groupId, $authorId, $categoryId);
        } catch (\InvalidArgumentException $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }

        if (isset($data->spentAt)) {
            $expense->setSpentAt(new \DateTimeImmutable($data->spentAt));
        };

        if (isset($data->participants)) {
            $currentParticipants = $expense->getParticipants();
            $newParticipants = [];

            foreach ($data->participants as $userDto) {
                /** @var UserInputDTO $userDto */
                $user = $this->userRepository->find($userDto->id);
                if (!$user) {
                    throw new \Exception("Utilisateur non trouvé.");
                }
                $newParticipants[] = $user;
            }

            foreach ($currentParticipants as $existingUser) {
                if (!in_array($existingUser, $newParticipants, true)) {
                    $expense->removeParticipant($existingUser);
                }
            }

            foreach ($newParticipants as $user) {
                $expense->addParticipant($user);
            }
        }else $expense->removeAllParticipant();

        $this->validateExpense($expense);
        $this->em->persist($expense);

        $recurringData = $data->recurring ?? null;
        $recurringExpense = $expense->getRecurringExpense();

        /** @var RecurringExpenseInputDTO|null $recurringData */
        if ($recurringData) {
            // 🕒 On prépare la nouvelle date de fin pour la comparaison
            $newEndDate = $recurringData->endDate;

            // 🎯 On vérifie si les paramètres de récurrence n'ont pas changé
            $sameFrequency = $recurringExpense && $recurringExpense->getFrequency()->value === $recurringData->frequency->value;
            $sameRepetition = $recurringExpense && $recurringExpense->getRepetitionCount() === $recurringData->repetitionCount;
            $sameEndDate = $recurringExpense && $recurringExpense->getEndDate()->getTimestamp() === $newEndDate->getTimestamp();

            if ($sameFrequency && $sameRepetition && $sameEndDate) {
                // 🔁 Si la série est identique, on met à jour toutes les dépenses liées à cette récurrence
                $expensesToUpdate = $this->expenseRepository->findBy([
                    'recurringExpense' => $recurringExpense
                ]);
                foreach ($expensesToUpdate as $exp) {
                    $this->applyDataToExpense($exp, $data, $category, $group, $creator);
                    $this->validateExpense($exp);
                }
            } else {
                // ♻️ Sinon, on supprime toutes les anciennes dépenses récurrentes (sauf celle en cours)
                if ($recurringExpense) {
                    $expensesToDelete = $this->expenseRepository->findBy([
                        'recurringExpense' => $recurringExpense
                    ]);
                    foreach ($expensesToDelete as $exp) {
                        if ($exp->getId() !== $expense->getId()) {
                            $this->em->remove($exp);
                        }
                    }
                }
                // 🔨 Puis on recrée une nouvelle série récurrente avec les nouvelles données
                try {
                    $recurringExpenseService->createSeries($expense, $data);
                } catch (RecurringExpenseValidationException $e) {
                    return new JsonResponse([
                        'errors' => (string) $e->getErrors()
                    ], Response::HTTP_BAD_REQUEST);
                }
            }
        } else if ($recurringExpense) {
            // Cas où on enlève la récurrence : suppression des dépenses liées sauf la dépense courante
            $expensesToDelete = $this->expenseRepository->findBy([
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
        
        $this->applyDataToExpense($expense, $data, $category, $group, $creator);
        $this->validateExpense($expense);
        $this->em->flush();

        return $this->json(['message' => 'La dépense a bien été enregistrée', 'expense' => $expense], Response::HTTP_OK);
    }

    private function applyDataToExpense(Expense $expense, ExpenseInputDTO $data, Category $category, Groupe $group, User $creator): void
    {
        $expense->setTitle($data->title ?? $expense->getTitle());
        $expense->setAmount($data->amount ?? $expense->getAmount());
        $expense->setCategory($category);
        $expense->setGroupe($group);
        $expense->setCreator($creator);

        if (isset($data->participants)) {
            $currentParticipants = $expense->getParticipants();
            $newParticipants = [];

            foreach ($data->participants as $userDto) {
                /** @var UserInputDTO $userDto */
                $user = $this->userRepository->find($userDto->id);
                if (!$user) {
                    throw new \Exception("Utilisateur non trouvé.");
                }
                $newParticipants[] = $user;
            }

            foreach ($currentParticipants as $existingUser) {
                if (!in_array($existingUser, $newParticipants, true)) {
                    $expense->removeParticipant($existingUser);
                }
            }

            foreach ($newParticipants as $user) {
                $expense->addParticipant($user);
            }
        }else $expense->removeAllParticipant();
    }

    private function validateExpense(Expense $expense): void
    {
        $errors = $this->validator->validate($expense);
        if (count($errors) > 0) {
            throw new \InvalidArgumentException((string) $errors);
        }
    }

    /** @return array{0: Groupe, 1: User, 2: Category|null} */
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
