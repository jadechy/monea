<script setup lang="ts">
  withDefaults(defineProps<{ amount: number; label?: string }>(), { label: "Budget restant" })
</script>
<template>
  <div class="item block lg:flex w-fit lg:w-1/4 rounded-lg">
    <p>{{ label }}</p>
    <p class="font-bold">{{ amount }}€</p>
  </div>
</template>
