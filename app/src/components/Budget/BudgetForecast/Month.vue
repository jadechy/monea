<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import PaiementCardComponent from "@/components/ExpenseCardComponent.vue"
  import {
    firstDayOfMonth,
    formatDateForApi,
    formatDateToDayMonth,
    getCurrentMonthDate,
  } from "@/utils/date"
  import type { ErrorType } from "@/types/error"
  import type { ExpenseDateType } from "@/types/expense"
  import type { GroupType } from "@/types/group"
  import { DatePicker } from "primevue"
  import { onMounted, ref, watch } from "vue"
  import {
    fetchBudgetRemainingInDay,
    type FetchBudgetRemainingInMonthType,
  } from "@/services/budgetService"
  import { fetchAllExpenseByGroupAndMonth } from "@/services/expenseService"
  import { truncateToTenth } from "@/utils/number"

  const error = ref<ErrorType>(null)

  const currentDate = ref<Date | null>(null)

  const currentMonth = ref<Date>(new Date())
  const expenses = ref<ExpenseDateType>()
  const monthData = ref<FetchBudgetRemainingInMonthType>({})
  const { group } = defineProps<{ group: GroupType }>()

  onMounted(async () => {
    const resultExpenses = await fetchAllExpenseByGroupAndMonth(group.id, getCurrentMonthDate())
    const resultBudgetInDay = await fetchBudgetRemainingInDay(
      group.id,
      formatDateForApi(getCurrentMonthDate()),
    )
    if (resultBudgetInDay === null || resultExpenses === null) {
      return (error.value = "Erreur lors du chargement des utilisateurs")
    }
    monthData.value = resultBudgetInDay
    expenses.value = resultExpenses
  })
  watch(currentMonth, async (newMonth) => {
    if (!newMonth) return
    const resultExpenses = await fetchAllExpenseByGroupAndMonth(group.id, newMonth)
    const resultBudgetInDay = await fetchBudgetRemainingInDay(group.id, formatDateForApi(newMonth))
    if (resultBudgetInDay === null || resultExpenses === null) {
      return (error.value = "Erreur lors du chargement des utilisateurs")
    }
    monthData.value = resultBudgetInDay
    expenses.value = resultExpenses
  })
</script>
<template>
  <BaseSection label="Les dépenses passés et futurs" v-if="group">
    <div class="flex flex-col gap-10">
      <DatePicker
        v-if="expenses"
        v-model="currentDate"
        inline
        v-on:month-change="
          (e) => {
            currentMonth = firstDayOfMonth(new Date(e.year, e.month - 1))
          }
        "
        v-on:year-change="
          (e: any) => {
            currentMonth = firstDayOfMonth(new Date(e.year, e.month - 1))
          }
        "
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
      <div class="flex flex-col gap-2 sm:flex-row justify-between items-center" v-if="currentDate">
        <div class="item block lg:flex w-fit lg:w-1/4 rounded-lg">
          <p>Budget restant à date</p>
          <p class="font-bold">
            {{
              monthData[formatDateForApi(currentDate)]
                ? truncateToTenth(monthData[formatDateForApi(currentDate)].remaining)
                : 0
            }}€
          </p>
        </div>
        <!-- <RemainingBudget label="Budget restant à date" :space_id="group.id" /> -->
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
</template>
