import { fetchJson } from "@/utils/api"
import { formatDateForApi } from "@/utils/date"
import {
  AmountSchema,
  AmountValueSchema,
  BudgetByCategorySchema,
  type BudgetType,
} from "@/types/budget"
import { type GroupType } from "@/types/group"
import { z } from "zod"
import { CategorySchema } from "@/types/category"

export const fetchBudgetGroupDateRemaining = async (
  group_id: GroupType["id"],
  month: BudgetType["monthStart"],
) => {
  try {
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

export const fetchAllBudgetCategoriesByGroup = async (group_id: GroupType["id"], month: Date) => {
  try {
    return await fetchJson({
      url: `budgets/${group_id}/${formatDateForApi(month)}/list`,
      schema: BudgetByCategorySchema.array(),
    })
  } catch (error) {
    console.error("Erreur lors du fetch des utilisateurs :", error)
    return null
  }
}
const fetchBudgetRemainingInMonthSchema = z.record(
  z.string(),
  z.object({
    remaining: AmountValueSchema,
    categories: CategorySchema.extend({ amount: AmountValueSchema }).array(),
  }),
)

export type FetchBudgetRemainingInMonthType = z.infer<typeof fetchBudgetRemainingInMonthSchema>

export const fetchBudgetRemainingInMonth = async (group_id: GroupType["id"], year: string) => {
  try {
    return await fetchJson({
      url: `budget/${group_id}/${year}/year/remaining`,
      schema: fetchBudgetRemainingInMonthSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
