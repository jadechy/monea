import { z } from "zod"
import { ColorSchema } from "./color"

export const CategorySchema = z.object({
  id: z.number(),
  label: z.string().max(50).nullable(),
  color: ColorSchema,
})

const NewCategorySchema = z.object({
  label: CategorySchema.shape.label,
  color: CategorySchema.shape.color,
})
export type CategoryType = z.infer<typeof CategorySchema>
export type NewCategoryType = z.infer<typeof NewCategorySchema>
