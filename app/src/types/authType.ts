import { z } from "zod"
import { UserSchema } from "./user"
// ** Register **
/// Request
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

/// Response
export const RegisterResponseSchema = z.object({ message: z.string() })
export type RegisterResponseType = z.infer<typeof RegisterResponseSchema>

export const TokenSchema = z.string()
export type TokenType = z.infer<typeof TokenSchema>

// ** Login **
/// Request
export const LoginRequestSchema = z.object({
  username: UserSchema.shape.username,
  password: UserSchema.shape.password,
})

export type LoginRequestType = z.infer<typeof LoginRequestSchema>

/// Response
export const LoginResponseSchema = z.object({
  token: TokenSchema,
  refreshToken: TokenSchema.optional(),
})

export type LoginResponseType = z.infer<typeof LoginResponseSchema>

// ** Me **
export const MeSchema = UserSchema.pick({
  id: true,
  email: true,
  name: true,
  lastname: true,
  // birthday: UserSchema.shape.birthday,
  username: true,
  picture: true,
  roles: true,
})
export type MeType = z.infer<typeof MeSchema>
