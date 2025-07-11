<script setup lang="ts">
import { useGroupsStore } from "@/stores/groupStore";
import { useQuery } from "@tanstack/vue-query";
import { computed } from "vue";
import { getAllExpensesByGroup } from "~/services/expenseService";
import type { GroupType } from "~/types/groupType";

// Props
const { group_id } = defineProps<{ group_id: GroupType["id"] }>();
// Group
const { groupById } = useGroupsStore();
const group = computed(() => groupById({ id: group_id }));
// Query
const { data: expenses } = useQuery({
  queryKey: ["expenses-by-group", group_id],
  queryFn: () => getAllExpensesByGroup(group_id),
  enabled: !!group_id,
});
</script>

<template>
  <AllExpensesDisplay
    v-if="group"
    :group="group"
    :subHeader="{
      label: group?.name ?? 'error',
      routeName: 'groups',
      color: group?.color,
    }"
    action-button
    have-category
    :expenses-date="expenses"
  />
</template>
