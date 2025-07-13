<script setup lang="ts">
    import { Button } from "primevue";
    import { Form  } from "@primevue/forms";
import type {FormSubmitEvent} from "@primevue/forms";
    import { useAuthService } from "~/composables/services/authService";
    import { useRoute } from "vue-router";
    import { useMutation } from "@tanstack/vue-query";
    import type {ResetRequestType} from "~/types/authType";

    const route = useRoute();
    const router = useRouter();
    const { reset } = useAuthService();
    const resetMutation = useMutation({
        mutationFn: (data: ResetRequestType) => reset(data),
        onSuccess: () => {
        router.push({ name: "auth-login" });
        },
    });

    const submitReset = async (form: FormSubmitEvent) => {
        if (!form.valid) return;

        const password = form.states.password.value;
        const repeatPassword = form.states.passwordConfirm.value;

        if (password !== repeatPassword) {
            alert("Les mots de passe ne correspondent pas.");
            return;
        }

        const resetToken = route.query.resetToken as string | null;

        resetMutation.mutate({ password, repeatPassword, resetToken});
    };

</script>

<template>
    <h2 class="text-center text-4xl mb-14">Réinitialisation de votre mot de passe</h2>

    <Form
    v-slot="$form"
    class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
    @submit="submitReset">

    <WrapperInput :form="$form" name="password" placeholder="Nouveau mot de passe">
        <Password
        name="password"
        class="w-full"
        toggle-mask
        fluid
        :feedback="false"
        :input-props="{ autocomplete: 'new-password' }"
        />
        <template #footer>
          <Divider />
          <ul class="pl-2 my-0 leading-normal">
            <li>Au moins une majuscule</li>
            <li>Au moins une minuscule</li>
            <li>Au moins un chiffre</li>
            <li>Minimum 8 caractères</li>
          </ul>
        </template>
    </WrapperInput>

    <WrapperInput :form="$form" name="passwordConfirm" placeholder="Confirme ton mot de passe">
        <Password
        name="passwordConfirm"
        class="w-full"
        toggle-mask
        fluid
        :feedback="false"
        :input-props="{ autocomplete: 'new-password' }"
        />
        <template #footer>
          <Divider />
          <ul class="pl-2 my-0 leading-normal">
            <li>Au moins une majuscule</li>
            <li>Au moins une minuscule</li>
            <li>Au moins un chiffre</li>
            <li>Minimum 8 caractères</li>
          </ul>
        </template>
    </WrapperInput>

    <div class="flex flex-col items-center gap-0.5">
      <Button type="submit" class="w-fit">Enregistrer</Button>
      <RouterLink
:to="{ name: 'auth-login' }"
        class="hover:underline" >Déjà un compte</RouterLink
      >
      <RouterLink :to="{ name: 'auth-register' }" class="hover:underline"
        >Pas encore de compte</RouterLink>
    </div>
  </Form>
</template>