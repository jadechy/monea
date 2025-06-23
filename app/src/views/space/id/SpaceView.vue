<script setup lang="ts">
  import AllExpensesLayout from "@/components/Display/AllExpensesDisplay.vue"
  import { useGroups } from "@/composables/useGroups"
  import { fetchAllExpenseByGroup } from "@/services/expenseService"
  import type { ErrorType } from "@/types/error"
  import type { ExpenseDateType } from "@/types/expense"
  import type { GroupType } from "@/types/group"
  import { computed, onMounted, ref } from "vue"
  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()

  const groupsStore = useGroups()
  const { groupById } = groupsStore
  const group = computed(() => groupById({ id: space_id }))

  const expenses = ref<ExpenseDateType>()
  const error = ref<ErrorType>(null)
  onMounted(async () => {
    const resultExpenses = await fetchAllExpenseByGroup(space_id)
    if (resultExpenses === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      expenses.value = resultExpenses
    }
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
