<script setup lang="ts">
  import { getCurrentMonthString } from "@/utils/date"
  import { truncateToTenth } from "@/utils/number"
  import { fetchBudgetGroup, fetchBudgetGroupDateRemaining } from "@/services/budgetService"
  import type { ErrorType } from "@/types/errors"
  import { computed, ref } from "vue"
  import { useQuery } from "@tanstack/vue-query"

  const props = withDefaults(
    defineProps<{ space_id: number; label?: string; initialBudget?: boolean }>(),
    {
      label: "Budget restant",
    },
  )
  const error = ref<ErrorType>(null)
  const budgetQuery = useQuery({
    queryKey: [
      "budget",
      props.initialBudget ? "initial" : "remaining",
      props.space_id,
      getCurrentMonthString(),
    ],
    queryFn: () => {
      return props.initialBudget
        ? fetchBudgetGroup(props.space_id, getCurrentMonthString())
        : fetchBudgetGroupDateRemaining(props.space_id, getCurrentMonthString())
    },
    enabled: !!props.space_id,
  })
  const budget = computed(() => budgetQuery.data.value?.amount ?? 0)
  const isLoading = computed(() => budgetQuery.isLoading.value)
</script>
<template>
  <div class="item block lg:flex w-fit lg:w-1/4 rounded-lg">
    <p>{{ label }}</p>
    <p class="font-bold">{{ truncateToTenth(budget) }}€</p>
  </div>
</template>
