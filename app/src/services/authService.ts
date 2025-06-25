import { postJson } from "@/utils/api"
import {
  LoginResponseSchema,
  RegisterResponseSchema,
  type LoginRequestType,
  type RegisterRequestType,
} from "@/types/auth"

export const loginAuth = async ({ username, password }: LoginRequestType) => {
  try {
    return await postJson({
      url: "login",
      body: { username, password },
      responseSchema: LoginResponseSchema,
    })
  } catch (error) {
    console.error("Erreur lors du post de l'utilisateur :", error)
    return null
  }
}
export const registerAuth = async ({
  username,
  password,
  confirmPassword,
  name,
  email,
  lastname,
}: RegisterRequestType) => {
  try {
    return await postJson({
      url: "register",
      body: { username, password, confirmPassword, name, lastname, email },
      responseSchema: RegisterResponseSchema,
    })
  } catch (error) {
    console.error("Erreur lors du post de l'utilisateur :", error)
    return null
  }
}
