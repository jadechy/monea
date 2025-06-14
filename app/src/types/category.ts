import { z } from "zod"
import { GroupSchema } from "./group"

export const CategorySchema = z.object({
  id: z.number(),
  label: z.string().max(50).nullable(),
  color: z.enum(["pink", "red", "yellow", "orange", "blue", "purple"]),
  groupe: GroupSchema,
})
export type CategoryType = z.infer<typeof CategorySchema>
