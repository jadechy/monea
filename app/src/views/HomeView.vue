<script setup lang="ts">
  import PersonalSpace from "@/layouts/Home/PersonalSpace.vue"
  import AllSpaceCard from "@/layouts/Home/AllSpace.vue"
  import AddAction from "@/components/AddAction.vue"
</script>

<template>
  <div class="mt-5">
    <PersonalSpace />
    <AllSpaceCard />
  </div>
  <AddAction route-name="new_space" />
</template>
