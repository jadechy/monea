import { z } from "zod"
import { ColorSchema } from "./color"

// Schéma d'une catégorie
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

// Schéma pour la création d'une nouvelle catégorie
export const NewCategorySchema = z.object({
  label: CategorySchema.shape.label,
  color: CategorySchema.shape.color,
})

// Schéma d'une catégorie liée à un groupe
export const CategoryInGroupSchema = z.object({
  categoryId: CategorySchema.shape.id,
  label: CategorySchema.shape.label,
  color: CategorySchema.shape.color,
})

// Types dérivés
export type CategoryType = z.infer<typeof CategorySchema>
export type NewCategoryType = z.infer<typeof NewCategorySchema>
export type CategoryInGroupType = z.infer<typeof CategoryInGroupSchema>
