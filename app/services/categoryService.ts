import { CategorySchema, type CategoryType } from "../../../app/types/categoryType"
import type { GroupType } from "../../../app/types/groupType"
import { fetchJson } from "../../../app/utils/apiMethods"

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
