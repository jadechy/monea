import { CategorySchema } from "@/types/categoryType"
import { GroupSchema, type GroupType, type NewGroupType } from "@/types/groupType"
import { MemberDTOSchema } from "@/types/memberType"
import { type UserType } from "@/types/user"
import { deleteJson, fetchJson, patchJson, postJson } from "@/utils/apiMethods"
import { z } from "zod"

export const FetchGroupByUserSchema = GroupSchema.extend({
  members: MemberDTOSchema.array().optional(),
  categories: CategorySchema.array().optional(),
})
export type FetchGroupByUserType = z.infer<typeof FetchGroupByUserSchema>

export const getGroupByUser = () =>
  fetchJson({
    url: `groupes/list`,
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

export const deleteGroup = (groupId: GroupType["id"]) =>
  deleteJson({
    url: `groupes/${groupId}`,
    schema: z.any(),
  })
