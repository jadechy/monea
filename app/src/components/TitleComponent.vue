<script setup lang="ts">
  import { computed } from "vue"
  import { getColors } from "@/utils/getColor"
  import { colors } from "@/data/categoryLabel"
  import type { ColorType } from "@/types/color"
  import type { Color } from "./Space/SpaceCard.vue"
  export interface TitleComponentProps {
    label: string
    color?: ColorType
  }
  const props = withDefaults(defineProps<TitleComponentProps>(), {
    color: "gray" as Color,
  })
  const labelStyle = computed(() => {
    return getColors({ array: colors, text: 600 })[props.color]
  })
</script>

<template>
  <h1 class="font-extrabold text-4xl mb-1.5" :class="labelStyle.text">{{ label }}</h1>
</template>
