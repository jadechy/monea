<script setup lang="ts">
  import router from "@/router"
  import { useAuthStore } from "@/stores/authStore"
  import { Button, Password } from "primevue"
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import { LoginRequestSchema } from "@/types/auth"
  import FormInput from "@/components/Input/FormInput.vue"
  import WrapperInput from "@/components/Input/WrapperInput.vue"

  const auth = useAuthStore()
  const submitLogin = async (form: FormSubmitEvent) => {
    console.log(form.valid)
    if (!form.valid) return
    await auth.login({
      username: form.states.pseudonym.value,
      password: form.states.password.value,
    })
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
    <FormInput name="pseudonym" placeholder="Ton pseudo" :form="$form" autocomplete="username" />
    <div class="w-full">
      <WrapperInput :form="$form" name="password" placeholder="Mot de passe">
        <Password
          fluid
          name="password"
          class="w-full"
          toggleMask
          :feedback="false"
          :inputProps="{ autocomplete: 'current-password' }"
        />
      </WrapperInput>
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
