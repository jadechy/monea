<script setup lang="ts">
  import { ref } from "vue"
  import Chart from "primevue/chart"
  import { categories, type CategoryLabel } from "@/data/categoryLabel"
  import { colors } from "@/main"
  import { biblioPaiements } from "@/data/expenses/biblioPaiements"
  import type { PaiementData } from "@/data/expenses"
  import type { ExpenseCardComponentProps } from "@/components/ExpenseCardComponent.vue"
  const getCategoryPaiement = (array: PaiementData[], categoryLabel: CategoryLabel) => {
    return array.map((month, i) =>
      month.expenses.filter((expense) => expense.categoryLabel === categoryLabel),
    )
  }

  const getPaiementSome = (array: ExpenseCardComponentProps[][]) => {
    return array.map((month, i) => {
      let amount = 0
      month.map((expense) => (amount += expense.price))
      return amount
    })
  }
  const categoryPaiementSome = categories.map((category) => ({
    ...category,
    some: getPaiementSome(getCategoryPaiement(biblioPaiements, category.label)),
  }))
  const chartData = ref({
    labels: [
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
    ],
    datasets: categoryPaiementSome.map((category) => ({
      label: category.label,
      data: category.some,
      borderColor: colors[category.color][300],
      backgroundColor: colors[category.color][300],
      tension: 0.4,
    })),
  })

  const chartOptions = ref({
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: colors["gray"][900],
        },
      },
    },
  })
</script>

<template>
  <Chart type="line" :data="chartData" :options="chartOptions" class="w-full" />
</template>
