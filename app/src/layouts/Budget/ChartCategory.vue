<script setup lang="ts">
  import { ref } from "vue"
  import Chart from "primevue/chart"
  import { categories } from "@/data/categoryLabel"
  import { colors } from "@/main"
  const chartData = ref({
    labels: categories.map((category) => category.label),
    datasets: [
      {
        data: categories.map((category) => category.amount),
        backgroundColor: categories.map((category) => colors[category.color][300]),
        hoverBackgroundColor: categories.map((category) => colors[category.color][200]),
      },
    ],
  })

  const chartOptions = ref({
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: colors["gray"][900],
        },
      },
    },
  })
</script>

<template>
  <Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-[30rem]" />
</template>
