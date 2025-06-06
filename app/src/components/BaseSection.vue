<template>
  <article>
    <p class="italic text-gray-600">{{ label }}</p>
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
