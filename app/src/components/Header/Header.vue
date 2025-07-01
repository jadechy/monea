<script setup lang="ts">
  import router from "@/router"
  import { useAuthStore } from "@/stores/authStore"
  import { Button, Drawer } from "primevue"

  import { ref } from "vue"

  const visible = ref(false)
  const authStore = useAuthStore()
</script>
<template>
  <header class="flex justify-between lg:px-10 px-5 mt-5 items-center">
    <h1 class="font-extrabold text-4xl mb-1.5">Monéa</h1>
    <nav class="md:flex gap-4 hidden">
      <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
      <RouterLink :to="{ name: 'space', params: { space_id: 6 } }">Espace personnel</RouterLink>
      <RouterLink :to="{ name: 'profil' }">Profil</RouterLink>
      <p @click="(authStore.clearAuth(), router.push({ name: 'login' }))">Deconnexion</p>
    </nav>
    <Button icon="pi pi-bars" variant="text" @click="visible = true" class="md:hidden" />
    <Drawer v-model:visible="visible" header="Drawer" position="right">
      <nav class="flex flex-col gap-2">
        <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
        <RouterLink :to="{ name: 'space', params: { space_id: 6 } }">Espace personnel</RouterLink>
        <RouterLink :to="{ name: 'profil' }">Profil</RouterLink>
        <p @click="(authStore.clearAuth(), router.push({ name: 'login' }))">Deconnexion</p>
      </nav>
    </Drawer>
  </header>
</template>
