import { z } from "zod"
import { ColorSchema } from "./color"
import { NewCategorySchema } from "./categoryType"
import { dateSchema } from "./date"
import { MemberRoleEnum, MemberStatusEnum } from "./memberEnumType"
export const GroupTypeEnum = z.enum(["personnal", "occasional", "daily"])
export const GroupSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  createdAt: dateSchema,
  type: GroupTypeEnum,
  picture: z.string().max(255).nullable(),
  color: ColorSchema,
  userStatus: MemberStatusEnum.optional(),
  userRole: MemberRoleEnum.optional(),
  author: z.string().max(255).nullable(),
})

export const NewGroupSchema = GroupSchema.pick({
  name: true,
  type: true,
  color: true,
}).extend({ categories: NewCategorySchema.array() })
export type GroupType = z.infer<typeof GroupSchema>
export type NewGroupType = z.infer<typeof NewGroupSchema>

export type FindGroup = Pick<GroupType, "id" | "name" | "color">
