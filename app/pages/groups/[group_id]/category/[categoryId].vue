<script setup lang="ts">
import { useGroupsStore } from "@/stores/groupStore";

// Props
const route = useRoute();
const { group_id, category_id, expense_id } = route.params as {
  group_id: string;
  category_id?: string;
  expense_id?: string;
};

// Group
const { group } = storeToRefs(useGroupsStore());
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
