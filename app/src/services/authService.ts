import {
  LoginResponseSchema,
  MeSchema,
  RegisterResponseSchema,
  type LoginRequestType,
  type RefreshToken,
  type RegisterRequestType,
} from "@/types/authType"
import { fetchJson, postJson } from "@/utils/apiMethods"

export const loginAuth = ({ username, password }: LoginRequestType) =>
  postJson({
    url: "login",
    body: { username, password },
    schema: LoginResponseSchema,
  })

export const registerAuth = ({
  username,
  password,
  confirmPassword,
  name,
  email,
  lastname,
  invitationToken
}: RegisterRequestType) =>
  postJson({
    url: "register",
    body: { username, password, confirmPassword, name, lastname, email, invitationToken },
    schema: RegisterResponseSchema,
  })

export const me = () =>
  fetchJson({
    url: `me`,
    schema: MeSchema,
  })
export const postRefreshToken = ({ refresh_token }: RefreshToken) =>
  postJson({
    url: "token/refresh",
    body: { refresh_token: refresh_token },
    schema: LoginResponseSchema,
  })
