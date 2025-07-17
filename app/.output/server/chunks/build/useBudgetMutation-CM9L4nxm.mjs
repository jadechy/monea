import { ref, computed } from 'vue';
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query';
import { u as useBudgetService } from './budgetService-CfQ7_k9B.mjs';
import { a as useRouter, g as useRoute } from './server.mjs';
import { b as getCurrentMonthStartDate, d as getFirstDayOfYear, g as getFirstDayOfMonth, f as formatDateISO } from './date-Bb1fHl5x.mjs';

const useBudget = (year) => {
  const router = useRouter();
  const route = useRoute();
  const { group_id } = route.params;
  const queryClient = useQueryClient();
  if (!year) {
    year = ref(getCurrentMonthStartDate());
  }
  const {
    fetchBudgetRemainingInYear,
    fetchAllBudgetCategoriesByGroup,
    fetchAllRemainingBudgetCategoriesByGroup,
    postBudgets
  } = useBudgetService();
  const months = {
    "01": "Janvier",
    "02": "F\xE9vrier",
    "03": "Mars",
    "04": "Avril",
    "05": "Mai",
    "06": "Juin",
    "07": "Juillet",
    "08": "Ao\xFBt",
    "09": "Septembre",
    "10": "Octobre",
    "11": "Novembre",
    "12": "D\xE9cembre"
  };
  const currentYearDate = computed(() => {
    return (year == null ? void 0 : year.value) ? getFirstDayOfYear(year.value) : /* @__PURE__ */ new Date();
  });
  const currentMonthDate = computed(
    () => (year == null ? void 0 : year.value) ? getFirstDayOfMonth(year.value) : /* @__PURE__ */ new Date()
  );
  const { data: remainingBudgetInYear, refetch: refetchRemainingBudgetInYear } = useQuery({
    queryKey: ["budgetRemainingInYear", group_id, year],
    queryFn: () => fetchBudgetRemainingInYear(
      group_id,
      formatDateISO(currentYearDate.value)
    ),
    enabled: computed(() => !!group_id && !!(year == null ? void 0 : year.value))
  });
  const { data: budgetList, refetch: refetchBudget } = useQuery({
    queryKey: ["budgetCategories", group_id, currentMonthDate],
    queryFn: () => {
      return fetchAllBudgetCategoriesByGroup(group_id, currentMonthDate.value);
    },
    enabled: computed(() => !!group_id && !!(year == null ? void 0 : year.value))
  });
  const { data: remainingBudgetCategories } = useQuery({
    queryKey: ["budgetRemainingCategories", group_id, currentMonthDate],
    queryFn: () => fetchAllRemainingBudgetCategoriesByGroup(
      group_id,
      currentMonthDate.value
    ),
    enabled: computed(() => !!group_id && !!(year == null ? void 0 : year.value))
  });
  const postBudgetsMutation = useMutation({
    mutationFn: (data) => postBudgets(data),
    onSuccess: async () => {
      if (!(year == null ? void 0 : year.value)) return;
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: [
            "budgetRemainingCategories",
            group_id,
            getFirstDayOfMonth(year.value)
          ]
        }),
        queryClient.invalidateQueries({
          queryKey: [
            "budgetCategories",
            group_id,
            getFirstDayOfMonth(year.value)
          ]
        }),
        queryClient.invalidateQueries({
          queryKey: ["budget", "initial", Number(group_id)]
        }),
        queryClient.invalidateQueries({
          queryKey: ["budget", "remaining", Number(group_id)]
        })
      ]);
      router.push(`/groups/${group_id}/budget`);
    }
  });
  const getRemainingStyle = (remaining) => {
    if (remaining === 0) return "text-dark-700";
    if (remaining > 0) return "text-green-700";
    return "text-red-700";
  };
  return {
    refetch: refetchRemainingBudgetInYear,
    months,
    postBudgetsMutation,
    remainingBudget: remainingBudgetCategories,
    budgetList,
    refetchBudget,
    remainingBudgetInYear,
    getRemainingStyle
  };
};

export { useBudget as u };
//# sourceMappingURL=useBudgetMutation-CM9L4nxm.mjs.map
