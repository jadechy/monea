<template>
  <div
    class="flex items-center gap-5 w-fit rounded-full px-3 py-1.5"
    :class="[labelStyle.text, labelStyle.bg, add ?? labelStyle.hover]"
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
  import { getColor } from "@/lib/getColor"
  import { computed } from "vue"

  const props = withDefaults(
    defineProps<{
      label?: string
      edit?: boolean
      add?: boolean
    }>(),
    { label: "default" },
  )
  const labelStyle = computed(() => {
    const category = categories.find((cat) => cat.label === props.label) ?? categories[0]
    return getColor({ color: category.color })
  })
</script>
