import { useQuery } from "@tanstack/vue-query"
import type { GroupType } from "@/types/group"
import {
  fetchBudgetGroup,
  fetchBudgetGroupDateRemaining,
  fetchAllBudgetCategoriesByGroup,
  fetchBudgetRemainingInMonth,
  fetchBudgetRemainingInDay,
} from "@/services/budgetService"

export const useBudget = (groupId: GroupType["id"]) => {
  // Query pour le budget principal du groupe
  const useBudgetGroup = (month: string) => {
    return useQuery({
      queryKey: ["budget", "group", groupId, month],
      queryFn: () => fetchBudgetGroup(groupId, month),
      enabled: !!groupId && !!month,
    })
  }

  // Query pour le budget restant
  const useBudgetRemaining = (month: string) => {
    return useQuery({
      queryKey: ["budget", "remaining", groupId, month],
      queryFn: () => fetchBudgetGroupDateRemaining(groupId, month),
      enabled: !!groupId && !!month,
    })
  }

  // Query pour toutes les catégories de budget
  const useBudgetCategories = (month: Date) => {
    return useQuery({
      queryKey: ["budget", "categories", groupId, month.toISOString()],
      queryFn: () => fetchAllBudgetCategoriesByGroup(groupId, month),
      enabled: !!groupId && !!month,
    })
  }

  // Query pour le budget restant par mois
  const useBudgetRemainingByMonth = (year: number) => {
    return useQuery({
      queryKey: ["budget", "remaining-by-month", groupId, year],
      queryFn: () => fetchBudgetRemainingInMonth(groupId, year),
      enabled: !!groupId && !!year,
    })
  }

  // Query pour le budget restant par jour
  const useBudgetRemainingByDay = (month: string) => {
    return useQuery({
      queryKey: ["budget", "remaining-by-day", groupId, month],
      queryFn: () => fetchBudgetRemainingInDay(groupId, month),
      enabled: !!groupId && !!month,
    })
  }

  return {
    useBudgetGroup,
    useBudgetRemaining,
    useBudgetCategories,
    useBudgetRemainingByMonth,
    useBudgetRemainingByDay,
  }
}
