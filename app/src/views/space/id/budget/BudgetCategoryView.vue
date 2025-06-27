<script setup lang="ts">
  import { useQuery } from "@tanstack/vue-query"
  import { computed } from "vue"

  import AllPaiementsLayout from "@/components/Display/AllExpensesDisplay.vue"
  import { useGroups } from "@/composables/useGroups"
  import { fetchCategory } from "@/services/categoryService"
  import { getExpensesByGroupAndCategory } from "@/services/expenseService"

  import type { CategoryType } from "@/types/categoryType"
  import type { GroupType } from "@/types/groupType"

  // Props
  const props = defineProps<{
    space_id: GroupType["id"]
    category_id: CategoryType["id"]
  }>()

  // Group
  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: props.space_id }))

  // Queries
  const { data: category } = useQuery({
    queryKey: ["category", props.category_id],
    queryFn: () => fetchCategory(props.category_id),
  })

  const { data: expenses } = useQuery({
    queryKey: ["expenses-by-group-category", props.category_id],
    queryFn: () => getExpensesByGroupAndCategory(props.category_id),
  })
</script>

<template>
  <AllPaiementsLayout
    v-if="group"
    :group="group"
    :subHeader="{
      label: category?.label ?? 'error',
      routeName: 'budget_space',
      params: { space_id: space_id },
      color: category?.color,
    }"
    :expensesDate="expenses"
  />
</template>
