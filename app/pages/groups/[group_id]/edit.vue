<script setup lang="ts">
import GroupForm from "~/components/form/GroupForm.vue";
import { useSeo } from "~/composables/useSeo";

// Store
const { group } = storeToRefs(useGroupsStore());

useSeo({
  title: `Modifier le groupe - ${group.value?.name}`,
  description: `Éditez les paramètres et les informations du groupe "${group.value?.name}" pour gérer vos dépenses et membres efficacement.`,
  ogTitle: `Modifier le groupe ${group.value?.name}`,
  ogDescription: `Personnalisez et mettez à jour les détails du groupe "${group.value?.name}" dans Monéa.`,
  image: group.value?.picture ?? undefined,
});
</script>
<template>
  <GroupForm />
</template>
