<script setup lang="ts">
import type { ExpenseType } from "~/types/expenseType";
import type { GroupType } from "~/types/groupType";

// Props
const { group_id, id } = defineProps<{
  group_id: GroupType["id"];
  id?: ExpenseType["id"];
}>();
</script>

<template>
  <FormExpense :group_id="group_id" :id="id" />
</template>
