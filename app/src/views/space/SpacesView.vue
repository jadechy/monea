<script setup lang="ts">
  import AddAction from "@/components/AddAction.vue"
  import AllSpace from "@/components/Space/AllSpace.vue"
  import PersonalSpace from "@/components/Space/PersonalSpace.vue"
</script>

<template>
  <div class="mt-5">
    <PersonalSpace />
    <AllSpace />
  </div>
  <AddAction route-name="new_space" />
</template>
