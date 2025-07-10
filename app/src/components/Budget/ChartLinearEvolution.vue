<script setup lang="ts">
  import { computed, ref, watchEffect } from "vue"
  import Chart from "primevue/chart"
  import { formatDayMonth, getCurrentMonthStartDate, getDaysOfCurrentMonth } from "@/utils/date"
  import { getMonthlyExpensesByGroup } from "@/services/expenseService"
  import type { GroupType } from "@/types/groupType"
  import { useQuery } from "@tanstack/vue-query"
  import { useGroupsStore } from "@/stores/groupStore"
  import type { ChartData } from "chart.js"

  // Props
  const { group_id } = defineProps<{ group_id: GroupType["id"] }>()

  // Const
  const { groupById } = useGroupsStore()
  const group = computed(() => groupById({ id: group_id }))
  const days = getDaysOfCurrentMonth()
  const labels = days.map((d) => formatDayMonth(d))

  // Query
  const { data: expenses } = useQuery({
    queryKey: ["expenses-monthly-group", group_id],
    queryFn: () => getMonthlyExpensesByGroup(group_id, getCurrentMonthStartDate()),
  })

  // Chart
  const chartData = ref<ChartData<"line", number[], string>>({
    labels: [],
    datasets: [],
  })

  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#1f2937",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6b7280",
          maxRotation: 45,
          minRotation: 20,
          autoSkip: true,
          maxTicksLimit: 6,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#6b7280",
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  })

  // WatchEffect
  watchEffect(() => {
    if (!group.value?.categories || !expenses.value) return

    // Filtrer uniquement les catégories utilisées
    const filteredCategories = group.value.categories.filter((category) =>
      Object.values(expenses.value ?? {}).some((expenseArray) =>
        expenseArray.some((e) => e.category.id === category.id),
      ),
    )

    const cumulativeByCategory: Record<number, number[]> = {}
    const totalData: number[] = new Array(labels.length).fill(0)

    filteredCategories.forEach((cat) => {
      cumulativeByCategory[cat.id] = new Array(labels.length).fill(0)
    })

    days.forEach((date, index) => {
      const dateKey = date.toISOString().slice(0, 10)
      const dayExpenses = expenses.value?.[dateKey] ?? []

      let totalForDay = 0

      dayExpenses.forEach((expense) => {
        const catId = expense.category.id
        const amount = expense.amount
        const prev = index > 0 ? cumulativeByCategory[catId][index - 1] : 0
        cumulativeByCategory[catId][index] = prev + amount
        totalForDay += amount
      })

      filteredCategories.forEach((cat) => {
        if (!dayExpenses.some((e) => e.category.id === cat.id)) {
          cumulativeByCategory[cat.id][index] =
            index > 0 ? cumulativeByCategory[cat.id][index - 1] : 0
        }
      })

      totalData[index] = (index > 0 ? totalData[index - 1] : 0) + totalForDay
    })

    const datasets = [
      {
        label: "Total des dépenses",
        data: totalData,
        borderColor: "#111827",
        backgroundColor: "#111827",
        borderWidth: 4,
        tension: 0.05,
        fill: false,
      },
      ...filteredCategories.map((cat) => ({
        label: cat.label ?? `Catégorie ${cat.id}`,
        data: cumulativeByCategory[cat.id],
        borderColor: cat.color,
        backgroundColor: cat.color,
        borderWidth: 2,
        tension: 0.05,
        fill: false,
      })),
    ]

    chartData.value = {
      labels,
      datasets,
    }
  })
</script>

<template>
  <Chart
    type="line"
    :data="chartData"
    :options="chartOptions"
    class="w-[40rem] flex justify-center"
  />
</template>
