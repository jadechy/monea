import { z } from "zod"
import { UserSchema } from "./user"
import { GroupSchema } from "./group"
import { CategorySchema } from "./category"
import { RecurringExpenseSchema } from "./recurring_expense"
// export const ExpenseSchema = z.object({
//   id: z.number(),
//   amount: z.number(),
//   title: z.string().max(255),
//   createdAt: z.string(),
//   groupe: GroupSchema,
//   category: CategorySchema.nullable(),
//   creator: UserSchema,
//   recurringExpense: RecurringExpenseSchema.nullable(),
//   spentAt: z.string().datetime(),
//   members: z.array(UserSchema),
// })

export const ExpenseSchema = z.object({
  id: z.number(),
  amount: z.number(),
  title: z.string().max(255),
  createdAt: z.string(),
  groupe: z.string(),
  category: z.string().nullable(),
  creator: z.string(),
  recurringExpense: RecurringExpenseSchema.optional(),
  spentAt: z.string(),
  participants: z.array(UserSchema).optional(),
})

export const FetchNewExpenseSchema = GroupSchema.extend({
  categories: z.array(CategorySchema),
  members: z.array(UserSchema),
})

export const ExpenseDateSchema = z.record(z.string().datetime(), z.array(ExpenseSchema))
export type ExpenseType = z.infer<typeof ExpenseSchema>
export type ExpenseDateType = z.infer<typeof ExpenseDateSchema>
export type FetchNewExpenseType = z.infer<typeof FetchNewExpenseSchema>
