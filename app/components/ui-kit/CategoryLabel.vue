<script setup lang="ts">
import type { CategoryType, NewCategoryType } from "@/types/categoryType";

interface Props {
  category?: CategoryType | NewCategoryType;
  edit?: boolean;
}

withDefaults(defineProps<Props>(), {
  category: () => ({
    label: "default",
    color: "gray",
  }),
  edit: false,
});
</script>
<template>
  <div
    class="flex items-center gap-8 w-fit rounded-full px-3 py-1.5"
    :class="[
      `bg-${category.color}-100 text-${category.color}-500 hover:bg-${category.color}-200`,
    ]"
  >
    <p>
      {{
        category.label !== "default" ? category.label : "Créer une catégorie"
      }}
    </p>
    <div v-if="$slots.add" class="flex gap-4">
      <slot name="add" />
    </div>
  </div>
</template>
