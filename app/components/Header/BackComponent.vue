<script setup lang="ts">
export type RouteProps = {
  routeName: string;
  params?: Record<string, string | number>;
  query?: Record<string, string | number>;
};
defineProps<RouteProps>();
</script>

<template>
  <RouterLink
    :to="{ name: routeName, params: params }"
    class="border-b-1 py-1.5 pr-1.5 hover:bg-gray-100"
  >
    <i class="pi pi-arrow-left mr-4" />
    Back
  </RouterLink>
</template>
