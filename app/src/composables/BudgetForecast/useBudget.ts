import {
  fetchAllBudgetCategoriesByGroup,
  fetchAllRemainingBudgetCategoriesByGroup,
  fetchBudgetRemainingInMonth,
  postBudgets,
  type BudgetRemainingByMonthType,
} from "@/services/budgetService"
import type { GroupType } from "@/types/groupType"
import { computed, ref, type Ref } from "vue"
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query"
import type { NewBudgetType } from "@/types/budgetType"
import { getCurrentMonthStartDate, getFirstDayOfMonth } from "@/utils/date"
import router from "@/router"

export const useBudget = (space_id: GroupType["id"], year?: Ref<Date>) => {
  const queryClient = useQueryClient()
  if (!year) {
    year = ref(getCurrentMonthStartDate())
  }

  const monthLabels: Record<string, string> = {
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
  const query = useQuery({
    queryKey: ["budgetByMonth", space_id, year],
    queryFn: () => fetchBudgetRemainingInMonth(space_id, year.value.getFullYear()),
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
  const yearData = computed(() => {
    const data = query.data.value
    if (!data) return {}

    const result: Record<string, BudgetRemainingByMonthType[string]> = {}
    for (const [monthNumber, label] of Object.entries(monthLabels)) {
      const key = `${year.value}-${monthNumber}`
      result[label] = data[key] ?? { remaining: 0, categories: [] }
    }
    return result
  })

  const postBudgetsMutation = useMutation({
    mutationFn: (data: NewBudgetType) => postBudgets(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["budgetRemainingCategories", space_id, getFirstDayOfMonth(year.value)],
      })
      await queryClient.invalidateQueries({
        queryKey: ["budgetCategories", space_id, getFirstDayOfMonth(year.value)],
      })
      router.push({ name: "budget_space", params: { space_id: space_id } })
    },
  })

  return {
    yearData,
    refetch: query.refetch,
    monthLabels,
    postBudgetsMutation,
    remainingBudget,
    budgetList,
    refetchBudget,
  }
}
