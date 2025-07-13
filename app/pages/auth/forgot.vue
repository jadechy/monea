<script setup lang="ts">
  import { Button } from "primevue";
  import { Form, type FormSubmitEvent } from "@primevue/forms";
  import FormInput from "~/components/ui-kit/input/FormInput.vue";
  import { useAuthService } from "~/composables/services/authService";
  import { useMutation } from "@tanstack/vue-query";
  import {
    type ForgotRequestType,
  } from "~/types/authType";

  const router = useRouter();
  const { forgot } = useAuthService();
  const forgotMutation = useMutation({
    mutationFn: (data: ForgotRequestType) => forgot(data),
    onSuccess: () => {
      router.push({ name: "auth-reset" });
    },
  });

  const submitForgot = async (form: FormSubmitEvent) => {
  if (!form.valid) return;
    const email = form.states.email.value;
    forgotMutation.mutate({ email });
  };
</script>

<template>
  <h2 class="text-center text-4xl mb-14">Mot de passe oublié</h2>

  <Form
    v-slot="$form"
    @submit="submitForgot"
    class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
  >

    <FormInput
      name="email"
      placeholder="Ton email"
      :form="$form"
      autocomplete="email"
    />

    <div class="flex flex-col items-center gap-0.5">
      <Button type="submit" class="w-fit">Envoyer un mail</Button>
      <RouterLink :to="{ name: 'auth-login' }"
        class="hover:underline">Déjà un compte</RouterLink
      >
      <RouterLink :to="{ name: 'auth-register' }" class="hover:underline"
        >Pas encore de compte</RouterLink>
    </div>
  </Form>
</template>

<style></style>
