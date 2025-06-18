<script setup lang="ts">
  import SpaceCard from "@/layouts/Home/SpaceCard.vue"
  import { useGroupStore } from "@/stores/groupStore"
  import { storeToRefs } from "pinia"

  const groupStore = useGroupStore()
  const { groups } = storeToRefs(groupStore)
</script>

<template>
  <article v-if="groups.length > 0" class="grid gap-6 grid-cols-2 lg:grid-cols-3 mt-7">
    <SpaceCard v-for="group in groups" :key="group.id" :group="group" />
  </article>
  <p v-else class="mt-4">Vous n'avez pas encore de groupe.</p>
</template>
