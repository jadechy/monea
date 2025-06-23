<script setup lang="ts">
  import router from "@/router"
  import { useAuthStore } from "@/stores/authStore"
  import { Button, DatePicker, InputText, Password } from "primevue"
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import { RegisterRequestSchema } from "@/types/auth"

  const auth = useAuthStore()
  const submitRegister = async (form: FormSubmitEvent) => {
    console.log(form)
    // await auth.login({ pseudonym: form.values.pseudonym, password: form.values.password })
    // router.push({ name: "spaces" })
  }
</script>

<template>
  <h2 class="text-center text-4xl mb-14">Inscription</h2>
  <Form
    v-slot="$form"
    @submit="submitRegister"
    :resolver="zodResolver(RegisterRequestSchema)"
    class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
  >
    <InputText name="lastname" placeholder="Nom" fluid />
    <InputText name="name" placeholder="Prénom" fluid />
    <DatePicker
      name="birthday"
      dateFormat="dd/mm/yy"
      showIcon
      fluid
      class="w-full"
      iconDisplay="input"
      placeholder="Date de naissance"
    />
    <InputText type="mail" name="email" placeholder="Email" fluid />
    <InputText name="username" placeholder="Pseudonyme" fluid />
    <Password name="password" placeholder="Mot de passe" toggleMask fluid class="w-full">
      <template #footer>
        <Divider />
        <ul class="pl-2 my-0 leading-normal">
          <li>Au moins une majuscule</li>
          <li>Au moins une minuscule</li>
          <li>Au moins un chiffre</li>
          <li>Minimum 8 characters</li>
        </ul>
      </template>
    </Password>
    <Password
      placeholder="Confirmation mot de passe"
      fluid
      class="w-full"
      :feedback="false"
      toggleMask
      name="confirmPassword"
    />

    <div class="flex flex-col items-center gap-0.5">
      <Button type="submit" class="w-fit">S'inscrire</Button>
      <RouterLink :to="{ name: 'login' }" class="hover:underline">J'ai déjà un compte</RouterLink>
    </div>
  </Form>
</template>
