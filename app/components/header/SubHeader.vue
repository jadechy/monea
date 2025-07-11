<script setup lang="ts">
import type { RouteProps } from "./BackComponent.vue";
import type { TitleComponentProps } from "./TitleComponent.vue";

defineProps<TitleComponentProps & RouteProps>();
</script>

<template>
  <div class="mb-5">
    <TitleComponent :label="label ?? 'erorr'" :color="color" />
    <BackComponent :to="to" />
  </div>
</template>

<style></style>
