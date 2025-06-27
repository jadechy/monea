import { z } from "zod"
import { UserSchema } from "./user"
import { ColorSchema } from "./color"

export const GroupSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  createdAt: z.string(),
  type: z.enum(["personnal", "occasional", "daily"]),
  creator: UserSchema.shape.id,
  picture: z.string().max(255).nullable(),
  color: ColorSchema,
})

export const NewGroupSchema = GroupSchema.pick({
  name: true,
  type: true,
  color: true,
})
export type GroupType = z.infer<typeof GroupSchema>
export type NewGroupType = z.infer<typeof NewGroupSchema>

export type FindGroup = Pick<GroupType, "id" | "name" | "color">
