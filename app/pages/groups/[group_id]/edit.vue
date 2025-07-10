<script setup lang="ts">
import type { GroupType } from "~/types/groupType";

const { group_id } = defineProps<{ group_id?: GroupType["id"] }>();
</script>
<template>
  <FormGroup :group_id="group_id" />
</template>
