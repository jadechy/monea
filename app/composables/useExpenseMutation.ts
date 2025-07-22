import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";

import type { NewExpenseType } from "~/types/expenseType";
import { useExpenseService } from "./services/expenseService";

export const useExpenseMutation = () => {
  const route = useRoute();
  const { group_id, category_id, expense_id } = route.params as {
    group_id: string;
    category_id?: string;
    expense_id?: string;
  };

  const router = useRouter();
  const {
    postExpense,
    getExpenseById,
    patchExpense,
    deleteExpense,
    getAllExpensesByGroup,
    getExpensesByCategory,
    getMonthlyExpensesByGroup,
  } = useExpenseService();
  const queryClient = useQueryClient();
  const invalidateQueries = async () => {
    await Promise.all([
      queryClient.invalidateQueries({
        queryKey: ["expenses-by-group", group_id],
      }),
      queryClient.invalidateQueries({
        queryKey: ["budget", "remaining", Number(group_id)],
      }),
    ]);
  };

  const { data: expense } = useQuery({
    queryKey: ["expense-by-id", expense_id],
    queryFn: () => getExpenseById(expense_id!),
    enabled: !!expense_id,
  });

  const createExpenseMutation = useMutation({
    mutationFn: (data: NewExpenseType) => postExpense(data),
    onSuccess: async () => {
      await invalidateQueries();
      router.push(`/groups/${group_id}`);
    },
  });

  const updateExpenseMutation = useMutation({
    mutationFn: (data: NewExpenseType) => patchExpense(expense_id!, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["expense-by-id", expense_id],
      });
      await invalidateQueries();
      await router.push({
        name: "expense",
        params: { id: expense_id, group_id: group_id },
      });
    },
  });

  const deleteExpenseMutation = useMutation({
    mutationFn: () => deleteExpense(expense_id!),
    onSuccess: async () => {
      await invalidateQueries();
      router.push(`/groups/${group_id}`);
    },
  });
  const { data: expenses } = useQuery({
    queryKey: ["expenses-by-group", group_id],
    queryFn: () => getAllExpensesByGroup(group_id),
    enabled: !!group_id,
  });

  const { data: expensesByCategory } = useQuery({
    queryKey: ["expenses-by-category", category_id],
    queryFn: () => getExpensesByCategory(category_id!),
    enabled: category_id !== undefined,
  });

  const { data: expensesByMonthAndGroup, refetch: refetchByMonthAndGroup } =
    useQuery({
      queryKey: ["expenses-monthly-group", group_id],
      queryFn: () =>
        getMonthlyExpensesByGroup(group_id, getCurrentMonthStartDate()),
    });
  return {
    expenses,
    expense,
    createExpenseMutation,
    updateExpenseMutation,
    deleteExpenseMutation,
    expensesByCategory,
    expensesByMonthAndGroup,
    refetchByMonthAndGroup,
  };
};
