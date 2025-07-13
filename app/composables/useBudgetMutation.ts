import { ref,  computed } from "vue";
import type {Ref} from "vue";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import type { NewBudgetType } from "~/types/budgetType";
import { useBudgetService } from "./services/budgetService";

export const useBudget = (year?: Ref<Date | null>) => {
  const router = useRouter();
  const route = useRoute();
  const { group_id } = route.params as {
    group_id: string;
  };
  const queryClient = useQueryClient();

  // Assurer qu'on a toujours une valeur de date
  if (!year) {
    year = ref(getCurrentMonthStartDate());
  }

  const {
    fetchBudgetRemainingInYear,
    fetchAllBudgetCategoriesByGroup,
    fetchAllRemainingBudgetCategoriesByGroup,
    postBudgets,
  } = useBudgetService();

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

  const currentYearDate = computed(() => {
    return year?.value ? getFirstDayOfYear(year.value) : new Date();
  });

  const currentMonthDate = computed(() =>
    year?.value ? getFirstDayOfMonth(year.value) : new Date()
  );

  const { data: remainingBudgetInYear, refetch: refetchRemainingBudgetInYear } =
    useQuery({
      queryKey: ["budgetRemainingInYear", group_id, year],
      queryFn: () =>
        fetchBudgetRemainingInYear(
          group_id,
          formatDateISO(currentYearDate.value)
        ),
      enabled: computed(() => !!group_id && !!year?.value),
    });

  const { data: budgetList, refetch: refetchBudget } = useQuery({
    queryKey: ["budgetCategories", group_id, currentMonthDate],
    queryFn: () => {
      return fetchAllBudgetCategoriesByGroup(group_id, currentMonthDate.value);
    },
    enabled: computed(() => !!group_id && !!year?.value),
  });

  const { data: remainingBudgetCategories } = useQuery({
    queryKey: ["budgetRemainingCategories", group_id, currentMonthDate],
    queryFn: () =>
      fetchAllRemainingBudgetCategoriesByGroup(
        group_id,
        currentMonthDate.value
      ),
    enabled: computed(() => !!group_id && !!year?.value),
  });

  const postBudgetsMutation = useMutation({
    mutationFn: (data: NewBudgetType) => postBudgets(data),
    onSuccess: async () => {
      if (!year?.value) return;

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
      router.push(`/groups/${group_id}/budget`);
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
    remainingBudget: remainingBudgetCategories,
    budgetList,
    refetchBudget,
    remainingBudgetInYear,
    getRemainingStyle,
  };
};
