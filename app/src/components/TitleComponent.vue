<script setup lang="ts">
  import { computed } from "vue"
  import type { Color } from "../layouts/Home/SpaceCard.vue"
  import { getColor } from "@/services/getColor"
  import { colors } from "@/data/categoryLabel"
  export type TitleComponentProps = {
    label: string
    color?: Color
  }
  const props = withDefaults(defineProps<TitleComponentProps>(), {
    color: "gray" as Color,
  })
  const labelStyle = computed(() => {
    return getColor({ array: colors, color: 600 })[props.color]
  })
</script>

<template>
  <h1 class="font-extrabold text-4xl mb-1.5" :class="labelStyle.color">{{ label }}</h1>
</template>
