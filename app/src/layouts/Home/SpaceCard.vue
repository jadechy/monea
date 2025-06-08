<template>
  <router-link
    :to="{ name: 'space', params: { id: id } }"
    :class="[bgStyle.default, bgStyle.hover]"
    class="p-2.5 rounded-2xl transition-all text-gray-700"
    @click=""
  >
    <div class="bg-gray-200 h-32 mb-6" />
    <div class="flex items-center justify-between" :class="bgStyle.text">
      <p>{{ label }}</p>
      <i class="pi pi-chevron-right"></i>
    </div>
  </router-link>
</template>

<script setup lang="ts">
  import { colors } from "@/data/categoryLabel"
  import { computed } from "vue"
  export type Color = "pink" | "green" | "yellow" | "blue" | "gray" | "orange"
  export type SpaceCardProps = {
    id: string
    label: string
    img: string
    color: Color
  }
  const props = defineProps<SpaceCardProps>()

  const colorMap: Record<Color, { default: string; hover: string; text: string }> = colors.reduce(
    (acc, color) => {
      acc[color] = {
        default: `bg-${color}-50`,
        hover: `hover:bg-${color}-100`,
        text: `text-${color}-900`,
      }
      return acc
    },
    {} as Record<Color, { default: string; hover: string; text: string }>,
  )

  const bgStyle = computed(() => {
    return colorMap[props.color] || { default: "bg-gray-50", hover: "hover:bg-gray-100" }
  })
</script>
