<script setup lang="ts">
  import { useAuthStore } from "@/stores/authStore"
  import { Button, Password } from "primevue"
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import { LoginRequestSchema } from "../../../../app/types/authType"
  import FormInput from "@/components/InputComponent/FormInput.vue"
  import WrapperInput from "@/components/InputComponent/WrapperInput.vue"
  import GoogleComponent from "@/components/GoogleComponent.vue"
  import { useForm } from "@primevue/forms/useform"

  const { loginMutation } = useAuthStore()
  const submitLogin = async (form: FormSubmitEvent) => {
    if (!form.valid) return
    loginMutation.mutate({
      username: form.states.pseudonym.value,
      password: form.states.password.value,
    })
  }

  const form = useForm({
    resolver: zodResolver(LoginRequestSchema),
  })
</script>

<template>
  <h2 class="text-center text-4xl mb-14">Connexion</h2>

  <Form
    :form="form"
    @submit="submitLogin"
    :resolver="zodResolver(LoginRequestSchema)"
    class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
  >
    <div class="flex justify-center">
      <GoogleComponent />
    </div>
    <FormInput name="pseudonym" placeholder="Ton pseudo" :form="form" autocomplete="username" />
    <div class="w-full">
      <WrapperInput :form="form" name="password" placeholder="Mot de passe">
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
