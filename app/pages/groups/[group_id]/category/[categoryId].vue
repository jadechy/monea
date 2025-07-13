<script setup lang="ts">
import { useGroupsStore } from "@/stores/groupStore";
import { useSeo } from "~/composables/useSeo";

// Props
const route = useRoute();
const { group_id } = route.params as {
  group_id: string;
};

// Group
const { group } = storeToRefs(useGroupsStore());
const { category } = useCategoryMutation();
const { expensesByCategory: expenses } = useExpenseMutation();
useSeo({
  title: `Dépenses de la catégorie "${category.value?.label}"`,
  description: `Consultez toutes les dépenses enregistrées dans la catégorie "${category.value?.label}" pour suivre précisément votre budget au sein du groupe ${group.value?.name}.`,
  ogTitle: `Suivi des dépenses - ${category.value?.label}`,
  ogDescription: `Visualisez et analysez les dépenses liées à la catégorie "${category.value?.label}" du groupe ${group.value?.name}. Gérez votre budget efficacement.`,
});
// Queries
</script>

<template>
  <AllExpensesDisplay
    v-if="group && category"
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
