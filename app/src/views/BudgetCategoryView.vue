<script setup lang="ts">
  import SubHeader from "@/components/SubHeader.vue"
  import { categories } from "@/data/categoryLabel"

  const props = defineProps<{ space_id: string; category_id: string }>()
  const category = categories.find((category) => category.label === props.category_id)

  // const colorMap: Record<CategoryLabel, string> = {
  //   abonnement: `bg-yellow-50 hover:bg-yellow-100 text-yellow-800`,
  //   course: `bg-pink-50 hover:bg-pink-100 text-pink-800`,
  //   restaurant: ` bg-green-50 hover:bg-green-100 text-green-800`,
  //   shopping: `bg-blue-50 hover:bg-blue-100 text-blue-800`,
  //   loisir: `bg-orange-50 hover:bg-orange-100 text-orange-800`,
  //   default: `bg-gray-50 hover:bg-gray-100 text-gray-800`,
  // }
</script>

<template>
  <div class="flex flex-col gap-10">
    <SubHeader
      :label="category?.label ?? 'error'"
      :color="category?.color"
      routeName="budget_space"
      :params="{ space_id: space_id }"
    />

    budget category
  </div>
</template>
