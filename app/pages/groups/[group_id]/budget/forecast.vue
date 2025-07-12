<script setup lang="ts">
import { computed } from "vue";
import { useGroupsStore } from "@/stores/groupStore";
const route = useRoute();
const { group_id } = route.params as {
  group_id: string;
};
const { groupById } = useGroupsStore();
const group = computed(() => groupById({ id: group_id }));
</script>

<template>
  <SubHeader
    label="Récap budgets"
    :color="group?.color"
    :to="`/groups/${group_id}/budget`"
  />
  <div class="flex flex-col gap-10">
    <YearBudget :group_id="group_id" />
    <MonthBudget :group_id="group_id" />
  </div>
</template>
