<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore"
import { onMounted } from "vue"
 
const {loginGoogle}= useAuthStore()

onMounted(async() => {
    await loginGoogle()
})
</script>

<template>
  <div class="p-4 text-center">Connexion en cours...</div>
</template>
