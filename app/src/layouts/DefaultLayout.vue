<script setup lang="ts">
  import Header from "@/components/Header.vue"
  import { useGroups } from "@/composables/useGroups"
  import { storeToRefs } from "pinia"
  const groupsStore = useGroups()
  const { loading } = storeToRefs(groupsStore)
</script>
<template>
  <Header />
  <main class="lg:px-10 px-5">
    <div v-if="loading" class="p-4">Chargement...</div>
    <RouterView />
  </main>
</template>
