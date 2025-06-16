import { fetchJson, postJson } from "@/lib/api"
import { CategorySchema } from "@/types/category"
import { GroupSchema, GroupDTOSchema } from "@/types/group"
import { type CreateUserInputType, type UserType } from "@/types/user"

export const createGroup = async (input: CreateUserInputType) => {
  try {
    return await postJson({ url: "users", body: input, responseSchema: GroupSchema })
  } catch (error) {
    console.error("Erreur lors du post de l'utilisateur :", error)
    return null
  }
}
export const fetchAllGroup = async () => {
  try {
    return await fetchJson({ url: "users", schema: GroupSchema.array() })
  } catch (error) {
    console.error("Erreur lors du fetch des utilisateurs :", error)
    return null
  }
}
export const fetchGroup = async (id: string) => {
  try {
    return await fetchJson({
      url: `groupes/${id}`,
      schema: GroupSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}

export const fetchGroupByUser = async (userId: UserType["id"]) => {
  try {
    return await fetchJson({
      url: `groupes/${userId}/list`,
      schema: GroupDTOSchema.array(),
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
