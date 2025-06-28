<script setup lang="ts">
  import { type GroupType } from "@/types/groupType"
  import FormGroup from "@/components/Display/FormGroup.vue"
  const { space_id } = defineProps<{ space_id?: GroupType["id"] }>()
</script>
<template>
  <FormGroup :space_id="space_id" />
</template>
