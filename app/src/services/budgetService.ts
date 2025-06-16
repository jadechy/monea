import { fetchJson } from "@/lib/api"
import { AmountSchema, type BudgetType } from "@/types/budget"
import { type GroupType } from "@/types/group"

export const fetchBudgetGroupRemaining = async (
  group_id: GroupType["id"],
  month: BudgetType["monthStart"],
) => {
  try {
    return await fetchJson({
      url: `budget/${group_id}/${month}/remaining`,
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
      url: `budget/${group_id}/${month}`,
      schema: AmountSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
