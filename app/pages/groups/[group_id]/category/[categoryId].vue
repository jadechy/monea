<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

import { fetchCategory } from "@/services/categoryService";
import { getExpensesByCategory } from "@/services/expenseService";

import { useGroupsStore } from "@/stores/groupStore";
import type { CategoryType } from "~/types/categoryType";
import type { GroupType } from "~/types/groupType";

// Props
const props = defineProps<{
  group_id: GroupType["id"];
  category_id: CategoryType["id"];
}>();

// Group
const { groupById } = useGroupsStore();
const group = computed(() => groupById({ id: props.group_id }));

// Queries
const { data: category } = useQuery({
  queryKey: ["category", props.category_id],
  queryFn: () => fetchCategory(props.category_id),
});

const { data: expenses } = useQuery({
  queryKey: ["expenses-by-group-category", props.category_id],
  queryFn: () => getExpensesByCategory(props.category_id),
});
</script>

<template>
  <AllPaiementsLayout
    v-if="group"
    :group="group"
    :subHeader="{
      label: category?.label ?? 'error',
      routeName: 'budget_group',
      params: { group_id: group_id },
      color: category?.color,
    }"
    :expensesDate="expenses"
    :category="category"
  />
</template>
