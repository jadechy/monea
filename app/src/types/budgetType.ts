import { z } from "zod"
import { CategorySchema } from "./categoryType"
import { DateSchema } from "./date"

export const AmountValueSchema = z.number()

export const BudgetSchema = z.object({
  id: z.number(),
  amount: AmountValueSchema,
  monthStart: DateSchema,
  category: CategorySchema,
})

export const AmountSchema = z.object({
  amount: AmountValueSchema,
})

export const BudgetByCategorySchema = BudgetSchema.pick({
  id: true,
  amount: true,
  monthStart: true,
  category: true,
})

export const BudgetSummarySchema = z.object({
  totalBudget: AmountValueSchema,
  totalSpent: AmountValueSchema,
  remaining: AmountValueSchema,
  categories: BudgetByCategorySchema.array(),
})

export type AmountType = z.infer<typeof AmountSchema>
export type BudgetType = z.infer<typeof BudgetSchema>
export type BudgetByCategoryType = z.infer<typeof BudgetByCategorySchema>
export type BudgetSummaryType = z.infer<typeof BudgetSummarySchema>
