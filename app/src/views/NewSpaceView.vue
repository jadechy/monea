<script setup lang="ts">
  import SubHeader from "@/components/SubHeader.vue"
  import InfoLayout from "@/layouts/NewSpace/InfoLayout.vue"
  defineProps<{}>()
</script>

<template>
  <SubHeader label="Nouveau space" color="gray" routeName="home" />
  <InfoLayout />
</template>

<style></style>
