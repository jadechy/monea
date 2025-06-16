<script setup lang="ts">
  import { categories } from "@/data/categoryLabel"
  import AllPaiementsLayout from "@/layouts/AllExpensesLayout.vue"
  import { getCurrentMonth } from "@/lib/date"
  import { fetchBudgetGroupRemaining } from "@/services/budgetService"
  import type { AmountType } from "@/types/budget"
  import type { ErrorType } from "@/types/error"
  import { onMounted, ref } from "vue"

  const props = defineProps<{ space_id: string; category_id: string }>()

  const category = categories.find((category) => category.label === props.category_id)
  const amount = ref<AmountType>(0)
  const error = ref<ErrorType>(null)
  // onMounted(async () => {
  //   const result = await fetchBudgetGroupRemaining(Number(props.space_id), getCurrentMonth())
  //   if (result === null) {
  //     error.value = "Erreur lors du chargement des utilisateurs"
  //   } else {
  //     amount.value = result.amount
  //   }
  // })
</script>

<template>
  <AllPaiementsLayout
    :amount="amount"
    :space_id="space_id"
    :subHeader="{
      label: category?.label ?? 'error',
      routeName: 'budget_space',
      params: { space_id: space_id },
      color: category?.color,
    }"
  />
</template>
