import { formatDateForApi } from "@/utils/date"
import { type GroupType } from "@/types/groupType"
import { z } from "zod"
import { CategorySchema } from "@/types/category"
import {
  AmountSchema,
  AmountValueSchema,
  BudgetByCategorySchema,
  type BudgetType,
} from "@/types/budgetType"
import { fetchJson } from "@/utils/apiMethods"

export const fetchBudgetGroupDateRemaining = async (
  group_id: GroupType["id"],
  month: BudgetType["monthStart"],
) => {
  return await fetchJson({
    url: `budget/${group_id}/${formatDateForApi(new Date(month))}/remaining`,
    schema: AmountSchema,
  })
}

export const fetchBudgetGroup = (group_id: GroupType["id"], month: BudgetType["monthStart"]) =>
  fetchJson({
    url: `budget/${group_id}/${formatDateForApi(new Date(month))}`,
    schema: AmountSchema,
  })

export const fetchAllBudgetCategoriesByGroup = (group_id: GroupType["id"], month: Date) =>
  fetchJson({
    url: `budgets/${group_id}/${formatDateForApi(month)}/list`,
    schema: BudgetByCategorySchema.array(),
  })

export const BudgetRemainingValueSchema = z.object({
  remaining: AmountValueSchema,
  categories: CategorySchema.extend({
    remaining: AmountValueSchema,
  }).array(),
})

export const BudgetRemainingByMonthSchema = z.record(z.string(), BudgetRemainingValueSchema)

export type BudgetRemainingValueType = z.infer<typeof BudgetRemainingValueSchema>
export type BudgetRemainingByMonthType = z.infer<typeof BudgetRemainingByMonthSchema>

export const fetchBudgetRemainingInMonth = async (group_id: GroupType["id"], year: number) => {
  return await fetchJson({
    url: `budget/${group_id}/${year}/year/remaining/list`,
    schema: BudgetRemainingByMonthSchema,
  })
}

export const fetchBudgetRemainingInDay = async (group_id: GroupType["id"], month: string) => {
  return await fetchJson({
    url: `budget/${group_id}/${month}/month/remaining/list`,
    schema: BudgetRemainingByMonthSchema,
  })
}
