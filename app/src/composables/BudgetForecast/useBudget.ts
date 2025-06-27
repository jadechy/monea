import {
  fetchBudgetRemainingInMonth,
  type BudgetRemainingByMonthType,
} from "@/services/budgetService"
import type { GroupType } from "@/types/group"
import { computed } from "vue"
import { useQuery } from "@tanstack/vue-query"

export const useBudget = (space_id: GroupType["id"], year: number) => {
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
    queryFn: () => fetchBudgetRemainingInMonth(space_id, year),
    enabled: !!space_id,
  })

  const yearData = computed(() => {
    const data = query.data.value
    if (!data) return {}

    const result: Record<string, BudgetRemainingByMonthType[string]> = {}
    for (const [monthNumber, label] of Object.entries(monthLabels)) {
      const key = `${year}-${monthNumber}`
      result[label] = data[key] ?? { remaining: 0, categories: [] }
    }
    return result
  })

  return {
    yearData,
    refetch: query.refetch,
    monthLabels,
  }
}
