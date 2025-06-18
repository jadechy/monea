<script setup lang="ts">
  import { RouterView } from "vue-router"
  import Header from "./components/Header.vue"
  import { useGroupStore } from "./stores/groupStore"
  const groupStore = useGroupStore()
</script>

<template>
  <Header />
  <main class="lg:px-10 px-5">
    <div v-if="groupStore.isLoading" class="p-4">Chargement...</div>

    <div v-else-if="groupStore.error" class="p-4 text-red-600">
      {{ groupStore.error }}
    </div>
    <RouterView />
  </main>
</template>
