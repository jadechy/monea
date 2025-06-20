import {
  fetchBudgetRemainingInMonth,
  type FetchBudgetRemainingInMonthType,
} from "@/services/budgetService"
import type { GroupType } from "@/types/group"
import { ref } from "vue"

export const useBudget = (space_id: GroupType["id"]) => {
  const yearData = ref<FetchBudgetRemainingInMonthType>({})
  const error = ref<string | null>(null)
  const months: Record<string, string>[] = [
    { "01": "Janvier" },
    { "02": "Février" },
    { "03": "Mars" },
    { "04": "Avril" },
    { "05": "Mai" },
    { "06": "Juin" },
    { "07": "Juillet" },
    { "08": "Août" },
    { "09": "Septembre" },
    { "10": "Octobre" },
    { "11": "Novembre" },
    { "12": "Décembre" },
  ]

  const loadBudgetForYear = async (yearToLoad: number) => {
    const resultBudgetInMonth = await fetchBudgetRemainingInMonth(space_id, yearToLoad)
    if (!resultBudgetInMonth) {
      error.value = "Erreur lors du chargement des budgets"
      return
    }

    yearData.value = {}
    months.forEach((obj) => {
      const [keyMonth, label] = Object.entries(obj)[0]
      const key = `${yearToLoad}-${keyMonth}`
      yearData.value[label] = resultBudgetInMonth[key] ?? {
        remaining: 0,
        categories: [],
      }
    })
  }

  return { yearData, error, loadBudgetForYear }
}
