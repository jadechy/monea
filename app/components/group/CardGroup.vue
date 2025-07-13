<script setup lang="ts">
import type { GroupType } from "@/types/groupType";

interface Props {
  group: GroupType;
}

defineProps<Props>();
</script>
<template>
  <router-link
    :to="`/groups/${group.id}`"
    :class="[
      `bg-${group.color}-100`,
      `hover:bg-${group.color}-200`,
      `text-${group.color}-500`,
    ]"
    class="p-2.5 rounded-2xl transition-all text-gray-700"
  >
    <div class="h-38 mb-4 flex justify-center items-center">
      <img
        v-if="group.picture"
        :src="group.picture"
        class="w-full h-full object-cover rounded-xl"
      >
      <p v-else class="pi pi-wallet text-7xl" />
    </div>
    <div class="flex items-center justify-between font-semibold">
      <p>{{ group.name }}</p>
      <i class="pi pi-chevron-right"/>
    </div>
  </router-link>
</template>
