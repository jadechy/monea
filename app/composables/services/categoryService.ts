import { CategorySchema, type CategoryType } from "~/types/categoryType";

export const fetchCategory = (categoryId: string): Promise<CategoryType> =>
  fetchJson({
    url: `categories/${categoryId}`,
    schema: CategorySchema,
  });

export const fetchCategoryByGroup = (
  groupeId: string
): Promise<CategoryType[]> =>
  fetchJson({
    url: `categories/${groupeId}/list`,
    schema: CategorySchema.array(),
  });
