<template>
  <article>
    <header class="flex justify-between items-end">
      <h2 class="italic text-gray-600">{{ label }}</h2>
      <slot name="header" />
    </header>
    <div class="flex flex-col gap-3 mt-1.5">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
  defineProps<{
    label: string
  }>()
</script>
