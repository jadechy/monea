import { z } from "zod"
const isAdult = (date: Date) => {
  const now = new Date()
  const age = now.getFullYear() - date.getFullYear()
  const hasHadBirthdayThisYear =
    now.getMonth() > date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate())

  return hasHadBirthdayThisYear ? age >= 18 : age > 18
}
export const UserSchema = z.object({
  id: z.number({
    message: "L'identifiant est requis",
    invalid_type_error: "L'identifiant doit être un nombre",
  }),
  username: z
    .string({
      message: "Le nom d'utilisateur est requis",
    })
    .min(3, { message: "Le nom d'utilisateur doit contenir au moins 3 caractères" })
    .max(50, { message: "Le nom d'utilisateur ne doit pas dépasser 50 caractères" }),

  name: z
    .string({
      message: "Le prénom est requis",
    })
    .min(3, { message: "Le prénom ne peut pas être vide" }),

  lastname: z
    .string({
      message: "Le nom est requis",
    })
    .min(3, { message: "Le nom doit être supérieur à 3 caractères" }),

  email: z
    .string({
      message: "L'adresse email est requise",
    })
    .email({ message: "L'adresse email n'est pas valide" }),

  birthday: z
    .date({
      message: "La date de naissance est requise",
      invalid_type_error: "La date de naissance doit être une date valide",
    })
    .refine(isAdult, {
      message: "Vous devez avoir au moins 18 ans",
    }),

  password: z
    .string({
      message: "Le mot de passe est requis",
    })
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" })
    .regex(/[A-Z]/, { message: "Le mot de passe doit contenir au moins une majuscule" })
    .regex(/[a-z]/, { message: "Le mot de passe doit contenir au moins une minuscule" })
    .regex(/[0-9]/, { message: "Le mot de passe doit contenir au moins un chiffre" }),

  role: z
    .array(z.string(), {
      required_error: "Le rôle est requis",
      invalid_type_error: "Le rôle doit être une liste de chaînes",
    })
    .min(1, { message: "Au moins un rôle est requis" }),

  createdAt: z
    .string({
      required_error: "La date de création est requise",
    })
    .datetime({ message: "La date de création doit être une date ISO valide" }),

  picture: z.string().nullable(),

  resetToken: z.string().nullable(),
})

export const UserInOtherSchema = z.object({
  userId: UserSchema.shape.id,
  username: UserSchema.shape.username,
  picture: UserSchema.shape.picture,
})

export type UserInOtherType = z.infer<typeof UserInOtherSchema>
export type UserType = z.infer<typeof UserSchema>
