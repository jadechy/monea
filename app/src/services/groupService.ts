import { CategorySchema } from "@/types/categoryType"
import { GroupSchema, type GroupType, type NewGroupType } from "@/types/groupType"
import { MemberInGroupSchema } from "@/types/memberType"
import { type UserType } from "@/types/user"
import { fetchJson, patchJson, postJson } from "@/utils/apiMethods"
import { z } from "zod"

export const FetchGroupByUserSchema = GroupSchema.extend({
  members: MemberInGroupSchema.array().optional(),
  categories: CategorySchema.array().optional(),
})
export type FetchGroupByUserType = z.infer<typeof FetchGroupByUserSchema>

export const getGroupByUser = (userId: UserType["id"]) =>
  fetchJson({
    url: `groupes/${userId}/list`,
    schema: FetchGroupByUserSchema.array(),
  })

export const postGroup = (group: NewGroupType) =>
  postJson({
    url: "groupes",
    body: group,
    schema: z.object({ message: z.string() }),
  })
export const editGroup = (groupId: GroupType["id"], group: NewGroupType) =>
  patchJson({
    url: `groupes/${groupId}`,
    body: group,
    schema: z.object({ message: z.string() }),
  })
