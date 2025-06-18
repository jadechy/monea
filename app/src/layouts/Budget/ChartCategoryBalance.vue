<script setup lang="ts">
  import { ref } from "vue"
  import Chart from "primevue/chart"
  import type { BudgetByCategoryType } from "@/types/budget"
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
  const groupedByCategory = props.budgets.reduce(
    (acc, budget) => {
      const id = budget.category.categoryId
      if (!acc[id]) {
        acc[id] = {
          label: budget.category.label || "Sans nom",
          color: budget.category.color,
          total: 0,
        }
      }
      acc[id].total += budget.amount
      return acc
    },
    {} as Record<number, { label: string; color: string; total: number }>,
  )

  const chartData = ref({
    labels: props.budgets.map((budget) => budget.category.label),
    datasets: [
      {
        label: "Object",
        data: Object.values(groupedByCategory).map((cat) => cat.total),
        backgroundColor: Object.values(groupedByCategory).map((cat) =>
          getTailwindBgColor(`${cat.color}-400`),
        ),
      },
      {
        label: "Réel",
        data: Object.values(groupedByCategory).map(() => 100),
        backgroundColor: Object.values(groupedByCategory).map((cat) =>
          getTailwindBgColor(`${cat.color}-200`),
        ),
      },
    ],
  })
  const chartOptions = ref({
    responsive: true,
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
    type="bar"
    :data="chartData"
    :options="chartOptions"
    class="w-[40rem] flex justify-center"
  />
</template>
