import { z } from "zod"
import { CategorySchema } from "./category"
export const AmountValueSchema = z.number()

export const BudgetSchema = z.object({
  id: z.number(),
  amount: AmountValueSchema,
  monthStart: z.string().datetime(),
  category: CategorySchema,
})
export type BudgetType = z.infer<typeof BudgetSchema>
export const AmountSchema = z.object({
  amount: AmountValueSchema,
})
export type AmountType = BudgetType["amount"]
