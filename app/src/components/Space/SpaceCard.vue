<script setup lang="ts">
  import type { GroupType } from "@/types/groupType"

  interface Props {
    group: GroupType
  }

  defineProps<Props>()
</script>
<template>
  <router-link
    :to="{ name: 'space', params: { space_id: group.id } }"
    :class="[`bg-${group.color}-100`, `hover:bg-${group.color}-200`]"
    class="p-2.5 rounded-2xl transition-all text-gray-700"
  >
    <div class="bg-gray-200 h-32 mb-6" />
    <div class="flex items-center justify-between" :class="`text-${group.color}-500`">
      <p>{{ group.name }}</p>
      <i class="pi pi-chevron-right"></i>
    </div>
  </router-link>
</template>
