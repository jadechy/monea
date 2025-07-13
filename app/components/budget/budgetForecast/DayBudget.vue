<script setup lang="ts">
  import { getColor } from "@/utils/getColor"
  import type { DatePickerDateSlotOptions } from "primevue"
  import type { ExpenseValueDateType } from "@/types/expenseType"
  import type { ColorType } from "@/types/color"
  defineProps<{
    date: DatePickerDateSlotOptions
    expensesInDay?: ExpenseValueDateType
    color: ColorType
  }>()
</script>
<template>
  <p :class="expensesInDay && expensesInDay.length > 0 && getColor({ color, text: 700 }).text">
    {{ date.day }}
  </p>
</template>
