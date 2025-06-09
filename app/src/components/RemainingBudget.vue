<script setup lang="ts">
  defineProps<{ amount: number }>()
</script>
<template>
  <div class="item w-3xs">
    <p>Budget restant :</p>
    <p class="font-bold">{{ amount }}€</p>
  </div>
</template>
