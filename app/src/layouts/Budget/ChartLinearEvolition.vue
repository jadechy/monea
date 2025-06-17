<script setup lang="ts">
  import { formatDateToDayMonth, getCurrentMonthDays } from "@/lib/date"
  import { fetchAllExpenseByGroup } from "@/services/expenseService"
  import type { ErrorType } from "@/types/error"
  import type { ExpenseDateType } from "@/types/expense"
  import type { GroupType } from "@/types/group"
  import Chart from "primevue/chart"
  import { onMounted, ref } from "vue"
  const expenses = ref<ExpenseDateType>()
  const error = ref<ErrorType>(null)
  const props = defineProps<{ group_id: GroupType["id"] }>()

  onMounted(async () => {
    const resultExpenses = await fetchAllExpenseByGroup(props.group_id)
    if (resultExpenses === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      expenses.value = resultExpenses
    }
  })

  const days = getCurrentMonthDays()
  const labels = days.map((d) => formatDateToDayMonth(d))

  // Initialisation : tableau de 0 pour chaque jour
  const cumulativeByCategory: Record<number, number[]> = {}
  const totalData: number[] = []

  props.categories.forEach((cat) => {
    cumulativeByCategory[cat.id] = new Array(labels.length).fill(0)
  })

  let totalCumulative = 0
  labels.forEach((date, index) => {
    const dayExpenses = expenses[date] || []
    let totalForDay = 0

    dayExpenses.forEach((expense) => {
      const catId = expense.category
      const amount = expense.amount
      cumulativeByCategory[catId][index] = (cumulativeByCategory[catId][index - 1] || 0) + amount
      totalForDay += amount
    })

    // Copier les valeurs précédentes si aucune dépense pour une catégorie
    props.categories.forEach((cat) => {
      if (!dayExpenses.some((e) => e.category === cat.id)) {
        cumulativeByCategory[cat.id][index] = cumulativeByCategory[cat.id][index - 1] || 0
      }
    })

    totalCumulative += totalForDay
    totalData[index] = totalCumulative
  })

  // Générer les datasets
  const chartData = ref({
    labels,
    datasets: [
      {
        label: "Total des dépenses",
        data: totalData,
        borderColor: "#111827", // gray-900
        backgroundColor: "#111827",
        borderWidth: 4,
        tension: 0.3,
        fill: false,
      },
      ...props.categories.map((cat) => ({
        label: cat.label,
        data: cumulativeByCategory[cat.id],
        borderColor: `hsl(var(--tw-color-${cat.color}-500))`,
        backgroundColor: `hsl(var(--tw-color-${cat.color}-500))`,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      })),
    ],
  })

  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#1f2937", // gray-800
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6b7280", // gray-500
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#6b7280",
        },
      },
    },
  })
</script>
<template>
  <Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
</template>
