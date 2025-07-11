import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import {
  getExpenseById,
  postExpense,
  patchExpense,
  deleteExpense,
} from "~/composables/services/expenseService";
import type { NewExpenseType } from "~/types/expenseType";

export const useExpenseMutation = (groupId: string, expenseId?: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const invalidateQueries = async () => {
    await Promise.all([
      queryClient.invalidateQueries({
        queryKey: ["expenses-by-group", groupId],
      }),
      queryClient.invalidateQueries({
        queryKey: ["budget", "remaining", Number(groupId)],
      }),
    ]);
  };

  const { data: expense } = useQuery({
    queryKey: ["expense-by-id", expenseId],
    queryFn: () => getExpenseById(expenseId!),
    enabled: expenseId !== undefined,
  });

  const createExpenseMutation = useMutation({
    mutationFn: (data: NewExpenseType) => postExpense(data),
    onSuccess: async () => {
      await invalidateQueries();
      router.push({ name: "group", params: { group_id: groupId } });
    },
  });

  const updateExpenseMutation = useMutation({
    mutationFn: (data: NewExpenseType) => patchExpense(expenseId!, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["expense-by-id", expenseId],
      });
      await invalidateQueries();
      await router.push({
        name: "expense",
        params: { id: expenseId, group_id: groupId },
      });
    },
  });

  const deleteExpenseMutation = useMutation({
    mutationFn: () => deleteExpense(expenseId!),
    onSuccess: async () => {
      await invalidateQueries();
      router.push({ name: "group", params: { group_id: groupId } });
    },
  });

  return {
    expense,
    createExpenseMutation,
    updateExpenseMutation,
    deleteExpenseMutation,
  };
};
