<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import PaiementCardComponent from "@/components/ExpenseCardComponent.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import Day from "@/layouts/BudgetForecast/Day.vue"
  import { formatDateForApi, formatDateToDayMonth } from "@/utils/date"
  import {
    fetchBudgetRemainingInMonth,
    type FetchBudgetRemainingInMonthType,
    type FetchBudgetRemainingInMonthValueType,
  } from "@/services/budgetService"
  import { fetchCategoryByGroup } from "@/services/categoryService"
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
  const error = ref<ErrorType>(null)
  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: space_id }))

  const categories = ref<CategoryType[]>([])
  const selectedCategory = defineModel<CategoryType>("selectedCategory")
  type MonthsType = FetchBudgetRemainingInMonthType
  const monthNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  const year = ref<MonthsType>({})
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
    const resultCategories = await fetchCategoryByGroup(space_id)

    const resultBudgetInMonth = await fetchBudgetRemainingInMonth(space_id, "2025")

    if (resultBudgetInMonth === null || resultCategories === null) {
      return (error.value = "Erreur lors du chargement des utilisateurs")
    }
    monthNumber.map((number) => {
      const currentResult =
        resultBudgetInMonth[`2025-${number}`] !== undefined
          ? resultBudgetInMonth[`2025-${number}`]
          : {
              remaining: 0,
              categories: [],
            }
      return (year.value[`2025-${number}`] = {
        remaining: currentResult.remaining,
        categories: currentResult.categories,
      })
    })
    categories.value = resultCategories
  })

  const getRemaining = (value: FetchBudgetRemainingInMonthValueType) => {
    if (selectedCategory.value) {
      const cat = value.categories.find((c) => c.id === selectedCategory.value?.id)
      return cat?.remaining ?? 0
    }
    return value.remaining
  }

  const getRemainingClass = (value: FetchBudgetRemainingInMonthValueType) => {
    const remaining = getRemaining(value)
    if (remaining === 0) return "text-dark-700"
    if (remaining > 0) return "text-green-700"
    return "text-red-700"
  }
</script>

<template>
  <SubHeader label="Budgets" :color="group?.color" routeName="home" />
  <div class="flex flex-col gap-10" v-if="year">
    <BaseSection label="Budget restant mois par mois">
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
        <div v-for="([month, value], i) in Object.entries(year)" :key="i" class="item">
          <p>{{ month }}</p>

          <p :class="getRemainingClass(value)">{{ getRemaining(value) }}€</p>
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
