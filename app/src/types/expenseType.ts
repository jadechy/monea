import { z } from "zod"
import { UserInOtherSchema, UserSchema } from "./user"
import { GroupSchema } from "./groupType"
import { CategorySchema, type CategoryType } from "./categoryType"
import { RecurringExpenseSchema } from "./recurringExpenseType"
import { DateSchema } from "./date"

export const ExpenseSchema = z.object({
  id: z.number({
    required_error: "Identifiant requis",
    invalid_type_error: "L'identifiant doit être un nombre",
  }),
  amount: z
    .number({
      required_error: "Le montant est requis",
      invalid_type_error: "Le montant doit être un nombre",
    })
    .positive("Le montant doit être positif"),
  title: z
    .string({
      required_error: "Le titre est requis",
      invalid_type_error: "Le titre doit être une chaîne de caractères",
    })
    .min(3, "Le titre doit contenir au moins 3 caractères")
    .max(255, "Le titre doit contenir au maximum 255 caractères"),
  createdAt: DateSchema,
  groupe: GroupSchema.shape.id,
  category: CategorySchema,
  creator: UserInOtherSchema,
  recurringExpense: RecurringExpenseSchema.nullable(),
  spentAt: DateSchema,
  participants: z
    .array(UserInOtherSchema, {
      invalid_type_error: "Les participants doivent être une liste d'utilisateurs",
    })
    .optional(),
})

export const NewExpenseSchema = z.object({
  categoryId: CategorySchema.shape.id,
  title: ExpenseSchema.shape.title,
  amount: ExpenseSchema.shape.amount,
  spentAt: z.date({
    required_error: "La date est requise",
    invalid_type_error: "La date est invalide",
  }),
  authorId: UserSchema.shape.id,
  groupId: GroupSchema.shape.id,
})

export const ExpenseDateSchema = z.record(
  DateSchema,
  z.array(ExpenseSchema, {
    invalid_type_error: "Les dépenses doivent être une liste",
  }),
)

export type ExpenseType = z.infer<typeof ExpenseSchema>
export type ExpenseDateType = z.infer<typeof ExpenseDateSchema>
export type NewExpenseType = z.infer<typeof NewExpenseSchema>
