import { z } from "zod"
import { UserSchema } from "./user"

export const GroupSchema = z.object({
  id: z.number(),
  name: z.string().max(255).nullable(),
  createdAt: z.string().datetime().nullable(),
  type: z.string().max(255).nullable(),
  creator: UserSchema,
  picture: z.string().max(255).nullable(),
  color: z.enum(["pink", "red", "yellow", "orange", "blue", "purple"]),
})
export type GroupType = z.infer<typeof GroupSchema>
