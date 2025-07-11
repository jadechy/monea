import { z } from "zod";

export type EditUserResponseType = {
  message: string;
};

export const editUser = (user: FormData): Promise<EditUserResponseType> =>
  patchJson({
    url: `users/edit`,
    body: user,
    schema: z.object({ message: z.string() }),
  });
