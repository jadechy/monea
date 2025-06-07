<script setup lang="ts">
  import { computed } from "vue"
  import type { Color } from "../Home/SpaceCard.vue"

  const props = defineProps<{ color: Color; selected?: boolean }>()
  const currentColor = computed(() => {
    const color: Record<Color, { bg: string; icon: string }> = {
      yellow: { bg: "bg-yellow-100 hover:bg-yellow-200", icon: "text-yellow-600" },
      blue: { bg: "bg-blue-100 hover:bg-blue-200", icon: "text-blue-600" },
      green: { bg: "bg-green-100 hover:bg-green-200", icon: "text-green-600" },
      pink: { bg: "bg-pink-100 hover:bg-pink-200", icon: "text-pink-600" },
      gray: { bg: "bg-gray-100 hover:bg-gray-200", icon: "text-gray-600" },
      orange: { bg: "bg-orange-100 hover:bg-orange-200", icon: "text-orange-600" },
    }
    return color[props.color]
  })
</script>

<template>
  <div
    class="h-8 w-16 rounded-sm flex justify-center items-center transition"
    :class="[currentColor.bg]"
  >
    <i class="pi pi-check" style="font-weight: bold" :class="currentColor.icon" v-if="selected"></i>
  </div>
</template>

<style></style>
