<script setup lang="ts">
  import { ref } from "vue"
  import Chart from "primevue/chart"
  import type { BudgetByCategoryType } from "@/types/budgetType"
  import tailwindcolors from "tailwindcss/colors"
  const getTailwindBgColor = (colorName: string) => {
    if (typeof window === "undefined") return "#000000"

    const testEl = document.createElement("div")
    testEl.className = `bg-${colorName}`
    testEl.style.display = "none"
    document.body.appendChild(testEl)

    const color = getComputedStyle(testEl).backgroundColor
    document.body.removeChild(testEl)

    return color
  }
  const props = defineProps<{ budgets: BudgetByCategoryType[] }>()
  const chartData = ref({
    labels: props.budgets.map((budget) => budget.category.label),
    datasets: [
      {
        data: props.budgets.map((budget) => budget.amount),
        backgroundColor: props.budgets.map((budget) =>
          getTailwindBgColor(`${budget.category.color}-400`),
        ),
        hoverBackgroundColor: props.budgets.map((budget) =>
          getTailwindBgColor(`${budget.category.color}-600`),
        ),
      },
    ],
  })
  const chartOptions = ref({
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: tailwindcolors.gray[900],
        },
      },
    },
  })
</script>

<template>
  <Chart
    type="pie"
    :data="chartData"
    :options="chartOptions"
    class="w-[40rem] flex justify-center"
  />
</template>
