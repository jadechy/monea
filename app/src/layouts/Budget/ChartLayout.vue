<script setup lang="ts">
  import Tabs from "primevue/tabs"
  import TabList from "primevue/tablist"
  import Tab from "primevue/tab"
  import TabPanels from "primevue/tabpanels"
  import TabPanel from "primevue/tabpanel"
  import ChartCategory from "./ChartCategory.vue"
  import type { BudgetByCategoryType } from "@/types/budget"
  import { formatDateForApi, getCurrentMonthDate } from "@/lib/date"
  import ChartCategoryBalance from "./ChartCategoryBalance.vue"
  import ChartLinearEvolition from "./ChartLinearEvolition.vue"
  const props = defineProps<{ budgets: BudgetByCategoryType[] }>()
</script>

<template>
  <Tabs value="0">
    <TabList>
      <Tab value="0">Budget par catégories</Tab>
      <Tab value="1">Initial / Réalité</Tab>
      <Tab value="2">Evolution des dépenses</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0" class="flex justify-center">
        <ChartCategory
          :budgets="
            budgets.filter(
              (budget) => budget.monthStart === formatDateForApi(getCurrentMonthDate()),
            )
          "
        />
      </TabPanel>
      <TabPanel value="1">
        <ChartCategoryBalance :budgets="budgets" />
      </TabPanel>
      <TabPanel value="2">
        <ChartLinearEvolition />
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>
