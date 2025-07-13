<script setup lang="ts">
  import type { ColorType } from "@/types/color"

  defineProps<{ color: ColorType; selected?: boolean }>()
</script>

<template>
  <div
    class="h-12 rounded-sm flex justify-center items-center transition"
    :class="[`bg-${color}-200 hover:bg-${color}-300`]"
  >
    <i
      v-if="selected"
      class="pi pi-check"
      style="font-weight: bold"
      :class="[`text-${color}-600`]"
    />
  </div>
</template>

<style></style>
