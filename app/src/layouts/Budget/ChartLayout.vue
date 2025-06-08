<script setup lang="ts">
  import Tabs from "primevue/tabs"
  import TabList from "primevue/tablist"
  import Tab from "primevue/tab"
  import TabPanels from "primevue/tabpanels"
  import TabPanel from "primevue/tabpanel"
  import ChartCategory from "./ChartCategory.vue"
  import ChartYear from "./ChartYear.vue"
</script>

<template>
  <Tabs value="0">
    <TabList>
      <Tab value="0">Budget par catégories</Tab>
      <Tab value="1">Evolution du budget sur l'année</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0" class="flex justify-center">
        <ChartCategory />
      </TabPanel>
      <TabPanel value="1">
        <ChartYear />
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>
