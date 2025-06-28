import { z } from "zod"
import { ColorSchema } from "./color"

export const CategorySchema = z.object({
  id: z.number({
    required_error: "L'identifiant est requis",
    invalid_type_error: "L'identifiant doit être un nombre",
  }),
  label: z
    .string({
      required_error: "Le nom de la catégorie est requis",
      invalid_type_error: "Le nom doit être une chaîne de caractères",
    })
    .max(50, "Le nom de la catégorie doit contenir au maximum 50 caractères")
    .nullable(),
  color: ColorSchema,
})

export const NewCategorySchema = z.object({
  id: CategorySchema.shape.id.optional(),
  label: CategorySchema.shape.label,
  color: CategorySchema.shape.color,
})

export type CategoryType = z.infer<typeof CategorySchema>
export type NewCategoryType = z.infer<typeof NewCategorySchema>
