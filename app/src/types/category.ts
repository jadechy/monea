import { z } from "zod"
import { ColorSchema } from "./color"

export const CategorySchema = z.object({
  id: z.number(),
  label: z.string().max(50).nullable(),
  color: ColorSchema,
})
export type CategoryType = z.infer<typeof CategorySchema>
