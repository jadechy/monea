<script setup lang="ts">
  import SubHeader from "@/components/Header/SubHeader.vue"
  import type { GroupType } from "@/types/groupType"
  import { computed } from "vue"
  import { useGroups } from "@/composables/useGroups"
  import Year from "@/components/Budget/BudgetForecast/Year.vue"
  import Month from "@/components/Budget/BudgetForecast/Month.vue"

  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()
  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: space_id }))
</script>

<template>
  <SubHeader
    label="Budgets"
    :color="group?.color"
    routeName="budget_space"
    :params="{
      space_id: space_id,
    }"
  />
  <div class="flex flex-col gap-10">
    <Year :space_id="space_id" />
    <Month :space_id="space_id" />
  </div>
</template>
