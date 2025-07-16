<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { Button, Password } from "primevue";
import { Form } from "@primevue/forms";
import type { FormSubmitEvent } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { LoginRequestSchema } from "~/types/authType";
import WrapperInput from "~/components/ui-kit/input/WrapperInput.vue";
import GoogleComponent from "~/components/ui-kit/GoogleComponent.vue";
import FormInput from "~/components/ui-kit/input/FormInput.vue";

const { loginMutation } = useAuthStore();
const submitLogin = async (form: FormSubmitEvent) => {
  if (!form.valid) return;
  loginMutation.mutate({
    username: form.states.pseudonym.value,
    password: form.states.password.value,
  });
};
useSeo({
  title: "Connexion - Monéa",
  description:
    "Connectez-vous à Monéa pour accéder à vos comptes et gérer vos finances en toute simplicité.",
  ogTitle: "Connexion à Monéa",
  ogDescription:
    "Accédez à votre compte Monéa et gérez vos budgets et dépenses facilement.",
});
</script>

<template>
  <h2 class="text-center text-4xl mb-14">Connexion</h2>
  <Form
    v-slot="$form"
    :resolver="zodResolver(LoginRequestSchema)"
    class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
    @submit="submitLogin"
  >
    <div class="flex justify-center">
      <GoogleComponent />
    </div>
    <FormInput
      name="pseudonym"
      placeholder="Ton pseudo"
      :form="$form"
      autocomplete="username"
    />
    <div class="w-full">
      <WrapperInput :form="$form" name="password" placeholder="Mot de passe">
        <Password
          fluid
          name="password"
          class="w-full"
          toggle-mask
          :feedback="false"
          :input-props="{ autocomplete: 'current-password' }"
        />
      </WrapperInput>
      <RouterLink
        :to="{ name: 'auth-forgot' }"
        class="w-full text-end block text-gray-400 hover:underline"
        >J'ai oublié mon mot de passe</RouterLink
      >
    </div>
    <div class="flex flex-col items-center gap-0.5">
      <Button type="submit" class="w-fit">Se connecter</Button>
      <RouterLink :to="{ name: 'auth-register' }" class="hover:underline"
        >Pas encore de compte</RouterLink
      >
    </div>
  </Form>
</template>
