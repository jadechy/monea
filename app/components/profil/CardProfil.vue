<script setup lang="ts">
interface Props {
  label: string;
  content?: string;
  icon: string;
}
defineProps<Props>();
</script>
<template>
  <div class="shadow rounded-lg p-4">
    <div class="flex gap-1 items-center text-lg font-semibold">
      <i class="pi stroke-2 mr-2" :class="[icon]"></i>
      <p>{{ label }}</p>
    </div>
    <p>{{ content }}</p>
  </div>
</template>
