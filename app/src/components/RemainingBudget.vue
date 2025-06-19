<script setup lang="ts">
  import { getCurrentMonthString } from "@/utils/date"
  import { truncateToTenth } from "@/utils/number"
  import { fetchBudgetGroup, fetchBudgetGroupDateRemaining } from "@/services/budgetService"
  import type { AmountType } from "@/types/budget"
  import type { ErrorType } from "@/types/error"
  import { onMounted, ref } from "vue"
  const error = ref<ErrorType>(null)

  const budget = ref<AmountType>()
  onMounted(async () => {
    const resultBudget = props.initialBudget
      ? await fetchBudgetGroup(Number(props.space_id), getCurrentMonthString())
      : await fetchBudgetGroupDateRemaining(Number(props.space_id), getCurrentMonthString())

    if (resultBudget === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      budget.value = resultBudget.amount
    }
  })
  const props = withDefaults(
    defineProps<{ space_id: number; label?: string; initialBudget?: boolean }>(),
    {
      label: "Budget restant",
    },
  )
</script>
<template>
  <div class="item block lg:flex w-fit lg:w-1/4 rounded-lg">
    <p>{{ label }}</p>
    <p class="font-bold">{{ truncateToTenth(budget ?? 0) }}€</p>
  </div>
</template>
