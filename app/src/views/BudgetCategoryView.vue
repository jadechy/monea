<script setup lang="ts">
  import AllPaiementsLayout from "@/layouts/AllExpensesLayout.vue"
  import { fetchCategory } from "@/services/categoryService"
  import { fetchAllExpenseByCategory } from "@/services/expenseService"
  import { useGroupStore } from "@/stores/groupStore"
  import type { CategoryType } from "@/types/category"
  import type { ErrorType } from "@/types/error"
  import type { ExpenseDateType } from "@/types/expense"
  import type { GroupType } from "@/types/group"
  import { onMounted, ref } from "vue"

  const props = defineProps<{ space_id: GroupType["id"]; category_id: CategoryType["id"] }>()
  const groupStore = useGroupStore()
  const group = ref<GroupType>()
  const category = ref<CategoryType>()
  const error = ref<ErrorType>(null)
  const expenses = ref<ExpenseDateType>()

  onMounted(async () => {
    const resultCategory = await fetchCategory(props.category_id)
    const groupResult = await groupStore.getGroupById(props.space_id)
    const resultExpenses = await fetchAllExpenseByCategory(props.category_id)

    if (resultCategory === null || resultExpenses === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      category.value = resultCategory
      group.value = groupResult
      expenses.value = resultExpenses
    }
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
