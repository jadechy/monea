<script setup lang="ts">
  import { spacesData } from "@/data/spaces"
  import AllPaiementsLayout from "@/layouts/AllPaiementsLayout.vue"
  const props = defineProps<{ id: string }>()
  const space = spacesData.find((space) => space.id === props.id)
</script>

<template>
  <AllPaiementsLayout
    :space_id="id"
    :subHeader="{
      label: space?.label ?? 'error',
      routeName: 'home',
      color: space?.color,
    }"
    action-button
    have-category
  />
</template>
