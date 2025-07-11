<script setup lang="ts">
import { useGroupsStore } from "@/stores/groupStore";
import { computed } from "vue";
import AllExpensesDisplay from "~/components/layout/AllExpensesDisplay.vue";

// Props
const route = useRoute();
const group_id = route.params.group_id as string;
const { groupById } = useGroupsStore();
const group = computed(() => groupById({ id: group_id }));
// Query
const { expenses } = useExpenseMutation();
</script>

<template>
  <AllExpensesDisplay
    v-if="group"
    :group="group"
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
