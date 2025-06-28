<script setup lang="ts">
  import Header from "@/components/Header/Header.vue"
  import { useGroupsStore } from "@/stores/groupStore"
  import { storeToRefs } from "pinia"
  const { isLoading } = storeToRefs(useGroupsStore())
</script>
<template>
  <Header />
  <main class="lg:px-10 px-5">
    <div v-if="isLoading" class="p-4">Chargement...</div>
    <RouterView />
  </main>
</template>
