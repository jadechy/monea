import {
  LoginResponseSchema,
  MeSchema,
  RegisterResponseSchema,
  type LoginRequestType,
  type RefreshToken,
} from "~/types/authType";

export const loginAuth = ({ username, password }: LoginRequestType) =>
  postJson({
    url: "login",
    body: { username, password },
    schema: LoginResponseSchema,
  });

export const registerAuth = (data: FormData) =>
  postJson({
    url: "register",
    body: data,
    schema: RegisterResponseSchema,
  });

export const me = () =>
  fetchJson({
    url: `me`,
    schema: MeSchema,
  });
export const postRefreshToken = ({ refresh_token }: RefreshToken) =>
  postJson({
    url: "token/refresh",
    body: { refresh_token: refresh_token },
    schema: LoginResponseSchema,
  });
