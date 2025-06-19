<script setup lang="ts">
  import { ref } from "vue"
  import type { ErrorType } from "@/types/error"
  import router from "@/router"
  import { useAuthStore } from "@/stores/authStore"

  const username = ref("")
  const password = ref("")
  const auth = useAuthStore()
  const submitLogin = async () => {
    await auth.login({ username: username.value, password: password.value })
    router.push("/")
  }
</script>

<template>
  <div>
    <h2>Connexion</h2>
    <form @submit.prevent="submitLogin()">
      <input v-model="username" placeholder="Nom d'utilisateur" required />
      <input v-model="password" type="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>
