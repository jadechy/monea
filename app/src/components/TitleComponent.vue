<script setup lang="ts">
  import { computed } from "vue"
  import type { Color } from "../layouts/Home/SpaceCard.vue"
  export type TitleComponentProps = {
    label: string
    color?: Color
  }
  const props = withDefaults(defineProps<TitleComponentProps>(), {
    color: "gray" as Color,
  })

  const colorMap: Record<Color, string> = {
    pink: "text-pink-600",
    green: "text-green-600",
    yellow: "text-yellow-600",
    blue: "text-blue-600",
    gray: "text-gray-600",
    orange: "text-orange-600",
  }
  const labelStyle = computed(() => {
    return colorMap[props.color]
  })
</script>

<template>
  <h1 class="font-extrabold text-4xl mb-1.5" :class="labelStyle">{{ label }}</h1>
</template>
