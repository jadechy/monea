import {
  LoginResponseSchema,
  MeSchema,
  RegisterResponseSchema,
  type LoginRequestType,
  type LoginResponseType,
  type MeType,
  type RefreshToken,
  type RegisterResponseType,
} from "~/types/authType";
import type { UserEditType } from "~/types/user";

export const useAuthService = () => {
  const { $api } = useNuxtApp();
  return {
    login: ({ username, password }: LoginRequestType) =>
      $api.post({
        url: "login",
        body: { username, password },
        schema: LoginResponseSchema,
      }) as Promise<LoginResponseType>,

    register: (data: UserEditType) =>
      $api.post({
        url: "register",
        body: data,
        schema: RegisterResponseSchema,
      }) as Promise<RegisterResponseType>,

    me: () =>
      $api.get({
        url: "me",
        schema: MeSchema,
      }) as Promise<MeType>,
  };
};
