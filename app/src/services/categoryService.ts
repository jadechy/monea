import { fetchJson } from "@/utils/api"
import { CategorySchema, type CategoryType } from "@/types/category"
import type { GroupType } from "@/types/group"

export const fetchCategory = async (categoryId: CategoryType["id"]) => {
  try {
    return await fetchJson({
      url: `categories/${categoryId}`,
      schema: CategorySchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}

export const fetchCategoryByGroup = async (groupeId: GroupType["id"]) => {
  try {
    return await fetchJson({
      url: `categories/${groupeId}/list`,
      schema: CategorySchema.array(),
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
