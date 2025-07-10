import { z } from "zod";

export const editUser = (user: FormData) =>
  patchJson({
    url: `users/edit`,
    body: user,
    schema: z.object({ message: z.string() }),
  });
