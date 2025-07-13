<script setup lang="ts">
  import { Button } from "primevue"
</script>

<template>
  <div class="flex justify-between px-10 items-center mt-2">
    <h1 class="font-extrabold text-center text-4xl">Monéa</h1>
    <div class="flex gap-4 items-center">
      <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
      <RouterLink :to="{ name: 'login' }"
        ><Button size="small">Commencer à gerer le budgets</Button></RouterLink
      >
    </div>
  </div>
  <RouterView />
</template>
