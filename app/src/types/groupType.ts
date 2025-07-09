import { z } from "zod"
import { UserDTOSchema } from "./user"
import { ColorSchema } from "./color"
import { NewCategorySchema } from "./categoryType"
import { dateSchema } from "./date"
export const GroupTypeEnum = z.enum(["personnal", "occasional", "daily"])
export const GroupSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  createdAt: dateSchema,
  type: GroupTypeEnum,
  // creator: UserDTOSchema.op,
  picture: z.string().max(255).nullable(),
  color: ColorSchema,
})

export const NewGroupSchema = GroupSchema.pick({
  name: true,
  type: true,
  color: true,
}).extend({ categories: NewCategorySchema.array() })
export type GroupType = z.infer<typeof GroupSchema>
export type NewGroupType = z.infer<typeof NewGroupSchema>

export type FindGroup = Pick<GroupType, "id" | "name" | "color">
