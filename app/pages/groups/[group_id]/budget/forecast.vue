<script setup lang="ts">
import { computed } from "vue";
import { useGroupsStore } from "@/stores/groupStore";
const route = useRoute();
const { group_id } = route.params as {
  group_id: string;
};
const { group } = storeToRefs(useGroupsStore());
useSeo({
  title: `Récapitulatif du budget du groupe ${group.value?.name}`,
  description: `Consultez le bilan budgétaire du groupe ${group.value?.name} : dépenses par catégorie, écarts, soldes et évolution mensuelle.`,
  ogTitle: `Bilan du budget - ${group.value?.name}`,
  ogDescription: `Analyse complète du budget du groupe ${group.value?.name}. Visualisez les totaux, les écarts et la répartition des dépenses pour une meilleure gestion collective.`,
  image: group.value?.picture ?? undefined,
});
</script>

<template>
  <SubHeader
    label="Récap budgets"
    :color="group?.color"
    :to="`/groups/${group_id}/budget`"
  />
  <div class="flex flex-col gap-10">
    <YearBudget :group_id="group_id" />
    <MonthBudget :group_id="group_id" />
  </div>
</template>
