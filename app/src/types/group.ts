import { z } from "zod"
import { UserSchema } from "./user"
import { ColorSchema } from "./color"
import { DateSchema } from "./date"

export const GroupSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  createdAt: z.string(),
  type: z.string().max(255),
  creator: UserSchema.shape.id,
  picture: z.string().max(255).nullable(),
  color: ColorSchema,
})

export const NewGroupSchema = z.object({
  name: GroupSchema.shape.name,
  type: GroupSchema.shape.type,
  color: GroupSchema.shape.color,
})
export type GroupType = z.infer<typeof GroupSchema>
export type NewGroupType = z.infer<typeof NewGroupSchema>

export type FindGroup = {
  id: GroupType["id"]
  name: GroupType["name"]
  color: GroupType["color"]
}
