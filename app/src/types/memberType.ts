import { z } from "zod"
import { UserSchema } from "./user"
import { GroupSchema } from "./groupType"

export const MemberSchema = z.object({
  role: z.enum(["creator", "admin", "viewer", "member", "rejected", "waiting_validation"]),
  addOn: z.string().datetime().nullable(),
  groupe: GroupSchema,
  individual: UserSchema,
})
export const MemberInGroupSchema = z.object({
  memberId: z.number(),
  role: MemberSchema.shape.role,
  addOn: z.object({
    date: z.string(),
    timezone_type: z.number(),
    timezone: z.string(),
  }),
})
export type MemberType = z.infer<typeof MemberSchema>
export type MemberInGroupType = z.infer<typeof MemberInGroupSchema>
