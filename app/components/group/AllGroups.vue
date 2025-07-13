<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGroupsStore } from "@/stores/groupStore";

const groupsStore = useGroupsStore();
const { groups, groupsCount } = storeToRefs(groupsStore);
</script>

<template>
  <article
    v-if="groupsCount > 0"
    class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7"
  >
    <CardGroup v-for="group in groups" :key="group.id" :group="group" />
  </article>
  <p v-else class="mt-4">Vous n'avez pas encore de groupe.</p>
</template>
