<script setup lang="ts">
  import { getCurrentMonthString } from "@/utils/date"
  import { truncateToTenth } from "@/utils/number"
  import { fetchBudgetGroup, fetchBudgetGroupDateRemaining } from "@/services/budgetService"
  import { computed } from "vue"
  import { useQuery } from "@tanstack/vue-query"
  import type { GroupType } from "@/types/groupType"

  const { space_id, label, initialBudget } = withDefaults(
    defineProps<{ space_id: GroupType["id"]; label?: string; initialBudget?: boolean }>(),
    {
      label: "Budget restant",
    },
  )

  const budgetQuery = useQuery({
    queryKey: ["budget", initialBudget ? "initial" : "remaining", Number(space_id)],
    queryFn: () => {
      return initialBudget
        ? fetchBudgetGroup(space_id, getCurrentMonthString())
        : fetchBudgetGroupDateRemaining(space_id, getCurrentMonthString())
    },
  })
  const budget = computed(() => budgetQuery.data.value?.amount ?? 0)
</script>
<template>
  <div class="item block lg:flex w-fit lg:w-1/4 rounded-lg">
    <p>{{ label }}</p>
    <p class="font-bold">{{ truncateToTenth(budget) }}€</p>
  </div>
</template>
