<template>
  <router-link
    :to="{ name: 'space', params: { space_id: group.id } }"
    :class="[bgStyle.default, bgStyle.hover]"
    class="p-2.5 rounded-2xl transition-all text-gray-700"
    @click=""
  >
    <div class="bg-gray-200 h-32 mb-6" />
    <div class="flex items-center justify-between" :class="bgStyle.text">
      <p>{{ group.name }}</p>
      <i class="pi pi-chevron-right"></i>
    </div>
  </router-link>
</template>

<script setup lang="ts">
  import { colors } from "@/data/categoryLabel"
  import type { ColorType } from "@/types/color"
  import type { GroupType } from "@/types/groupType"
  import { computed } from "vue"
  export type Color = "pink" | "green" | "yellow" | "blue" | "gray" | "orange"

  interface Props {
    group: GroupType
  }

  const props = defineProps<Props>()

  const colorMap: Record<ColorType, { default: string; hover: string; text: string }> =
    colors.reduce(
      (acc, color) => {
        acc[color] = {
          default: `bg-${color}-50`,
          hover: `hover:bg-${color}-100`,
          text: `text-${color}-900`,
        }
        return acc
      },
      {} as Record<ColorType, { default: string; hover: string; text: string }>,
    )

  const bgStyle = computed(() => {
    return colorMap[props.group.color] || { default: "bg-gray-50", hover: "hover:bg-gray-100" }
  })
</script>
