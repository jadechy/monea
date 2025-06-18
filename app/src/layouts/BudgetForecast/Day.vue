<script setup lang="ts">
  import { getColor } from "@/utils/getColor"
  import type { DatePickerDateSlotOptions } from "primevue"
  import type { ExpenseType } from "@/types/expense"
  import type { ColorType } from "@/types/color"
  defineProps<{
    date: DatePickerDateSlotOptions
    expensesInDay?: ExpenseType[]
    color: ColorType
  }>()
</script>
<template>
  <p :class="expensesInDay && expensesInDay.length > 0 && getColor({ color, text: 700 }).text">
    {{ date.day }}
  </p>
</template>
