<script setup lang="ts">
  import type { GroupType } from "@/types/groupType"
  import FormExpense from "@/components/Display/FormExpense.vue"
  import type { CategoryType } from "@/types/categoryType"
  // Props
  const { space_id, category } = defineProps<{
    space_id: GroupType["id"]
    category?: CategoryType["id"]
  }>()
</script>

<template>
  <FormExpense :space_id="space_id" :category="category" />
</template>
