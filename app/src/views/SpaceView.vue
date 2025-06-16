<script setup lang="ts">
  import AllPaiementsLayout from "@/layouts/AllExpensesLayout.vue"
  import { fetchBudgetGroupRemaining } from "@/services/budgetService"
  import { getCurrentMonth } from "@/services/getCurrentMonth"
  import { fetchGroup } from "@/services/groupService"
  import type { AmountType } from "@/types/budget"
  import type { ErrorType } from "@/types/error"
  import type { GroupType } from "@/types/group"
  import { onMounted, ref } from "vue"
  const props = defineProps<{ id: string }>()
  const group = ref<GroupType>()
  const amount = ref<AmountType>()
  const error = ref<ErrorType>(null)
  onMounted(async () => {
    const resultGroup = await fetchGroup(props.id)
    const resultBudget = await fetchBudgetGroupRemaining(Number(props.id), getCurrentMonth)
    if (resultBudget === null || resultGroup === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      amount.value = resultBudget.amount
      group.value = resultGroup
    }
  })
</script>

<template>
  <AllPaiementsLayout
    v-if="group"
    :amount="amount ?? 0"
    :group="group"
    :subHeader="{
      label: group?.name ?? 'error',
      routeName: 'home',
      color: group?.color,
    }"
    action-button
    have-category
  />
</template>
