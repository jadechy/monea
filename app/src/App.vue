<script setup lang="ts">
  import { RouterView } from "vue-router"
  import Header from "./components/Header.vue"
  import { useAuthStore } from "./stores/authStore"
  import { onBeforeMount } from "vue"
  import { useGroups } from "./composables/useGroups"
  import { storeToRefs } from "pinia"
  const auth = useAuthStore()
  const groupsStore = useGroups()
  const { loading } = storeToRefs(groupsStore)

  onBeforeMount(() => {
    auth.initAuth()
  })
</script>

<template>
  <Header />
  <main class="lg:px-10 px-5">
    <div v-if="loading" class="p-4">Chargement...</div>

    <RouterView />
  </main>
</template>
