import { CategoryInOtherSchema } from "@/types/category"
import { GroupSchema } from "@/types/groupType"
import { MemberInGroupSchema } from "@/types/member"
import { type UserType } from "@/types/user"
import { fetchJson } from "@/utils/apiMethods"
import { z } from "zod"

export const FetchGroupByUserSchema = GroupSchema.extend({
  members: MemberInGroupSchema.array().optional(),
  categories: CategoryInOtherSchema.array().optional(),
})
export type FetchGroupByUserType = z.infer<typeof FetchGroupByUserSchema>

export const getGroupByUser = async (userId: UserType["id"]) =>
  fetchJson({
    url: `groupes/${userId}/list`,
    schema: FetchGroupByUserSchema.array(),
  })
