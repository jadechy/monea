<script setup lang="ts">
  import AllExpensesLayout from "@/components/Display/AllExpensesDisplay.vue"
  import { useGroups } from "@/composables/useGroups"
  import { getAllExpensesByGroup } from "@/services/expenseService"
  import type { GroupType } from "@/types/groupType"
  import { useQuery } from "@tanstack/vue-query"
  import { computed } from "vue"

  // Props
  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()

  // Group
  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: space_id }))

  // Query
  const { data: expenses } = useQuery({
    queryKey: ["expenses-by-group", space_id],
    queryFn: () => getAllExpensesByGroup(space_id),
  })
</script>

<template>
  <AllExpensesLayout
    v-if="group"
    :group="group"
    :subHeader="{
      label: group?.name ?? 'error',
      routeName: 'home',
      color: group?.color,
    }"
    action-button
    have-category
    :expenses-date="expenses"
  />
</template>
