import { z } from "zod";
import { UserDTOSchema, UserSchema } from "./user";
import { GroupSchema } from "./groupType";
import { CategorySchema } from "./categoryType";
import {
  NewRecurringExpenseSchema,
  RecurringExpenseSchema,
} from "./recurringExpenseType";
import { dateSchema, DateSchema } from "./date";

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
  groupe: GroupSchema.shape.id,
  category: CategorySchema,
  creator: UserDTOSchema,
  spentAt: dateSchema,
  recurring: RecurringExpenseSchema.nullable(),
  participants: z
    .array(UserDTOSchema, {
      invalid_type_error:
        "Les participants doivent être une liste d'utilisateurs",
    })
    .optional(),
});

export const NewExpenseSchema = z.object({
  categoryId: z.number().optional(),
  title: ExpenseSchema.shape.title,
  amount: ExpenseSchema.shape.amount,
  spentAt: z.date(),
  authorId: UserSchema.shape.id,
  groupId: GroupSchema.shape.id,
  recurring: NewRecurringExpenseSchema.nullable().optional(),
  participants: z.array(UserSchema.shape.id),
});
const ExpenseSingleValueDateSchema = ExpenseSchema.pick({
  amount: true,
  id: true,
  title: true,
  category: true,
}).extend({ creator: UserDTOSchema.pick({ picture: true, username: true }) });
const ExpenseValueDateSchema = z.array(ExpenseSingleValueDateSchema, {
  invalid_type_error: "Les dépenses doivent être une liste",
});
export const ExpenseDateSchema = z.record(DateSchema, ExpenseValueDateSchema);

export type ExpenseType = z.infer<typeof ExpenseSchema>;
export type ExpenseDateType = z.infer<typeof ExpenseDateSchema>;
export type NewExpenseType = z.infer<typeof NewExpenseSchema>;
export type ExpenseValueDateType = z.infer<typeof ExpenseValueDateSchema>;
export type ExpenseSingleValueDateType = z.infer<
  typeof ExpenseSingleValueDateSchema
>;
