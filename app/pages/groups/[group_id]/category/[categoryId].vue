<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";

import { useGroupsStore } from "@/stores/groupStore";
import type { CategoryType } from "~/types/categoryType";
import type { GroupType } from "~/types/groupType";

// Props
const route = useRoute();
const { group_id, category_id, expense_id } = route.params as {
  group_id: string;
  category_id?: string;
  expense_id?: string;
};

// Group
const { groupById } = useGroupsStore();
const group = computed(() => groupById({ id: group_id }));
const { category } = useCategoryMutation();
const { expensesByCategory: expenses } = useExpenseMutation();
// Queries
</script>

<template>
  <AllExpensesDisplay
    v-if="group"
    :group="group"
    :subHeader="{
      label: category?.label ?? 'error',
      to: `/groups/${group_id}/budget`,
      color: category?.color,
    }"
    :expensesDate="expenses"
    :category="category"
  />
</template>
