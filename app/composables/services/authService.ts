import {
  LoginResponseSchema,
  MeSchema,
  RegisterResponseSchema,
  ForgotResponseSchema,
  ResetResponseSchema,
} from "~/types/authType";
import type {
  LoginRequestType,
  LoginResponseType,
  MeType,
  ForgotRequestType,
  ForgotResponseType,
  ResetRequestType,
  ResetResponseType,
  RegisterResponseType,
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
        schema: LoginResponseSchema,
      }) as Promise<LoginResponseType>,

    me: () =>
      $api.get({
        url: "me",
        schema: MeSchema,
      }) as Promise<MeType>,

    forgot: ({ email }: ForgotRequestType) =>
      $api.post({
        url: "forgot",
        body: { email },
        schema: ForgotResponseSchema,
      }) as Promise<ForgotResponseType>,

    reset: ({ password, repeatPassword, resetToken }: ResetRequestType) =>
      $api.post({
        url: "reset",
        body: { password, repeatPassword, resetToken },
        schema: ResetResponseSchema,
      }) as Promise<ResetResponseType>,
  };
};
