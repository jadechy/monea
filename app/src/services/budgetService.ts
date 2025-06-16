import { fetchJson } from "@/lib/api"
import { formatDateForApi } from "@/lib/date"
import { AmountSchema, BudgetByCategorySchema, type BudgetType } from "@/types/budget"
import type { CategoryType } from "@/types/category"
import { type GroupType } from "@/types/group"

export const fetchBudgetGroupDateRemaining = async (
  group_id: GroupType["id"],
  month: BudgetType["monthStart"],
) => {
  try {
    console.log(group_id)
    console.log(month)
    return await fetchJson({
      url: `budget/${group_id}/${formatDateForApi(new Date(month))}/remaining`,
      schema: AmountSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}

export const fetchBudgetGroup = async (
  group_id: GroupType["id"],
  month: BudgetType["monthStart"],
) => {
  try {
    return await fetchJson({
      url: `budget/${group_id}/${formatDateForApi(new Date(month))}`,
      schema: AmountSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}

export const fetchAllBudgetCategoriesByGroup = async (category_id: CategoryType["id"]) => {
  try {
    return await fetchJson({
      url: `budgets/${category_id}/category`,
      schema: BudgetByCategorySchema.array(),
    })
  } catch (error) {
    console.error("Erreur lors du fetch des utilisateurs :", error)
    return null
  }
}
