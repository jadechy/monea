import { CategorySchema, type CategoryType } from "~/types/categoryType";
import type { GroupType } from "~/types/groupType";

export const fetchCategory = (categoryId: CategoryType["id"]) =>
  fetchJson({
    url: `categories/${categoryId}`,
    schema: CategorySchema,
  });

export const fetchCategoryByGroup = (groupeId: GroupType["id"]) =>
  fetchJson({
    url: `categories/${groupeId}/list`,
    schema: CategorySchema.array(),
  });
