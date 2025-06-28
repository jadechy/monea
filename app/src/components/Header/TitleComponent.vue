<script setup lang="ts">
  import type { ColorType } from "@/types/color"
  import type { Color } from "../Space/SpaceCard.vue"
  export interface TitleComponentProps {
    label: string
    color?: ColorType
  }
  withDefaults(defineProps<TitleComponentProps>(), {
    color: "gray" as Color,
  })
</script>

<template>
  <h1 class="font-extrabold text-4xl mb-1.5" :class="[`text-${color}-600`]">{{ label }}</h1>
</template>
