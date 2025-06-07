<script setup lang="ts">
  import BackComponent, { type RouteProps } from "@/components/BackComponent.vue"
  import TitleComponent, { type TitleComponentProps } from "@/components/TitleComponent.vue"
  defineProps<TitleComponentProps & RouteProps>()
</script>

<template>
  <div class="mb-5">
    <TitleComponent :label="label" :color="color" />
    <BackComponent :routeName="routeName" :params="params" />
  </div>
</template>

<style></style>
