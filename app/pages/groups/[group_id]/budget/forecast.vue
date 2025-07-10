<script setup lang="ts">
import { computed } from "vue";
import { useGroupsStore } from "@/stores/groupStore";
import type { GroupType } from "~/types/groupType";

const { group_id } = defineProps<{ group_id: GroupType["id"] }>();
const { groupById } = useGroupsStore();
const group = computed(() => groupById({ id: group_id }));
</script>

<template>
  <SubHeader
    label="Récap budgets"
    :color="group?.color"
    routeName="budget_group"
    :params="{
      group_id: group_id,
    }"
  />
  <div class="flex flex-col gap-10">
    <Year :group_id="group_id" />
    <Month :group_id="group_id" />
  </div>
</template>
