import { z } from "zod"

export const RecurringExpenseSchema = z.object({
  id: z.number(),
  repetitionCount: z.number().nullable(),
  frequency: z.string().max(20).nullable(),
  endDate: z.string().datetime().nullable(),
})
export type RecurringExpenseType = z.infer<typeof RecurringExpenseSchema>
