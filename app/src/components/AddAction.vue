<script setup lang="ts">
  import router from "@/router"
  import type { RouteProps } from "./BackComponent.vue"
  import { Button } from "primevue"
  defineProps<RouteProps>()
</script>

<template>
  <Button
    size="large"
    icon="pi pi-plus"
    aria-label="Filter"
    class="fixed bottom-4 right-4"
    @click="router.push({ name: routeName, params: params })"
  />
</template>
