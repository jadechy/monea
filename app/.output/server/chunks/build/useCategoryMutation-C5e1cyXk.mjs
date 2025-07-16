import { useQuery } from '@tanstack/vue-query';
import { f as useRoute, h as useNuxtApp, i as CategorySchema } from './server.mjs';

const useCategoryService = () => {
  const { $api } = useNuxtApp();
  const fetchCategory = (categoryId) => $api.get({
    url: `categories/${categoryId}`,
    schema: CategorySchema
  });
  const fetchCategoryByGroup = (groupId) => $api.get({
    url: `categories/${groupId}/list`,
    schema: CategorySchema.array()
  });
  return {
    fetchCategory,
    fetchCategoryByGroup
  };
};
const useCategoryMutation = () => {
  const route = useRoute();
  const { group_id, category_id } = route.params;
  const { fetchCategoryByGroup, fetchCategory } = useCategoryService();
  const { data: categories } = useQuery({
    queryKey: ["categories-by-group", group_id],
    queryFn: () => fetchCategoryByGroup(group_id)
  });
  const { data: category } = useQuery({
    queryKey: ["category", category_id],
    queryFn: () => fetchCategory(category_id),
    enabled: category_id !== void 0
  });
  return { categories, category };
};

export { useCategoryMutation as u };
//# sourceMappingURL=useCategoryMutation-C5e1cyXk.mjs.map
