<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-4"
  >
    <div class="text-center max-w-md">
      <i class="pi pi-exclamation-triangle text-9xl mb-8" style="color: #fbbf24"></i>

      <h1 class="text-6xl font-bold mb-4">404</h1>
      <p class="text-xl mb-6">Oups... La page que vous cherchez n'existe pas.</p>

      <Button
        label="Retour à l'accueil"
        icon="pi pi-home"
        class="p-button-rounded p-button-lg p-button-outlined"
        @click="goHome"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router"
  import Button from "primevue/button"

  const router = useRouter()

  function goHome() {
    router.push("/")
  }
</script>

<style scoped>
  /* Tu peux ajouter des styles personnalisés ici si besoin */
</style>
