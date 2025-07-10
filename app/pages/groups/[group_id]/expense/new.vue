<script setup lang="ts">
import type { CategoryType } from "~/types/categoryType";
import type { GroupType } from "~/types/groupType";

// Props
const { group_id, category } = defineProps<{
  group_id: GroupType["id"];
  category?: CategoryType["id"];
}>();
</script>

<template>
  <FormExpense :group_id="group_id" :category="category" />
</template>
