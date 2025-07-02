<script setup lang="ts">
  import type { GroupType } from "@/types/groupType"
  import FormExpense from "@/components/Display/FormExpense.vue"
  // Props
  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()
</script>

<template>
  <FormExpense :space_id="space_id" />
</template>
