import { z } from "zod";

export type EditUserResponseType = {
  message: string;
};

export const useUserService = () => {
  const { $api } = useNuxtApp();

  const editUser = (user: FormData): Promise<EditUserResponseType> =>
    $api.patch({
      url: `users/edit`,
      body: user,
      schema: z.object({ message: z.string() }),
    });

  return {
    editUser,
  };
};
