<script setup lang="ts">
import type { CategoryType } from "~/types/categoryType";
import type { GroupType } from "~/types/groupType";

// Props
const { space_id, category } = defineProps<{
  space_id: GroupType["id"];
  category?: CategoryType["id"];
}>();
</script>

<template>
  <FormExpense :space_id="space_id" :category="category" />
</template>
