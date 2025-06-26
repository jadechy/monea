import { fetchJson, postJson } from "@/utils/apiClient"
import { CategoryInOtherSchema } from "@/types/category"
import { GroupSchema } from "@/types/group"
import { MemberInGroupSchema } from "@/types/member"
import { type UserType } from "@/types/user"
import { z } from "zod"

export const FetchGroupByUserSchema = GroupSchema.extend({
  members: MemberInGroupSchema.array().optional(),
  categories: CategoryInOtherSchema.array().optional(),
})
export type FetchGroupByUserType = z.infer<typeof FetchGroupByUserSchema>

export const fetchGroupByUser = async (userId: UserType["id"]) => {
  try {
    return await fetchJson({
      url: `groupes/${userId}/list`,
      schema: FetchGroupByUserSchema.array(),
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
