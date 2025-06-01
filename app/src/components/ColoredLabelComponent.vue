<template>
  <div
    class="flex items-center gap-5 w-fit rounded-full px-3 py-1.5"
    :class="[labelStyle.color, labelStyle.bg]"
  >
    <p>
      {{ label }}
    </p>
    <div v-if="edit" class="flex gap-2">
      <i class="pi pi-pencil"></i>
      <i class="pi pi-times"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue"
  export type ColoredLabelProps = "course" | "restaurant" | "abonnement" | "shopping"
  const props = defineProps<{
    label: ColoredLabelProps
    edit?: boolean
  }>()

  const colorMap: Record<ColoredLabelProps, { bg: string; color: string }> = {
    course: { bg: "bg-pink-100", color: "text-pink-500" },
    restaurant: { bg: "bg-green-100", color: "text-green-500" },
    abonnement: { bg: "bg-yellow-100", color: "text-yellow-500" },
    shopping: { bg: "bg-blue-100", color: "text-blue-500" },
  }
  const labelStyle = computed(() => {
    return colorMap[props.label] || { bg: "bg-gray-100", color: "text-gray-500" }
  })
</script>
