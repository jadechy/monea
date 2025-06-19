<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import PaiementCardComponent from "@/components/ExpenseCardComponent.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import Day from "@/layouts/BudgetForecast/Day.vue"
  import { formatDateForApi, formatDateToDayMonth } from "@/utils/date"
  import { fetchBudgetGroupDateRemaining } from "@/services/budgetService"
  import { fetchCategoryByGroup } from "@/services/categoryService"
  import { fetchAllExpenseByGroup } from "@/services/expenseService"
  import type { AmountType } from "@/types/budget"
  import type { CategoryType } from "@/types/category"
  import type { ErrorType } from "@/types/error"
  import type { ExpenseDateType } from "@/types/expense"
  import type { GroupType } from "@/types/group"
  import { DatePicker, Select } from "primevue"
  import { computed, onMounted, ref } from "vue"
  import { useGroups } from "@/composables/useGroups"
  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()

  const currentDate = ref<Date | null>(null)
  const expenses = ref<ExpenseDateType>()
  const amountRemaining = ref<AmountType[]>([])
  const error = ref<ErrorType>(null)
  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: space_id }))

  const categories = ref<CategoryType[]>([])
  const selectedCategory = defineModel<CategoryType>("selectedCategory")

  const months = ref<
    {
      label: string
      amount: number
      // categories: {
      //   id: CategoryType["id"]
      //   color: CategoryType["color"]
      //   label: CategoryType["label"]
      //   amount: number
      // }[]
    }[]
  >([])

  const monthLabels = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ]

  onMounted(async () => {
    const resultExpenses = await fetchAllExpenseByGroup(space_id)
    const resultCategories = await fetchCategoryByGroup(space_id)
    const resultAmountRemaing = []
    const monthsData: { label: string; amount: number }[] = []

    for (let i = 1; i <= 12; i++) {
      const paddedMonth = i.toString().padStart(2, "0")
      const result = await fetchBudgetGroupDateRemaining(space_id, `2025-${paddedMonth}-01`)
      resultAmountRemaing.push(result?.amount ?? 0)

      const monthExpenses = Object.values(resultExpenses || {})
        .flat()
        .filter((expense) => {
          const date = new Date(expense.spentAt)
          return date.getMonth() === i - 1
        })
      const total = monthExpenses.reduce((sum, e) => sum + e.amount, 0)

      monthsData.push({
        label: monthLabels[i - 1],
        amount: total,
      })
    }

    if (
      resultExpenses === null ||
      resultAmountRemaing.some((amount) => amount === null || amount === undefined) ||
      resultCategories === null
    ) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      expenses.value = resultExpenses
      amountRemaining.value = resultAmountRemaing
      months.value = monthsData
      categories.value = resultCategories
    }
  })
</script>

<template>
  <SubHeader label="Budgets" :color="group?.color" routeName="home" />
  <div class="flex flex-col gap-10">
    <BaseSection label="Budget mois par mois">
      <template #header>
        <Select
          editable
          showClear
          v-model="selectedCategory"
          :options="categories"
          optionLabel="label"
          placeholder="Choisir une catégorie"
          class="ml-auto md:w-56"
          :class="[`bg-${selectedCategory?.color}-100`, `hover:bg-${selectedCategory?.color}-50`]"
          :labelClass="['capitalize', `text-${selectedCategory?.color}-800`]"
        />
      </template>
      <section class="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-1">
        <div v-for="month in months" :key="month.label" class="item">
          <p>{{ month.label }}</p>
          <p>{{ month.amount }}€</p>
        </div>
      </section>
    </BaseSection>
    <BaseSection label="Les dépenses passés et futurs" v-if="group">
      <div class="flex flex-col gap-10">
        <DatePicker
          v-if="expenses"
          v-model="currentDate"
          inline
          panel-class="border-none shadow rounded-xl "
          class="w-full"
        >
          <template #date="slotProps">
            <Day
              :date="slotProps.date"
              :expensesInDay="expenses['2025-05-05']"
              :color="group?.color ?? 'gray'"
            />
          </template>
        </DatePicker>
        <div
          class="flex flex-col gap-2 sm:flex-row justify-between items-center"
          v-if="currentDate"
        >
          <RemainingBudget label="Budget restant à date" :space_id="group.id" />
        </div>

        <BaseSection
          :label="formatDateToDayMonth(currentDate)"
          v-if="currentDate && expenses && expenses[formatDateForApi(currentDate)]"
        >
          <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <PaiementCardComponent
              v-for="expense in expenses[formatDateForApi(currentDate)]"
              :key="expense.id"
              :expense="expense"
            />
          </div>
        </BaseSection>
      </div>
    </BaseSection>
  </div>
</template>
