<template>
  <div
    class="flex items-center gap-5 w-fit rounded-full px-3 py-1.5"
    :class="[labelStyle.color, labelStyle.bg, add ?? labelStyle.hover]"
  >
    <p>
      {{ label !== "default" ? label : "Créer une catégorie" }}
    </p>
    <div v-if="edit" class="flex gap-2">
      <i class="pi pi-pencil"></i>
      <i class="pi pi-times"></i>
    </div>
    <i class="pi pi-plus" v-if="add"></i>
  </div>
</template>

<script setup lang="ts">
  import { categories, type CategoryLabel } from "@/data/categoryLabel"
  import { computed } from "vue"

  const props = withDefaults(
    defineProps<{
      label?: CategoryLabel
      edit?: boolean
      add?: boolean
    }>(),
    { label: "default" },
  )
  const labelStyle = computed(() => {
    const colorMap: Record<CategoryLabel, { bg: string; color: string; hover: string }> =
      categories.reduce(
        (acc, category) => {
          acc[category.label] = {
            bg: `bg-${category.color}-100`,
            color: `text-${category.color}-500`,
            hover: `hover:bg-${category.color}-200`,
          }
          return acc
        },
        {} as Record<CategoryLabel, { bg: string; color: string; hover: string }>,
      )
    return colorMap[props.label]
  })
</script>
