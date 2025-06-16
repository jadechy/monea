<script setup lang="ts">
  import SpaceCard from "@/layouts/Home/SpaceCard.vue"
  import { onMounted, ref } from "vue"
  import type { GroupType } from "@/types/group"
  import { fetchGroupByUser } from "@/services/groupService"
  import { useGroupStore } from "@/stores/groupStore"

  const groupStore = useGroupStore()
  const groups = groupStore.getGroups()

  const group = groupStore.getGroupById(3)
</script>

<template>
  <article v-if="groups.length > 0" class="grid gap-6 grid-cols-2 lg:grid-cols-3 mt-7">
    <SpaceCard v-for="group in groups" :key="group.id" :group="group" />
  </article>
  <p v-else class="mt-4">Vous n'avez pas encore de groupe.</p>
</template>
