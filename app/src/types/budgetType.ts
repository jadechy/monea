import { z } from "zod"
import { CategorySchema } from "./category"
import { DateSchema } from "./date"

export const AmountValueSchema = z.number()

export const BudgetSchema = z.object({
  id: z.number(),
  amount: AmountValueSchema,
  monthStart: DateSchema,
  category: CategorySchema,
})

export type BudgetType = z.infer<typeof BudgetSchema>

export const AmountSchema = z.object({
  amount: AmountValueSchema,
})

export type AmountType = z.infer<typeof AmountSchema>

export const BudgetByCategorySchema = z.object({
  id: BudgetSchema.shape.id,
  amount: BudgetSchema.shape.amount,
  monthStart: DateSchema,
  category: z.object({
    categoryId: CategorySchema.shape.id,
    color: CategorySchema.shape.color,
    label: CategorySchema.shape.label,
  }),
})

export type BudgetByCategoryType = z.infer<typeof BudgetByCategorySchema>

export const BudgetSummarySchema = z.object({
  totalBudget: AmountValueSchema,
  totalSpent: AmountValueSchema,
  remaining: AmountValueSchema,
  categories: BudgetByCategorySchema.array(),
})

export type BudgetSummaryType = z.infer<typeof BudgetSummarySchema>
