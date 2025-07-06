import { z } from "zod"

export const FrequencyEnum = z.enum(["daily", "monthly", "weekly", "yearly"])

export const RecurringExpenseSchema = z.object({
  id: z.number(),
  repetitionCount: z.number(),
  frequency: FrequencyEnum,
  endDate: z.string().datetime({ offset: true }),
})
export const NewRecurringExpenseSchema = RecurringExpenseSchema.pick({
  frequency: true,
  repetitionCount: true,
  endDate: true,
})

export type RecurringExpenseType = z.infer<typeof RecurringExpenseSchema>
export type NewRecurringExpenseType = z.infer<typeof NewRecurringExpenseSchema>
