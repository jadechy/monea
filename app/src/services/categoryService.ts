import { fetchJson } from "@/lib/api"
import { CategorySchema, type CategoryType } from "@/types/category"

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
