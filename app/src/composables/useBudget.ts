import {
  fetchAllBudgetCategoriesByGroup,
  fetchAllRemainingBudgetCategoriesByGroup,
  fetchBudgetRemainingInYear,
  postBudgets,
  type BudgetRemainingValueType,
} from "@/services/budgetService"
import type { GroupType } from "@/types/groupType"
import { ref, type Ref } from "vue"
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query"
import type { NewBudgetType } from "@/types/budgetType"
import {
  formatDateISO,
  getCurrentMonthStartDate,
  getFirstDayOfMonth,
  getFirstDayOfYear,
} from "@/utils/date"
import router from "@/router"

export const useBudget = (space_id: GroupType["id"], year?: Ref<Date>) => {
  const queryClient = useQueryClient()
  if (!year) {
    year = ref(getCurrentMonthStartDate())
  }

  const months: Record<string, string> = {
    "01": "Janvier",
    "02": "Février",
    "03": "Mars",
    "04": "Avril",
    "05": "Mai",
    "06": "Juin",
    "07": "Juillet",
    "08": "Août",
    "09": "Septembre",
    "10": "Octobre",
    "11": "Novembre",
    "12": "Décembre",
  }
  const { data: remainingBudgetInYear, refetch: refetchRemainingBudgetInYear } = useQuery({
    queryKey: ["budgetRemainingInYear", space_id, year],
    queryFn: () =>
      fetchBudgetRemainingInYear(space_id, formatDateISO(getFirstDayOfYear(year.value))),
    enabled: !!space_id,
  })
  const { data: budgetList, refetch: refetchBudget } = useQuery({
    queryKey: ["budgetCategories", space_id, getFirstDayOfMonth(year.value)],
    queryFn: () => {
      return fetchAllBudgetCategoriesByGroup(space_id, getFirstDayOfMonth(year.value))
    },
    enabled: !!space_id,
  })
  const { data: remainingBudget } = useQuery({
    queryKey: ["budgetRemainingCategories", space_id, getFirstDayOfMonth(year.value)],
    queryFn: () => {
      return fetchAllRemainingBudgetCategoriesByGroup(space_id, getFirstDayOfMonth(year.value))
    },
    enabled: !!space_id,
  })

  const postBudgetsMutation = useMutation({
    mutationFn: (data: NewBudgetType) => postBudgets(data),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["budgetRemainingCategories", space_id, getFirstDayOfMonth(year.value)],
        }),
        queryClient.invalidateQueries({
          queryKey: ["budgetCategories", space_id, getFirstDayOfMonth(year.value)],
        }),
        queryClient.invalidateQueries({
          queryKey: ["budget", "initial", Number(space_id)],
        }),
        queryClient.invalidateQueries({
          queryKey: ["budget", "remaining", Number(space_id)],
        }),
      ])
      router.push({ name: "budget_space", params: { space_id: space_id } })
    },
  })
  const getRemainingStyle = (remaining: number) => {
    if (remaining === 0) return "text-dark-700"
    if (remaining > 0) return "text-green-700"
    return "text-red-700"
  }
  return {
    refetch: refetchRemainingBudgetInYear,
    months,
    postBudgetsMutation,
    remainingBudget,
    budgetList,
    refetchBudget,
    remainingBudgetInYear,
    getRemainingStyle,
  }
}
