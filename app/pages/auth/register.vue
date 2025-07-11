<script setup lang="ts">
import {
  Button,
  DatePicker,
  Divider,
  FileUpload,
  Message,
  Password,
} from "primevue";
import { Form, type FormSubmitEvent } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { registerAuth } from "~/composables/services/authService";
import { useMutation } from "@tanstack/vue-query";
import { useRoute } from "vue-router";
import { useForm } from "@primevue/forms/useform";
import { ref } from "vue";
import {
  RegisterRequestSchema,
  type RegisterRequestType,
} from "~/types/authType";
import WrapperInput from "~/components/ui-kit/input/WrapperInput.vue";
import FormInput from "~/components/ui-kit/input/FormInput.vue";
import GoogleComponent from "~/components/ui-kit/GoogleComponent.vue";

const route = useRoute();
const router = useRouter();
const fileupload = ref();

const registerMutation = useMutation({
  mutationFn: (data: FormData) => registerAuth(data),
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
  const uploadedFile = fileupload.value?.files?.[0] || null;

  const formData = new FormData();
  if (uploadedFile) {
    formData.append("picture", uploadedFile);
  }
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value as string);
  });
  registerMutation.mutate(formData);
};
const form = useForm({
  resolver: zodResolver(RegisterRequestSchema),
});
</script>

<template>
  <h2 class="text-center text-4xl mb-14">Inscription</h2>
  <Form
    :form="form"
    @submit="submitRegister"
    class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
  >
    <div class="flex justify-center">
      <GoogleComponent />
    </div>
    <FormInput name="lastname" placeholder="Nom" :form="form" />
    <FormInput name="name" placeholder="Prénom" :form="form" />
    <WrapperInput name="birthday" placeholder="Date de naissance" :form="form">
      <DatePicker
        dateFormat="dd/mm/yy"
        showIcon
        fluid
        name="birthday"
        class="w-full"
        iconDisplay="input"
      />
    </WrapperInput>

    <FormInput
      name="email"
      placeholder="Email"
      type="email"
      :form="form"
      autocomplete="email"
    />
    <FormInput
      name="username"
      placeholder="Pseudonyme"
      :form="form"
      autocomplete="username"
    />
    <FileUpload
      ref="fileupload"
      mode="basic"
      name="demo[]"
      accept="image/*"
      :maxFileSize="1000000"
    />
    <WrapperInput name="password" placeholder="Mot de passe" :form="form">
      <Password
        placeholder="Mot de passe"
        name="password"
        toggleMask
        fluid
        class="w-full"
        :inputProps="{
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
      :form="form"
      name="confirmPassword"
      placeholder="Confirmation mot de passe"
    >
      <Password
        name="confirmPassword"
        placeholder="Confirmation mot de passe"
        fluid
        class="w-full"
        :feedback="false"
        toggleMask
        :inputProps="{
          autocomplete: 'new-password',
        }"
      />
      <Message
        severity="error"
        size="small"
        v-if="
          form.states.confirmPassword?.value &&
          form.states.password?.value &&
          form.states.confirmPassword.value !== form.states.password.value
        "
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
