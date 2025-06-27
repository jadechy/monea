import { CategorySchema, type CategoryType } from "@/types/category"
import type { GroupType } from "@/types/groupType"
import { fetchJson } from "@/utils/apiMethods"

export const fetchCategory = (categoryId: CategoryType["id"]) =>
  fetchJson({
    url: `categories/${categoryId}`,
    schema: CategorySchema,
  })

export const fetchCategoryByGroup = (groupeId: GroupType["id"]) =>
  fetchJson({
    url: `categories/${groupeId}/list`,
    schema: CategorySchema.array(),
  })
