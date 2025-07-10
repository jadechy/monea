<script setup lang="ts">
  import type { ColorType } from "@/types/color"
  export interface TitleComponentProps {
    label: string
    color?: ColorType
  }
  withDefaults(defineProps<TitleComponentProps>(), {
    color: "gray" as ColorType,
  })
</script>

<template>
  <h1 class="font-extrabold text-4xl mb-1.5" :class="[`text-${color}-600`]">{{ label }}</h1>
</template>
