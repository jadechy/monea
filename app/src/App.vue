<script setup lang="ts">
  import { RouterView } from "vue-router"
  import { useAuthStore } from "./stores/authStore"
  import { onBeforeMount } from "vue"
  const auth = useAuthStore()

  onBeforeMount(() => {
    auth.initAuth()
  })
</script>

<template>
  <RouterView />
</template>
