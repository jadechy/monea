<script setup lang="ts">
  import SpaceCard from "@/layouts/Home/SpaceCard.vue"
  import { spacesData } from "@/data/spaces"
</script>

<template>
  <article class="grid gap-6 grid-cols-2 lg:grid-cols-3 mt-7">
    <SpaceCard
      v-for="space in spacesData"
      :key="space.id"
      :id="space.id"
      :img="space.img"
      :label="space.label"
      :color="space.color"
    />
  </article>
</template>
