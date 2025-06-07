<template>
  <div class="item p-0 pr-6">
    <div class="flex gap-2.5 items-center">
      <div class="rounded-full h-14 w-14 bg-gray-500" />
      <p>{{ people.pseudo }}</p>
    </div>
    <slot />
  </div>
</template>
<script setup lang="ts">
  import type { People } from "@/data/people"
  defineProps<{ people: People }>()
</script>
