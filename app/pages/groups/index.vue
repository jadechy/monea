<script setup lang="ts">
const { user } = useAuthStore();
useSeo({
  title: `Groupes de ${user?.name} - Vos comptes partagés`,
  description: `Retrouvez tous les groupes de ${user?.name}, suivez vos dépenses, budgets et prévisions.`,
});
</script>

<template>
  <div class="mt-5">
    <PersonalGroup />
    <AllGroups />
  </div>
  <AddAction to="/groups/new" />
</template>
