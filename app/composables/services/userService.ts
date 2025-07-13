import { z } from "zod";
import { UserUploadResponseSchema } from "~/types/user";
import type { UserEditType, UserUploadResponseType } from "~/types/user";

export type EditUserResponseType = {
  message: string;
};

export const useUserService = () => {
  const { $api } = useNuxtApp();

  const editUser = (user: UserEditType): Promise<EditUserResponseType> =>
    $api.patch({
      url: `users/edit`,
      body: user,
      schema: z.object({ message: z.string() }),
    });

  const uploadFile = (user: FormData): Promise<UserUploadResponseType> =>
    $api.upload({
      url: `users/picture`,
      body: user,
      schema: UserUploadResponseSchema,
    });

  const deleteUser = (): Promise<{ message: string } | null> =>
    $api.delete({
      url: `users`,
      schema: z.object({ message: z.string() }).or(z.null()),
    });

  return {
    editUser,
    uploadFile,
    deleteUser,
  };
};
