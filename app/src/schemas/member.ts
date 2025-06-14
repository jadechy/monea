import { z } from "zod"
import { UserSchema } from "./user"
import { GroupSchema } from "./group"

export const MemberSchema = z.object({
  role: z.string().max(255).nullable(),
  addOn: z.string().datetime().nullable(),
  groupe: GroupSchema,
  individual: UserSchema,
})
export type MemberType = z.infer<typeof MemberSchema>
