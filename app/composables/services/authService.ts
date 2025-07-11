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

export const useAuthService = () => {
  const { $api } = useNuxtApp();
  console.log($api);
  return {
    login: ({ username, password }: LoginRequestType) =>
      $api.post({
        url: "login",
        body: { username, password },
        schema: LoginResponseSchema,
      }) as Promise<LoginResponseType>,

    register: (data: FormData) =>
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
