<script setup lang="ts">
import FooterComponent from "~/components/header/FooterComponent.vue";
</script>

<template>
  <HeaderComponent />
  <main class="lg:px-10 px-5"><slot /></main>
  <FooterComponent />
</template>
