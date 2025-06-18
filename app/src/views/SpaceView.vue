<script setup lang="ts">
  import AllPaiementsLayout from "@/layouts/AllExpensesLayout.vue"
  import { fetchAllExpenseByGroup } from "@/services/expenseService"
  import { useGroupStore } from "@/stores/groupStore"
  import type { ErrorType } from "@/types/error"
  import type { ExpenseDateType } from "@/types/expense"
  import type { GroupType } from "@/types/group"
  import { onMounted, ref } from "vue"
  const props = defineProps<{ id: GroupType["id"] }>()
  const groupStore = useGroupStore()
  const group = ref<GroupType>()
  const expenses = ref<ExpenseDateType>()
  const error = ref<ErrorType>(null)

  onMounted(async () => {
    const groupResult = await groupStore.getGroupById(props.id)
    group.value = groupResult
    const resultExpenses = await fetchAllExpenseByGroup(props.id)
    if (resultExpenses === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      expenses.value = resultExpenses
    }
  })
</script>

<template>
  <AllPaiementsLayout
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
