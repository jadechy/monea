<script setup lang="ts">
  export type RouteProps = { routeName: string; params?: Record<string, string> }
  defineProps<RouteProps>()
</script>

<template>
  <router-link
    :to="{ name: routeName, params: params }"
    class="border-b-1 py-1.5 pr-1.5 hover:bg-gray-100"
  >
    <i class="pi pi-arrow-left mr-4" />
    Back
  </router-link>
</template>
