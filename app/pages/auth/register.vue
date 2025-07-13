<script setup lang="ts">
import { Button, DatePicker, Divider, Message, Password } from "primevue";
import { Form } from "@primevue/forms";
import type { FormSubmitEvent } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useAuthService } from "~/composables/services/authService";
import { useMutation } from "@tanstack/vue-query";
import { useRoute } from "vue-router";
import { RegisterRequestSchema } from "~/types/authType";
import type { RegisterRequestType } from "~/types/authType";
import WrapperInput from "~/components/ui-kit/input/WrapperInput.vue";
import FormInput from "~/components/ui-kit/input/FormInput.vue";
import GoogleComponent from "~/components/ui-kit/GoogleComponent.vue";
import type { UserEditType } from "~/types/user";
import { useSeo } from "~/composables/useSeo";

const route = useRoute();
const router = useRouter();
const { register } = useAuthService();
const registerMutation = useMutation({
  mutationFn: (data: UserEditType) => register(data),
  onSuccess: () => {
    router.push({ name: "auth-confirm" });
  },
});

const submitRegister = async (form: FormSubmitEvent) => {
  if (!form.valid) return;

  const data = Object.entries(form.states).reduce((acc, [key, state]) => {
    const k = key as keyof RegisterRequestType;
    acc[k] = state.value;
    return acc;
  }, {} as RegisterRequestType);

  if (data.password !== data.confirmPassword) return;

  const invitationToken = route.query.invitationToken as string | undefined;
  if (invitationToken) {
    data.invitationToken = invitationToken;
  }

  registerMutation.mutate(data);
};
useSeo({
  title: "Créer un compte - Monéa",
  description:
    "Inscrivez-vous sur Monéa pour commencer à gérer facilement vos budgets et vos dépenses.",
  ogTitle: "Création de compte Monéa",
  ogDescription:
    "Rejoignez Monéa et prenez le contrôle de vos finances en quelques clics.",
});
</script>

<template>
  <h2 class="text-center text-4xl mb-14">Inscription</h2>
  <Form
    v-slot="$form"
    :resolver="zodResolver(RegisterRequestSchema)"
    class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
    @submit="submitRegister"
  >
    <div class="flex justify-center">
      <GoogleComponent />
    </div>
    <FormInput name="lastname" placeholder="Nom" :form="$form" />
    <FormInput name="name" placeholder="Prénom" :form="$form" />
    <WrapperInput name="birthday" placeholder="Date de naissance" :form="$form">
      <DatePicker
        date-format="dd/mm/yy"
        show-icon
        fluid
        name="birthday"
        class="w-full"
        icon-display="input"
      />
    </WrapperInput>

    <FormInput
      name="email"
      placeholder="Email"
      type="email"
      :form="$form"
      autocomplete="email"
    />
    <FormInput
      name="username"
      placeholder="Pseudonyme"
      :form="$form"
      autocomplete="username"
    />
    <WrapperInput name="password" placeholder="Mot de passe" :form="$form">
      <Password
        placeholder="Mot de passe"
        name="password"
        toggle-mask
        fluid
        class="w-full"
        :input-props="{
          autocomplete: 'new-password',
        }"
      >
        <template #footer>
          <Divider />
          <ul class="pl-2 my-0 leading-normal">
            <li>Au moins une majuscule</li>
            <li>Au moins une minuscule</li>
            <li>Au moins un chiffre</li>
            <li>Minimum 8 caractères</li>
          </ul>
        </template>
      </Password>
    </WrapperInput>

    <WrapperInput
      :form="$form"
      name="confirmPassword"
      placeholder="Confirmation mot de passe"
    >
      <Password
        name="confirmPassword"
        placeholder="Confirmation mot de passe"
        fluid
        class="w-full"
        :feedback="false"
        toggle-mask
        :input-props="{
          autocomplete: 'new-password',
        }"
      />
      <Message
        v-if="
          $form.confirmPassword?.value &&
          $form.password?.value &&
          $form.confirmPassword.value !== $form.password.value
        "
        severity="error"
        size="small"
      >
        Les mots de passe ne correspondent pas
      </Message>
    </WrapperInput>
    <div class="flex flex-col items-center gap-0.5">
      <Button type="submit" class="w-fit">S'inscrire</Button>
      <RouterLink :to="{ name: 'auth-login' }" class="hover:underline"
        >J'ai déjà un compte</RouterLink
      >
    </div>
  </Form>
</template>
