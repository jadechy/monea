import { z } from "zod"
import { UserSchema } from "./user"
import { GroupSchema } from "./groupType"
import { dateSchema } from "./date"

export const MemberSchema = z.object({
  role: z.enum(["creator", "admin", "viewer", "member", "rejected", "waiting_validation"]),
  addOn: dateSchema,
  groupe: GroupSchema,
  individual: UserSchema,
})
export const MemberInGroupSchema = z.object({
  memberId: z.number(),
  role: MemberSchema.shape.role,
  addOn: dateSchema,
})
export type MemberType = z.infer<typeof MemberSchema>
export type MemberInGroupType = z.infer<typeof MemberInGroupSchema>
