import { z } from "zod"
import { UserSchema } from "./user"
export const RegisterRequestSchema = z.object({
  email: UserSchema.shape.email,
  name: UserSchema.shape.name,
  lastname: UserSchema.shape.lastname,
  birthday: UserSchema.shape.birthday,
  username: UserSchema.shape.username,
  picture: UserSchema.shape.picture,
  password: UserSchema.shape.password
    .min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" })
    .regex(/[A-Z]/, { message: "Le mot de passe doit contenir au moins une majuscule" })
    .regex(/[a-z]/, { message: "Le mot de passe doit contenir au moins une minuscule" })
    .regex(/[0-9]/, { message: "Le mot de passe doit contenir au moins un chiffre" }),
  confirmPassword: UserSchema.shape.password,
})
export type RegisterRequestType = z.infer<typeof RegisterRequestSchema>

export const TokenSchema = z.string()
export const LoginRequestSchema = z.object({
  username: UserSchema.shape.username,
  password: UserSchema.shape.password,
})

export type LoginRequestType = z.infer<typeof LoginRequestSchema>

export type TokenType = z.infer<typeof TokenSchema>

export const LoginResponseSchema = z.object({
  token: TokenSchema,
  refreshToken: TokenSchema.optional(),
})

export type LoginResponseType = z.infer<typeof LoginResponseSchema>
