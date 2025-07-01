<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import PaiementCardComponent from "@/components/ExpenseCardComponent.vue"
  import {
    getCurrentMonthIsoString,
    formatDateISO,
    formatDayMonth,
    getCurrentMonthStartDate,
  } from "@/utils/date"
  import type { GroupType } from "@/types/groupType"
  import { DatePicker } from "primevue"
  import { ref, computed, watch } from "vue"
  import { fetchBudgetRemainingInDay } from "@/services/budgetService"
  import { getMonthlyExpensesByGroup } from "@/services/expenseService"
  import { truncateToTenth } from "@/utils/number"
  import { useQuery } from "@tanstack/vue-query"
  import Day from "./Day.vue"
  import { useGroupsStore } from "@/stores/groupStore"

  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()
  const { groupById } = useGroupsStore()
  const group = computed(() => groupById({ id: space_id }))
  const currentDate = ref<Date | null>(null)
  const currentMonth = ref<Date>(getCurrentMonthStartDate())

  const currentMonthFormatted = computed(() => formatDateISO(currentMonth.value))
  console.log(group)
  // Query
  const { data: expenses, refetch: refetchExpenses } = useQuery({
    queryKey: computed(() => ["expenses", space_id, currentMonth.value]),
    queryFn: () => getMonthlyExpensesByGroup(space_id, currentMonth.value),
    enabled: computed(() => !!space_id),
  })

  const { data: monthData, refetch: refetchBudget } = useQuery({
    queryKey: computed(() => ["budget-remaining-in-day", space_id, currentMonthFormatted.value]),
    queryFn: () => fetchBudgetRemainingInDay(space_id, currentMonthFormatted.value),
    enabled: computed(() => !!space_id),
  })

  watch(currentMonth, () => {
    refetchExpenses()
    refetchBudget()
  })
</script>

<template>
  <BaseSection label="Les dépenses passés et futurs">
    <div class="flex flex-col gap-10">
      <DatePicker
        v-model="currentDate"
        inline
        v-on:month-change="
          (e) => {
            currentMonth = getCurrentMonthIsoString(new Date(e.year, e.month - 1))
          }
        "
        v-on:year-change="
          (e: any) => {
            currentMonth = getCurrentMonthIsoString(new Date(e.year, e.month - 1))
          }
        "
        panel-class="border-none shadow rounded-xl "
        class="w-full"
      >
        <template #date="slotProps" v-if="expenses">
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
              monthData[formatDateISO(currentDate)]
                ? truncateToTenth(monthData[formatDateISO(currentDate)].remaining)
                : 0
            }}€
          </p>
        </div>
        <!-- <RemainingBudget label="Budget restant à date" :space_id="group.id" /> -->
      </div>

      <BaseSection
        :label="formatDayMonth(currentDate)"
        v-if="currentDate && expenses && expenses[formatDateISO(currentDate)]"
      >
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <PaiementCardComponent
            v-for="expense in expenses[formatDateISO(currentDate)]"
            :key="expense.id"
            :expense="expense"
          />
        </div>
      </BaseSection>
    </div>
  </BaseSection>
</template>
