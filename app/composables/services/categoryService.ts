import { CategorySchema, type CategoryType } from "~/types/categoryType";
import { z } from "zod";

export const useCategoryService = () => {
  const { $api } = useNuxtApp();

  const fetchCategory = (categoryId: string): Promise<CategoryType> =>
    $api.get({
      url: `categories/${categoryId}`,
      schema: CategorySchema,
    });

  const fetchCategoryByGroup = (groupId: string): Promise<CategoryType[]> =>
    $api.get({
      url: `categories/${groupId}/list`,
      schema: CategorySchema.array(),
    });

  return {
    fetchCategory,
    fetchCategoryByGroup,
  };
};
