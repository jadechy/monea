<script setup lang="ts">
import { Button, Drawer } from "primevue";

import { ref } from "vue";

const visible = ref(false);
</script>
<template>
  <header class="flex justify-between lg:px-10 px-5 mt-5 items-center">
    <h1 class="font-extrabold text-4xl mb-1.5">Monéa</h1>
    <nav class="md:flex gap-4 hidden">
      <RouterLink :to="{ name: 'groups' }">Accueil</RouterLink>
      <RouterLink :to="{ name: 'savings' }">Calcul épargne</RouterLink>
      <RouterLink :to="{ name: 'user' }">Profil</RouterLink>
    </nav>
    <Button
      icon="pi pi-bars"
      variant="text"
      class="md:hidden"
      @click="visible = true"
    />
    <Drawer v-model:visible="visible" header="Drawer" position="right">
      <nav class="flex flex-col gap-2">
        <RouterLink :to="{ name: 'groups' }">Accueil</RouterLink>
        <RouterLink :to="{ name: 'savings' }">Calcul épargne</RouterLink>
        <RouterLink :to="{ name: 'user' }">Profil</RouterLink>
      </nav>
    </Drawer>
  </header>
</template>
