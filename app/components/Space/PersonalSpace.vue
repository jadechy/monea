<template>
  <router-link
    v-if="personnalGroup"
    :to="{ name: 'space', params: { space_id: personnalGroup.id } }"
    class="item text-gray-700 hover"
  >
    <p>Espace personnel</p>
    <i class="pi pi-chevron-right"></i>
  </router-link>
</template>

<script setup lang="ts">
  import { useGroupsStore } from "@/stores/groupStore"
  import { storeToRefs } from "pinia"

  const { personnalGroup } = storeToRefs(useGroupsStore())
</script>
