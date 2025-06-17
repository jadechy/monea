import { z } from "zod"
import { UserSchema } from "./user"
import { GroupSchema } from "./group"
import { CategorySchema } from "./category"
import { RecurringExpenseSchema } from "./recurring_expense"
import { DateSchema } from "./date"
export const ExpenseSchema = z.object({
  id: z.number(),
  amount: z.number(),
  title: z.string().max(255),
  createdAt: DateSchema,
  groupe: GroupSchema.shape.id,
  category: CategorySchema.shape.id,
  creator: UserSchema.shape.id,
  recurringExpense: RecurringExpenseSchema.nullable(),
  spentAt: DateSchema,
  participants: z.array(UserSchema).optional(),
})

export const FetchNewExpenseSchema = GroupSchema.extend({
  categories: z.array(CategorySchema),
  members: z.array(UserSchema),
})

export const ExpenseDateSchema = z.record(DateSchema, z.array(ExpenseSchema))
export type ExpenseType = z.infer<typeof ExpenseSchema>
export type ExpenseDateType = z.infer<typeof ExpenseDateSchema>
export type FetchNewExpenseType = z.infer<typeof FetchNewExpenseSchema>
