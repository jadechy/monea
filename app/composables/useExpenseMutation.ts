import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query"
import router from "@/router"
import { getExpenseById, postExpense, patchExpense, deleteExpense } from "@/services/expenseService"
import type { NewExpenseType, ExpenseType } from "../../../app/types/expenseType"
import type { GroupType } from "../../../app/types/groupType"

export const useExpenseMutation = (groupId: GroupType["id"], expenseId?: ExpenseType["id"]) => {
  const queryClient = useQueryClient()
  const invalidateQueries = async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ["expenses-by-group", groupId] }),
      queryClient.invalidateQueries({ queryKey: ["budget", "remaining", Number(groupId)] }),
    ])
  }

  const { data: expense } = useQuery({
    queryKey: ["expense-by-id", expenseId],
    queryFn: () => getExpenseById(expenseId!),
    enabled: expenseId !== undefined,
  })

  const createExpenseMutation = useMutation({
    mutationFn: (data: NewExpenseType) => postExpense(data),
    onSuccess: async () => {
      await invalidateQueries()
      router.push({ name: "space", params: { space_id: groupId } })
    },
  })

  const updateExpenseMutation = useMutation({
    mutationFn: (data: NewExpenseType) => patchExpense(expenseId!, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["expense-by-id", expenseId] })
      await invalidateQueries()
      await router.push({ name: "expense", params: { id: expenseId, space_id: groupId } })
    },
  })

  const deleteExpenseMutation = useMutation({
    mutationFn: () => deleteExpense(expenseId!),
    onSuccess: async () => {
      await invalidateQueries()
      router.push({ name: "space", params: { space_id: groupId } })
    },
  })

  return {
    expense,
    createExpenseMutation,
    updateExpenseMutation,
    deleteExpenseMutation,
  }
}
