<script setup lang="ts">
import { Button } from "primevue";
import FooterComponent from "~/components/header/FooterComponent.vue";
</script>

<template>
  <header class="flex justify-between px-5 md:px-10 items-center mt-2">
    <h1 class="font-extrabold text-center text-4xl">Monéa</h1>
    <div class="flex gap-4 items-center">
      <RouterLink :to="{ name: 'index' }">Accueil</RouterLink>
      <RouterLink :to="{ name: 'auth-login' }"
        ><Button size="small">Authentification</Button></RouterLink
      >
    </div>
  </header>
  <slot />
  <FooterComponent />
</template>
