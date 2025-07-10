<script setup lang="ts">
import { Button } from "primevue";
import type { RouteProps } from "../Header/BackComponent.vue";
defineProps<RouteProps>();
const router = useRouter();
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
