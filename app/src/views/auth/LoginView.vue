<script setup lang="ts">
  import router from "@/router"
  import { useAuthStore } from "@/stores/authStore"
  import { Button, InputText, Password } from "primevue"
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import { LoginRequestSchema } from "@/types/auth"

  const auth = useAuthStore()
  const submitLogin = async (form: FormSubmitEvent) => {
    await auth.login({ username: form.values.pseudonym, password: form.values.password })
    router.push({ name: "spaces" })
  }
</script>

<template>
  <h2 class="text-center text-4xl mb-14">Connexion</h2>
  <Form
    v-slot="$form"
    @submit="submitLogin"
    :resolver="zodResolver(LoginRequestSchema)"
    class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
  >
    <InputText name="pseudonym" placeholder="Pseudonyme" class="w-full" />
    <div class="w-full">
      <Password placeholder="Mot de passe" fluid name="password" class="w-full" toggleMask />
      <RouterLink
        :to="{ name: 'forgot' }"
        class="w-full text-end block text-gray-400 hover:underline"
        >J'ai oublié mon mot de passe</RouterLink
      >
    </div>
    <div class="flex flex-col items-center gap-0.5">
      <Button type="submit" class="w-fit">Se connecter</Button>
      <RouterLink :to="{ name: 'register' }" class="hover:underline"
        >Pas encore de compte</RouterLink
      >
    </div>
  </Form>
</template>
