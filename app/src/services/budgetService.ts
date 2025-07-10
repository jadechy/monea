import { formatDateISO } from "@/utils/date"
import { type GroupType } from "@/types/groupType"
import { z } from "zod"
import { CategorySchema, type CategoryType } from "@/types/categoryType"
import {
  AmountSchema,
  AmountValueSchema,
  BudgetByCategorySchema,
  type BudgetType,
  type NewBudgetType,
} from "@/types/budgetType"
import { fetchJson, postJson } from "@/utils/apiMethods"

export const fetchBudgetGroupDateRemaining = (
  group_id: GroupType["id"],
  month: BudgetType["monthStart"],
) =>
  fetchJson({
    url: `budget/${group_id}/${formatDateISO(new Date(month))}/remaining`,
    schema: AmountSchema,
  })

export const fetchBudgetCategoryDateRemaining = (
  category_id: CategoryType["id"],
  month: BudgetType["monthStart"],
) =>
  fetchJson({
    url: `budget/${category_id}/${formatDateISO(new Date(month))}/remaining/category`,
    schema: AmountSchema,
  })

export const fetchBudgetGroup = (group_id: GroupType["id"], month: BudgetType["monthStart"]) =>
  fetchJson({
    url: `budget/${group_id}/${formatDateISO(new Date(month))}`,
    schema: AmountSchema,
  })

export const fetchAllBudgetCategoriesByGroup = (group_id: GroupType["id"], month: Date) =>
  fetchJson({
    url: `budgets/${group_id}/${formatDateISO(month)}/list`,
    schema: BudgetByCategorySchema.array(),
  })
export const fetchAllRemainingBudgetCategoriesByGroup = (group_id: GroupType["id"], month: Date) =>
  fetchJson({
    url: `budgets/${group_id}/${formatDateISO(month)}/remaining/list`,
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

export const fetchBudgetRemainingInYear = (group_id: GroupType["id"], year: string) =>
  fetchJson({
    url: `budget/${group_id}/${year}/year/remaining/list`,
    schema: BudgetRemainingByMonthSchema,
  })

export const fetchBudgetRemainingInMonth = (group_id: GroupType["id"], month: string) =>
  fetchJson({
    url: `budget/${group_id}/${month}/month/remaining/list`,
    schema: BudgetRemainingByMonthSchema,
  })

export const postBudgets = (body: NewBudgetType) =>
  postJson({ url: `budgets/edit`, body: body, schema: z.any() })
