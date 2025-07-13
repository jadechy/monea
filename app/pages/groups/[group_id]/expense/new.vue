<script setup lang="ts">
// Store
const { group } = storeToRefs(useGroupsStore());

// Props
useSeo({
  title: `Ajouter une dépense - ${group.value?.name} | MonApp`,
  description: `Créez une nouvelle dépense dans le groupe "${group.value?.name}" pour suivre vos budgets et partager les coûts avec vos membres.`,
  ogTitle: `Ajouter une dépense au groupe ${group.value?.name}`,
  ogDescription: `Enregistrez une nouvelle dépense dans le groupe "${group.value?.name}" et gérez facilement vos finances de groupe avec MonApp.`,
  image: group.value?.picture ?? undefined,
});
</script>

<template>
  <ExpenseForm />
</template>
