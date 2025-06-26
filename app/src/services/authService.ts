import {
  LoginResponseSchema,
  MeSchema,
  RegisterResponseSchema,
  type LoginRequestType,
  type RegisterRequestType,
} from "@/types/auth.type"
import { fetchJson, postJson } from "@/utils/apiMethods"

export const loginAuth = async ({ username, password }: LoginRequestType) => {
  return await postJson({
    url: "login",
    body: { username, password },
    schema: LoginResponseSchema,
  })
}

export const registerAuth = async ({
  username,
  password,
  confirmPassword,
  name,
  email,
  lastname,
}: RegisterRequestType) => {
  return await postJson({
    url: "register",
    body: { username, password, confirmPassword, name, lastname, email },
    schema: RegisterResponseSchema,
  })
}

export const me = async () => {
  return await fetchJson({
    url: `me`,
    schema: MeSchema,
  })
}
