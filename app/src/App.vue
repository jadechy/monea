<script setup lang="ts">
  import { RouterView } from "vue-router"
</script>

<template>
  <header class="flex justify-between lg:px-10 px-5 mt-5 items-center">
    <h1 class="font-extrabold text-4xl mb-1.5">Monéa</h1>
    <nav class="flex gap-4">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/personal-space">Espace personnel</RouterLink>
      <RouterLink to="/profil">Profil</RouterLink>
    </nav>
  </header>
  <main class="lg:px-10 px-5">
    <RouterView />
  </main>
</template>
