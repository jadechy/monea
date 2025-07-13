<script setup lang="ts">
import { useSeo } from "~/composables/useSeo";

// Props
const { group } = storeToRefs(useGroupsStore());

useSeo({
  title: `Modifier d'une dépense dans ${group.value?.name}`,
  description: `Éditez d'une dépense dans le groupe ${group.value?.name}.`,
  ogTitle: `Édition dépense `,
  ogDescription: `Page d'édition de d'une dépense dans le groupe ${group.value?.name}.`,
  image: group.value?.picture ?? undefined,
});
</script>

<template>
  <ExpenseForm />
</template>
