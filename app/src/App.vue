<script setup lang="ts">
  import { RouterView } from "vue-router"
  import Header from "./components/Header.vue"
</script>

<template>
  <Header />
  <main class="lg:px-10 px-5">
    <RouterView />
  </main>
</template>
