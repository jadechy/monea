import { type UserEditType } from "../../../app/types/user"
import { patchJson } from "../../../app/utils/apiMethods"
import { z } from "zod"

export const editUser = (user: FormData) =>
  patchJson({
    url: `users/edit`,
    body: user,
    schema: z.object({ message: z.string() }),
  })
