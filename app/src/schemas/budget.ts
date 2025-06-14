import { z } from "zod"
import { CategorySchema } from "./category"

export const BudgetSchema = z.object({
  id: z.number(),
  amount: z.number().nullable(),
  monthStart: z.string().datetime(),
  category: CategorySchema,
})
export type BudgetType = z.infer<typeof BudgetSchema>
