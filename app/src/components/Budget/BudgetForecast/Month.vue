<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import PaiementCardComponent from "@/components/ExpenseCardComponent.vue"
  import {
    firstDayOfMonth,
    formatDateForApi,
    formatDateToDayMonth,
    getCurrentMonthDate,
  } from "@/utils/date"
  import type { GroupType } from "@/types/groupType"
  import { DatePicker } from "primevue"
  import { ref, computed, watch } from "vue"
  import { fetchBudgetRemainingInDay } from "@/services/budgetService"
  import { getMonthlyExpensesByGroup } from "@/services/expenseService"
  import { truncateToTenth } from "@/utils/number"
  import { useQuery } from "@tanstack/vue-query"

  const { group } = defineProps<{ group: GroupType }>()

  const currentDate = ref<Date | null>(null)
  const currentMonth = ref<Date>(getCurrentMonthDate())

  const currentMonthFormatted = computed(() => formatDateForApi(currentMonth.value))

  // Query pour les dépenses
  const { data: expenses, refetch: refetchExpenses } = useQuery({
    queryKey: computed(() => ["expenses", group.id, currentMonth.value]),
    queryFn: () => getMonthlyExpensesByGroup(group.id, currentMonth.value),
    enabled: computed(() => !!group.id && !!currentMonth.value),
  })

  // Query pour le budget
  const { data: monthData, refetch: refetchBudget } = useQuery({
    queryKey: computed(() => ["budgetByDay", group.id, currentMonthFormatted.value]),
    queryFn: () => fetchBudgetRemainingInDay(group.id, currentMonthFormatted.value),
    enabled: computed(() => !!group.id && !!currentMonth.value),
  })

  // Mettre à jour les données quand currentMonth change
  watch(currentMonth, () => {
    refetchExpenses()
    refetchBudget()
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
          <p class="font-bold" v-if="monthData">
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
