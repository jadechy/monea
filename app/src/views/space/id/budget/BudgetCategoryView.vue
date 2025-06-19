<script setup lang="ts">
  import { useGroups } from "@/composables/useGroups"
  import AllPaiementsLayout from "@/layouts/AllExpensesLayout.vue"
  import { fetchCategory } from "@/services/categoryService"
  import { fetchAllExpenseByCategory } from "@/services/expenseService"
  import type { CategoryType } from "@/types/category"
  import type { ErrorType } from "@/types/error"
  import type { ExpenseDateType } from "@/types/expense"
  import type { GroupType } from "@/types/group"
  import { computed, onMounted, ref } from "vue"

  const { space_id, category_id } = defineProps<{
    space_id: GroupType["id"]
    category_id: CategoryType["id"]
  }>()
  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: space_id }))

  const category = ref<CategoryType>()
  const error = ref<ErrorType>(null)
  const expenses = ref<ExpenseDateType>()

  onMounted(async () => {
    const resultCategory = await fetchCategory(category_id)
    const resultExpenses = await fetchAllExpenseByCategory(category_id)

    if (resultCategory === null || resultExpenses === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      category.value = resultCategory
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
