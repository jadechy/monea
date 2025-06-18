<script setup lang="ts">
import { ref } from 'vue'
import { login } from "@/services/authService"
import type { ErrorType } from '@/types/error'
// import type { ErrorType } from "@/types/error"

const username = ref('')
const password = ref('')
const error = ref<ErrorType>(null)

const submitLogin = async() => {
  // error.value = null
  const data = await login(username.value, password.value)
  console.log(data)
  // if (data === null) {
  //   error.value = "Erreur lors de la connexion. Veuillez vérifier vos identifiants."
  //   return
  // }
  // localStorage.setItem('jwt_token', data.token)
  // router.push('/dashboard')
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