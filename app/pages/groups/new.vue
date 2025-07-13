<script setup lang="ts">
import { useSeo } from "~/composables/useSeo";

useSeo({
  title: "Créer un groupe - Gestion de dépenses partagées",
  description:
    "Créez un nouveau groupe pour gérer les dépenses entre amis, en famille ou en colocation. Suivez les budgets et répartissez les dépenses facilement.",
});
</script>

<template>
  <GroupForm />
</template>
