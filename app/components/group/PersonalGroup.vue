<template>
  <router-link
    v-if="personnalGroup"
    :to="{ name: 'groups-group_id', params: { group_id: personnalGroup.id } }"
    class="item text-gray-700 hover"
  >
    <p>Egroup personnel</p>
    <i class="pi pi-chevron-right"/>
  </router-link>
</template>

<script setup lang="ts">
import { useGroupsStore } from "@/stores/groupStore";
import { storeToRefs } from "pinia";

const { personnalGroup } = storeToRefs(useGroupsStore());
</script>
