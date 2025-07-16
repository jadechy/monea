import { z } from "zod";
const isAdult = (date: Date | string) => {
  if (typeof date === "string") date = new Date(date);
  const now = new Date();
  const age = now.getFullYear() - date.getFullYear();
  const hasHadBirthdayThisYear =
    now.getMonth() > date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate());

  return hasHadBirthdayThisYear ? age >= 18 : age > 18;
};
export const UserSchema = z.object({
  id: z.number({
    message: "L'identifiant est requis",
    invalid_type_error: "L'identifiant doit être un nombre",
  }),
  username: z
    .string({
      message: "Le nom d'utilisateur est requis",
    })
    .min(3, {
      message: "Le nom d'utilisateur doit contenir au moins 3 caractères",
    })
    .max(50, {
      message: "Le nom d'utilisateur ne doit pas dépasser 50 caractères",
    }),

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

  birthday: z.preprocess(
    (val) => {
      if (typeof val === "string" || val instanceof Date) return new Date(val);
      return val;
    },
    z.date().refine(isAdult, {
      message: "Vous devez avoir au moins 18 ans",
    })
  ),

  password: z.string({
    message: "Le mot de passe est requis",
  }),

  roles: z
    .array(z.enum(["ROLE_USER", "ROLE_ADMIN", "ROLE_MANAGER"]), {
      required_error: "Le rôle est requis",
      invalid_type_error: "Le rôle doit être une liste de chaînes",
    })
    .min(1, { message: "Au moins un rôle est requis" }),

  createdAt: z.preprocess(
    (val) => {
      if (typeof val === "string" || val instanceof Date) {
        const d = new Date(val);
        return isNaN(d.getTime()) ? undefined : d;
      }
      return undefined;
    },
    z.date({ message: "La date de création doit être une date valide" })
  ),

  picture: z.string().nullable().optional(),
  resetToken: z.string().nullable(),
  invitationToken: z.string().optional(),
  googleId: z.string().optional(),
});

export const UserUploadResponseSchema = z.object({
  picture: z.string(),
});
export const UserEditSchema = UserSchema.pick({
  username: true,
  lastname: true,
  name: true,
  email: true,
  picture: true,
  birthday: true,
});

export const UserDTOSchema = UserSchema.pick({
  id: true,
  username: true,
  picture: true,
});

export type UserDTOType = z.infer<typeof UserDTOSchema>;
export type UserType = z.infer<typeof UserSchema>;
export type UserEditType = z.infer<typeof UserEditSchema>;
export type UserUploadResponseType = z.infer<typeof UserUploadResponseSchema>;
