<script setup lang="ts">
  import type { GroupType } from "@/types/groupType"
  import { type ExpenseType } from "@/types/expenseType"
  import FormExpense from "@/components/Display/FormExpense.vue"
  // Props
  const { space_id, id } = defineProps<{ space_id: GroupType["id"]; id?: ExpenseType["id"] }>()
</script>

<template>
  <FormExpense :space_id="space_id" :id="id" />
</template>
