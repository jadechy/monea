<script setup lang="ts">
// Store
const { group } = storeToRefs(useGroupsStore());

useSeo({
  title: `Modifier le groupe - ${group.value?.name} | MonApp`,
  description: `Éditez les paramètres et les informations du groupe "${group.value?.name}" pour gérer vos dépenses et membres efficacement.`,
  ogTitle: `Modifier le groupe ${group.value?.name}`,
  ogDescription: `Personnalisez et mettez à jour les détails du groupe "${group.value?.name}" dans MonApp.`,
  image: group.value?.picture ?? undefined,
});
</script>
<template>
  <GroupForm />
</template>
