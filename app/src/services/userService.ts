import { type UserEditType } from "@/types/user"
import { patchJson } from "@/utils/apiMethods"
import { z } from "zod"

export const editUser = (user: UserEditType) =>
  patchJson({
    url: `users/edit`,
    body: user,
    schema: z.object({ message: z.string() }),
  })
