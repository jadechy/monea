<script setup lang="ts">
import { getCurrentMonthIsoString } from "@/utils/date";
import { truncateToTenth } from "@/utils/number";
import {
  fetchBudgetCategoryDateRemaining,
  fetchBudgetGroup,
  fetchBudgetGroupDateRemaining,
} from "~/composables/services/budgetService";
import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import type { GroupType } from "@/types/groupType";
import type { CategoryType } from "@/types/categoryType";

const { group_id, label, initialBudget, category } = withDefaults(
  defineProps<{
    group_id: GroupType["id"];
    label?: string;
    initialBudget?: boolean;
    category?: CategoryType;
  }>(),
  {
    label: "Budget restant",
  }
);
const query = () => {
  if (category)
    return {
      key: ["budget", "remaining", "category", Number(category.id)],
      fn: fetchBudgetCategoryDateRemaining(
        category.id,
        getCurrentMonthIsoString()
      ),
    };
  else if (initialBudget)
    return {
      key: ["budget", "initial", Number(group_id)],
      fn: fetchBudgetGroup(group_id, getCurrentMonthIsoString()),
    };
  else
    return {
      key: ["budget", "remaining", Number(group_id)],
      fn: fetchBudgetGroupDateRemaining(group_id, getCurrentMonthIsoString()),
    };
};
const budgetQuery = useQuery({
  queryKey: query().key,
  queryFn: () => query().fn,
});
const budget = computed(() => budgetQuery.data.value?.amount ?? 0);
</script>
<template>
  <div class="item block lg:flex w-fit lg:w-1/4 rounded-lg">
    <p>{{ label }}</p>
    <p class="font-bold">{{ truncateToTenth(budget) }}€</p>
  </div>
</template>
