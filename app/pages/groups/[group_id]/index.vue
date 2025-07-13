<script setup lang="ts">
import { useGroupsStore } from "@/stores/groupStore";
import { useSeo } from "~/composables/useSeo";
const { group } = storeToRefs(useGroupsStore());
watch(
  () => group.value,
  (val) => {
    if (val) {
      useSeo({
        title: `Dépenses du groupe ${val.name}`,
        description: `Consultez et gérez les dépenses du groupe ${val.name}.`,
        image: val.picture ?? undefined,
      });
    }
  },
  { immediate: true }
);
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
