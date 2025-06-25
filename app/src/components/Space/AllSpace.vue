<script setup lang="ts">
  import { useGroups } from "@/composables/useGroups"
  import { storeToRefs } from "pinia"
  import SpaceCard from "./SpaceCard.vue"

  const groupsStore = useGroups()
  const { groups, loading } = storeToRefs(groupsStore)
</script>

<template>
  <div v-if="loading">Chargement...</div>

  <article v-else-if="groups.length > 0" class="grid gap-6 grid-cols-2 lg:grid-cols-3 mt-7">
    <SpaceCard v-for="group in groups" :key="group.id" :group="group" />
  </article>
  <p v-else class="mt-4">Vous n'avez pas encore de groupe.</p>
</template>
