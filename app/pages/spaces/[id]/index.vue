<script setup lang="ts">
  import AllExpensesLayout from "@/components/Display/AllExpensesDisplay.vue"
  import { getAllExpensesByGroup } from "@/services/expenseService"
  import { useGroupsStore } from "@/stores/groupStore"
  import type { GroupType } from "../../../../../app/types/groupType"
  import { useQuery } from "@tanstack/vue-query"
  import { computed } from "vue"

  // Props
  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()
  // Group
  const { groupById } = useGroupsStore()
  const group = computed(() => groupById({ id: space_id }))
  // Query
  const { data: expenses } = useQuery({
    queryKey: ["expenses-by-group", space_id],
    queryFn: () => getAllExpensesByGroup(space_id),
    enabled: !!space_id,
  })
</script>

<template>
  <AllExpensesLayout
    v-if="group"
    :group="group"
    :subHeader="{
      label: group?.name ?? 'error',
      routeName: 'spaces',
      color: group?.color,
    }"
    action-button
    have-category
    :expenses-date="expenses"
  />
</template>
