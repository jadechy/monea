<template>
  <router-link
    :to="`/space/${id}`"
    :class="[bgStyle.default, bgStyle.hover]"
    class="p-2.5 rounded-2xl transition-all text-gray-700"
    @click=""
  >
    <div class="bg-gray-200 h-32 mb-6" />
    <div class="flex items-center justify-between">
      <p>{{ label }}</p>
      <i class="pi pi-chevron-right"></i>
    </div>
  </router-link>
</template>

<script setup lang="ts">
  import { computed } from "vue"
  export type Color = "pink" | "green" | "yellow" | "blue" | "gray" | "orange"
  export type SpaceCardProps = {
    id: string
    label: string
    img: string
    color: Color
  }
  const props = defineProps<SpaceCardProps>()

  const colorMap: Record<Color, { default: string; hover: string }> = {
    pink: { default: "bg-pink-50", hover: "hover:bg-pink-100" },
    green: { default: "bg-green-50", hover: "hover:bg-green-100" },
    yellow: { default: "bg-yellow-50", hover: "hover:bg-yellow-100" },
    blue: { default: "bg-blue-50", hover: "hover:bg-blue-100" },
    gray: { default: "bg-gray-50", hover: "hover:bg-gray-100" },
    orange: { default: "bg-orange-50", hover: "hover:bg-orange-100" },
  }
  const bgStyle = computed(() => {
    return colorMap[props.color] || { default: "bg-gray-50", hover: "hover:bg-gray-100" }
  })
</script>
