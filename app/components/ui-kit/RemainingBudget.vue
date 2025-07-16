<script setup lang="ts">
import { getCurrentMonthIsoString } from "@/utils/date";
import { truncateToTenth } from "@/utils/number";

import { useQuery } from "@tanstack/vue-query";
import { useBudgetService } from "~/composables/services/budgetService";

const { label = "Budget restant", initialBudget } = defineProps<{
  label?: string;
  initialBudget?: boolean;
}>();

const route = useRoute();
const { group_id, category_id } = route.params as {
  group_id: string;
  category_id?: string;
};
const {
  fetchBudgetGroup,
  fetchBudgetGroupDateRemaining,
  fetchBudgetCategoryDateRemaining,
} = useBudgetService();
const query = () => {
  if (category_id)
    return {
      key: ["budget", "remaining", "category", category_id],
      fn: fetchBudgetCategoryDateRemaining(
        category_id,
        getCurrentMonthIsoString()
      ),
    };
  else if (initialBudget)
    return {
      key: ["budget", "initial", group_id],
      fn: fetchBudgetGroup(group_id, getCurrentMonthIsoString()),
    };
  else
    return {
      key: ["budget", "remaining", group_id],
      fn: fetchBudgetGroupDateRemaining(group_id, getCurrentMonthIsoString()),
    };
};
const { data: test } = useQuery({
  queryKey: query().key,
  queryFn: () => query().fn,
});
</script>
<template>
  <div class="item block lg:flex w-fit lg:w-1/4 rounded-lg">
    <p>{{ label }}</p>
    <p class="font-bold">{{ truncateToTenth(test?.amount ?? 100) }}€</p>
  </div>
</template>
