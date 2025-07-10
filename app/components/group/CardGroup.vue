<script setup lang="ts">
import type { GroupType } from "@/types/groupType";

interface Props {
  group: GroupType;
}

defineProps<Props>();
</script>
<template>
  <router-link
    :to="{ name: 'groups-group_id', params: { group_id: group.id } }"
    :class="[
      `bg-${group.color}-100`,
      `hover:bg-${group.color}-200`,
      `text-${group.color}-500`,
    ]"
    class="p-2.5 rounded-2xl transition-all text-gray-700"
  >
    <div class="h-32 mb-6 flex justify-center items-center">
      <img :src="group.picture" class="w-full h-full" v-if="group.picture" />
      <p v-else class="pi pi-wallet text-7xl" />
    </div>
    <div class="flex items-center justify-between font-semibold">
      <p>{{ group.name }}</p>
      <i class="pi pi-chevron-right"></i>
    </div>
  </router-link>
</template>
