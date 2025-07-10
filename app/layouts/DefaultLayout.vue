<script setup lang="ts">
  import Header from "@/components/Header/HeaderComponent.vue"
  import Loading from "@/components/LoadingComponent.vue"
  import { useGroupsStore } from "@/stores/groupStore"
  import { storeToRefs } from "pinia"
  const { isLoading } = storeToRefs(useGroupsStore())
</script>
<template>
  <Header />
  <main class="lg:px-10 px-5">
    <Loading v-if="isLoading" />
    <RouterView v-else />
  </main>
</template>
