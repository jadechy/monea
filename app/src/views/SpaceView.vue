<script setup lang="ts">
  import { spacesData } from "@/data/spaces"
  import AllPaiementsLayout from "@/layouts/AllPaiementsLayout.vue"
  import { fetchBudgetGroupRemaining } from "@/services/budgetService"
  import { getCurrentMonth } from "@/services/getCurrentMonth"
  import type { AmountType } from "@/types/budget"
  import type { ErrorType } from "@/types/error"
  import { onMounted, ref } from "vue"
  const props = defineProps<{ id: string }>()
  const space = spacesData.find((space) => space.id === props.id)
  const amount = ref<AmountType>()
  const error = ref<ErrorType>(null)
  onMounted(async () => {
    const result = await fetchBudgetGroupRemaining(Number(props.id), getCurrentMonth)
    if (result === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      amount.value = result.amount
    }
  })
</script>

<template>
  <AllPaiementsLayout
    :amount="amount"
    :space_id="id"
    :subHeader="{
      label: space?.label ?? 'error',
      routeName: 'home',
      color: space?.color,
    }"
    action-button
    have-category
  />
</template>
