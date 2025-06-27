<script setup lang="ts">
  import Tabs from "primevue/tabs"
  import TabList from "primevue/tablist"
  import Tab from "primevue/tab"
  import TabPanels from "primevue/tabpanels"
  import TabPanel from "primevue/tabpanel"
  import ChartCategory from "./ChartCategory.vue"
  import type { BudgetByCategoryType } from "@/types/budgetType"
  import { formatDateForApi, getCurrentMonthDate } from "@/utils/date"
  import ChartCategoryBalance from "./ChartCategoryBalance.vue"
  import ChartLinearEvolution from "./ChartLinearEvolution.vue"
  import type { GroupType } from "@/types/group"
  defineProps<{ budgets: BudgetByCategoryType[]; group_id: GroupType["id"] }>()
</script>

<template>
  <Tabs value="0">
    <TabList>
      <Tab value="0">Budget par catégories</Tab>
      <Tab value="1">Initial / Réalité</Tab>
      <Tab value="2">Evolution des dépenses</Tab>
    </TabList>
    <TabPanels class="full">
      <TabPanel value="0" class="flex justify-center h-64 w-full">
        <ChartCategory
          :budgets="
            budgets.filter(
              (budget) => budget.monthStart === formatDateForApi(getCurrentMonthDate()),
            )
          "
        />
      </TabPanel>
      <TabPanel value="1" class="flex justify-center h-64 w-full">
        <ChartCategoryBalance :budgets="budgets" />
      </TabPanel>
      <TabPanel value="2" class="flex justify-center h-64 w-full">
        <ChartLinearEvolution :group_id="group_id" />
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>
