<script setup lang="ts">
  import { categories } from "@/data/categoryLabel"
  import AllPaiementsLayout from "@/layouts/AllPaiementsLayout.vue"

  const props = defineProps<{ space_id: string; category_id: string }>()

  const category = categories.find((category) => category.label === props.category_id)
</script>

<template>
  <AllPaiementsLayout
    :space_id="space_id"
    :subHeader="{
      label: category?.label ?? 'error',
      routeName: 'budget_space',
      params: { space_id: space_id },
      color: category?.color,
    }"
  />
</template>
