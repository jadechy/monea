import { z } from "zod"
import { UserSchema } from "./user"
import { GroupSchema } from "./group"
import { CategorySchema } from "./category"
import { RecurringExpenseSchema } from "./recurring_expense"
export const ExpenseSchema = z.object({
  id: z.number(),
  amount: z.number().nullable(),
  title: z.string().max(255).nullable(),
  createdAt: z.string().datetime().nullable(),
  groupe: GroupSchema,
  category: CategorySchema.nullable(),
  creator: UserSchema,
  recurringExpense: RecurringExpenseSchema.nullable(),
  spentAt: z.string().datetime().nullable(),
})
export type ExpenseType = z.infer<typeof ExpenseSchema>
