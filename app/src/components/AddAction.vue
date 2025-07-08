<script setup lang="ts">
  import router from "@/router"
  import type { RouteProps } from "./Header/BackComponent.vue"
  import { Button } from "primevue"
  const props = defineProps<RouteProps>()
  console.log(props.query)
</script>

<template>
  <Button
    size="large"
    icon="pi pi-plus"
    aria-label="Filter"
    class="fixed bottom-4 right-4"
    @click="router.push({ name: routeName, params: params, query: query })"
  />
</template>
