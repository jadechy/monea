<script setup lang="ts">
  import SubHeader from "@/components/SubHeader.vue"
  import type { GroupType } from "@/types/group"
  import { computed } from "vue"
  import { useGroups } from "@/composables/useGroups"
  import Year from "@/components/BudgetForecast/Year.vue"
  import Month from "@/components/BudgetForecast/Month.vue"

  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()
  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: space_id }))
</script>

<template>
  <SubHeader label="Budgets" :color="group?.color" routeName="home" />
  <div class="flex flex-col gap-10">
    <Year :space_id="space_id" />
    <Month :group="group" v-if="group" />
  </div>
</template>
