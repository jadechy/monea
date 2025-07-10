<script setup lang="ts">
import type { ExpenseType } from "~/types/expenseType";
import type { GroupType } from "~/types/groupType";

// Props
const { space_id, id } = defineProps<{
  space_id: GroupType["id"];
  id?: ExpenseType["id"];
}>();
</script>

<template>
  <FormExpense :space_id="space_id" :id="id" />
</template>
