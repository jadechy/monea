import { z } from "zod"

export const CategorySchema = z.object({
  id: z.number(),
  label: z.string().max(50).nullable(),
  color: z.enum(["pink", "red", "yellow", "orange", "blue", "purple", "green"]),
})
export type CategoryType = z.infer<typeof CategorySchema>
