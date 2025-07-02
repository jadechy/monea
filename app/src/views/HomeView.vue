<script setup lang="ts">
  import { RouterLink } from "vue-router"
</script>

<template>
  <p>home</p>
  <RouterLink :to="{ name: 'login' }" class="btn">Se connecter</RouterLink>
</template>

<style></style>
