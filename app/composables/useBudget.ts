import {
  fetchAllBudgetCategoriesByGroup,
  fetchAllRemainingBudgetCategoriesByGroup,
  fetchBudgetRemainingInYear,
  postBudgets,
} from "~/composables/services/budgetService";
import { ref, type Ref } from "vue";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import type { GroupType } from "~/types/groupType";
import type { NewBudgetType } from "~/types/budgetType";
const router = useRouter();
export const useBudget = (group_id: string, year?: Ref<Date>) => {
  const queryClient = useQueryClient();
  if (!year) {
    year = ref(getCurrentMonthStartDate());
  }

  const months: Record<string, string> = {
    "01": "Janvier",
    "02": "Février",
    "03": "Mars",
    "04": "Avril",
    "05": "Mai",
    "06": "Juin",
    "07": "Juillet",
    "08": "Août",
    "09": "Septembre",
    "10": "Octobre",
    "11": "Novembre",
    "12": "Décembre",
  };
  const { data: remainingBudgetInYear, refetch: refetchRemainingBudgetInYear } =
    useQuery({
      queryKey: ["budgetRemainingInYear", group_id, year],
      queryFn: () =>
        fetchBudgetRemainingInYear(
          group_id,
          formatDateISO(getFirstDayOfYear(year.value))
        ),
      enabled: !!group_id,
    });
  const { data: budgetList, refetch: refetchBudget } = useQuery({
    queryKey: ["budgetCategories", group_id, getFirstDayOfMonth(year.value)],
    queryFn: () => {
      return fetchAllBudgetCategoriesByGroup(
        group_id,
        getFirstDayOfMonth(year.value)
      );
    },
    enabled: !!group_id,
  });
  const { data: remainingBudget } = useQuery({
    queryKey: [
      "budgetRemainingCategories",
      group_id,
      getFirstDayOfMonth(year.value),
    ],
    queryFn: () => {
      return fetchAllRemainingBudgetCategoriesByGroup(
        group_id,
        getFirstDayOfMonth(year.value)
      );
    },
    enabled: !!group_id,
  });

  const postBudgetsMutation = useMutation({
    mutationFn: (data: NewBudgetType) => postBudgets(data),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: [
            "budgetRemainingCategories",
            group_id,
            getFirstDayOfMonth(year.value),
          ],
        }),
        queryClient.invalidateQueries({
          queryKey: [
            "budgetCategories",
            group_id,
            getFirstDayOfMonth(year.value),
          ],
        }),
        queryClient.invalidateQueries({
          queryKey: ["budget", "initial", Number(group_id)],
        }),
        queryClient.invalidateQueries({
          queryKey: ["budget", "remaining", Number(group_id)],
        }),
      ]);
      router.push({ name: "budget_group", params: { group_id: group_id } });
    },
  });
  const getRemainingStyle = (remaining: number) => {
    if (remaining === 0) return "text-dark-700";
    if (remaining > 0) return "text-green-700";
    return "text-red-700";
  };
  return {
    refetch: refetchRemainingBudgetInYear,
    months,
    postBudgetsMutation,
    remainingBudget,
    budgetList,
    refetchBudget,
    remainingBudgetInYear,
    getRemainingStyle,
  };
};
