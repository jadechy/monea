import type { FetchBudgetRemainingInMonthValueType } from "@/services/budgetService"
import type { CategoryType } from "@/types/category"
import type { ModelRef } from "vue"

export const useRemaining = (selectedCategory: ModelRef<CategoryType | undefined>) => {
  const getRemainingClass = (value: FetchBudgetRemainingInMonthValueType) => {
    const remaining = getRemaining(value)
    if (remaining === 0) return "text-dark-700"
    if (remaining > 0) return "text-green-700"
    return "text-red-700"
  }
  const getRemaining = (value: FetchBudgetRemainingInMonthValueType) => {
    if (selectedCategory && selectedCategory.value) {
      const cat = value.categories.find((c) => c.id === selectedCategory.value?.id)
      return cat?.remaining ?? 0
    }
    return value.remaining
  }
  return { getRemainingClass, getRemaining }
}
