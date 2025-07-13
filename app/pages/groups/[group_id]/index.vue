<script setup lang="ts">
import { useGroupsStore } from "@/stores/groupStore";
import AllExpensesDisplay from "~/components/layout/AllExpensesDisplay.vue";
const { group } = storeToRefs(useGroupsStore());
useSeo({
  title: `Dépenses du groupe ${group.value?.name}`,
  description: `Consultez et gérez les dépenses du groupe ${group.value?.name}.`,
  image: group.value?.picture ?? undefined,
});

// Query
const { expenses } = useExpenseMutation();
</script>

<template>
  <AllExpensesDisplay
    :subHeader="{
      label: group?.name ?? 'error',
      to: '/groups',
      color: group?.color,
    }"
    action-button
    have-category
    :expenses-date="expenses"
  />
</template>
