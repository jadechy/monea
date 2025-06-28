<script setup lang="ts">
  import type { CategoryType, NewCategoryType } from "@/types/categoryType"

  interface Props {
    category?: CategoryType | NewCategoryType
    edit?: boolean
  }

  withDefaults(defineProps<Props>(), {
    category: () => ({
      label: "default",
      color: "gray",
    }),
    edit: false,
  })
</script>
<template>
  <div
    class="flex items-center gap-5 w-fit rounded-full px-3 py-1.5"
    :class="[`bg-${category.color}-100 text-${category.color}-500 hover:bg-${category.color}-200`]"
  >
    <p>
      {{ category.label !== "default" ? category.label : "Créer une catégorie" }}
    </p>
    <div v-if="edit" class="flex gap-2">
      <i class="pi pi-pencil"></i>
      <i class="pi pi-times"></i>
    </div>
    <i class="pi pi-plus" v-if="!('id' in category)"></i>
  </div>
</template>
