import { z } from "zod"
import type { CreateUserInputType, UserType } from "./user"
export const TokenSchema = z.string()
export const LoginResponseSchema = z.object({
  token: TokenSchema,
  refreshToken: TokenSchema,
})

export type LoginResponseType = z.infer<typeof LoginResponseSchema>
export type TokenType = z.infer<typeof TokenSchema>
export type LoginRequestType = {
  username: UserType["username"]
  password: CreateUserInputType["password"]
}
