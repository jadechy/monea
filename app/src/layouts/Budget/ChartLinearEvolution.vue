<script setup lang="ts">
  import { onMounted, ref, watchEffect } from "vue"
  import Chart from "primevue/chart"
  import { formatDateToDayMonth, getCurrentMonthDate, getCurrentMonthDays } from "@/lib/date"
  import { fetchCategoryByGroup } from "@/services/categoryService"
  import { fetchAllExpenseByGroup, fetchAllExpenseByGroupAndMonth } from "@/services/expenseService"
  import type { CategoryType } from "@/types/category"
  import type { ExpenseDateType } from "@/types/expense"
  import type { GroupType } from "@/types/group"
  import type { ErrorType } from "@/types/error"

  const props = defineProps<{ group_id: GroupType["id"] }>()
  const expenses = ref<ExpenseDateType>({})
  const categories = ref<CategoryType[]>([])
  const error = ref<ErrorType>(null)

  const days = getCurrentMonthDays()
  const labels = days.map((d) => formatDateToDayMonth(d))

  const chartData = ref<{ labels: string[]; datasets: any[] }>({
    labels,
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

  onMounted(async () => {
    const resultExpenses = await fetchAllExpenseByGroupAndMonth(
      props.group_id,
      getCurrentMonthDate(),
    )
    const resultCategories = await fetchCategoryByGroup(props.group_id)

    if (!resultExpenses || !resultCategories) {
      error.value = "Erreur lors du chargement des données"
    } else {
      expenses.value = resultExpenses
      categories.value = resultCategories
    }
  })

  watchEffect(() => {
    if (!categories.value.length || !Object.keys(expenses.value).length) return
    categories.value = categories.value.filter((category) =>
      Object.values(expenses.value).some((expenseArray) =>
        expenseArray.some((expence) => expence.category === category.id),
      ),
    )
    const cumulativeByCategory: Record<number, number[]> = {}
    const totalData: number[] = new Array(labels.length).fill(0)

    categories.value.forEach((cat) => {
      cumulativeByCategory[cat.id] = new Array(labels.length).fill(0)
    })
    console.log(categories.value)
    labels.forEach((label, index) => {
      const [day, month] = label.split("/")
      const year = "2025"
      const dateKey = `${year}-${month}-${day}`
      const dayExpenses = expenses.value[dateKey] || []

      let totalForDay = 0

      dayExpenses.forEach((expense) => {
        const catId = expense.category
        const amount = expense.amount
        const prev = index > 0 ? cumulativeByCategory[catId][index - 1] : 0
        cumulativeByCategory[catId][index] = prev + amount

        totalForDay += amount
      })

      categories.value.forEach((cat) => {
        if (!dayExpenses.some((e) => e.category === cat.id)) {
          console.log(cumulativeByCategory)
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
      ...categories.value.map((cat) => ({
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
