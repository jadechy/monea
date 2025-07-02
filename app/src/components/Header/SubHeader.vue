<script setup lang="ts">
  import BackComponent, { type RouteProps } from "@/components/Header/BackComponent.vue"
  import type { TitleComponentProps } from "./TitleComponent.vue"
  import TitleComponent from "./TitleComponent.vue"
  defineProps<TitleComponentProps & RouteProps>()
</script>

<template>
  <div class="mb-5">
    <TitleComponent :label="label ?? 'erorr'" :color="color" />
    <BackComponent :routeName="routeName" :params="params" />
  </div>
</template>

<style></style>
