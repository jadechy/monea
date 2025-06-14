import { z } from "zod"
import { UserSchema } from "./user"
import { ColorSchema } from "./color"

export const GroupSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  createdAt: z.string().datetime(),
  type: z.string().max(255),
  creator: UserSchema,
  picture: z.string().max(255).nullable(),
  color: ColorSchema,
})
export type GroupType = z.infer<typeof GroupSchema>

export type FindGroup = {
  id: GroupType["id"]
  name: GroupType["name"]
  color: GroupType["color"]
}
