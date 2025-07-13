<script setup lang="ts">
import BaseSection from "~/components/ui-kit/BaseSection.vue";
import PaiementCardComponent from "~/components/ui-kit/ExpenseCardComponent.vue";
import {
  formatDateISO,
  formatDayMonth,
  getCurrentMonthStartDate,
  getFirstDayOfMonth,
  getFirstDayOfYear,
} from "@/utils/date";
import { DatePicker } from "primevue";
import Day from "./DayBudget.vue";
import { useGroupsStore } from "@/stores/groupStore";

const { group } = storeToRefs(useGroupsStore());
const currentDate = ref<Date | null>(null);
const currentMonth = ref<Date>(getCurrentMonthStartDate());

// Query
const {
  expensesByMonthAndGroup: expenses,
  refetchByMonthAndGroup: refetchExpenses,
} = useExpenseMutation();

watch(currentMonth, () => {
  refetchExpenses();
});
</script>

<template>
  <BaseSection label="Les dépenses passés et futurs">
    <div class="flex flex-col gap-10">
      <DatePicker
        v-model="currentDate"
        inline
        panel-class="border-none shadow rounded-xl "
        class="w-full"
        @month-change="
          (e) => {
            currentMonth = getFirstDayOfMonth(new Date(e.year, e.month - 1));
          }
        "
        @year-change="
          (e: any) => {
            currentMonth = getFirstDayOfYear(new Date(e.year, e.month - 1));
          }
        "
      >
        <template v-if="expenses" #date="slotProps">
          <Day
            :date="slotProps.date"
            :expenses-in-day="
              expenses?.[
                `${slotProps.date.year}/${slotProps.date.day}/${slotProps.date.month}`
              ]
            "
            :color="group?.color ?? 'gray'"
          />
        </template>
      </DatePicker>
      <BaseSection
        v-if="
          group &&
          currentDate &&
          expenses &&
          expenses[formatDateISO(currentDate)]
        "
        :label="formatDayMonth(currentDate)"
      >
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <PaiementCardComponent
            v-for="expense in expenses[formatDateISO(currentDate)]"
            :key="expense.id"
            :expense="expense"
            :group-id="group?.id"
          />
        </div>
      </BaseSection>
    </div>
  </BaseSection>
</template>
