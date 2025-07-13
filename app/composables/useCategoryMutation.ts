import { useQuery } from "@tanstack/vue-query";
import { useCategoryService } from "./services/categoryService";

export const useCategoryMutation = () => {
  const route = useRoute();
  const { group_id, category_id } = route.params as {
    group_id: string;
    category_id?: string;
  };
  const { fetchCategoryByGroup, fetchCategory } = useCategoryService();

  const { data: categories } = useQuery({
    queryKey: ["categories-by-group", group_id],
    queryFn: () => fetchCategoryByGroup(group_id),
  });
  const { data: category } = useQuery({
    queryKey: ["category", category_id],
    queryFn: () => fetchCategory(category_id!),
    enabled: category_id !== undefined,
  });
  return { categories, category };
};
