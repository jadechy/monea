<script setup lang="ts" ssr="false">
import { Form  } from "@primevue/forms";
import type {FormSubmitEvent} from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useAuthStore } from "@/stores/authStore";
import { useGroupsStore } from "@/stores/groupStore";
import { storeToRefs } from "pinia";
import { UserEditSchema  } from "~/types/user";
import type {UserEditType} from "~/types/user";
const { updateUser, deleteUserMutation } = useAuthStore();
const { user } = storeToRefs(useAuthStore());

const { personnalGroup } = storeToRefs(useGroupsStore());
const onFormSubmit = (form: FormSubmitEvent) => {
  if (!form.valid) return;

  const data = Object.entries(form.states).reduce((acc, [key, state]) => {
    const k = key as keyof UserEditType;
    acc[k] = state.value;
    return acc;
  }, {} as UserEditType);
  updateUser.mutate({ ...data, birthday: convertToLocalDate(data.birthday) });
};
useSeo({
  title: "Modifier mon compte",
  description:
    "Mettez à jour vos informations personnelles, paramètres de sécurité et préférences de compte sur Monéa.",
  ogTitle: "Édition de compte",
  ogDescription:
    "Personnalisez et sécurisez votre compte utilisateur en modifiant vos informations sur Monéa.",
  image: user.value?.picture ?? undefined,
});
const handleDelete = () => {
  if (confirm("Es-tu sûr de vouloir supprimer ton compte ?")) {
    deleteUserMutation.mutate();
  }
};
</script>

<template>
  <SubHeader
    label="Modifier mon profil"
    :color="personnalGroup?.color || 'gray'"
    to="/user"
  />
  <ClientOnly>
    <template v-if="user">
      <Form
        v-slot="$form"
        :initial-values="user"
        :resolver="zodResolver(UserEditSchema)"
        class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
        @submit="onFormSubmit"
      >
        <FormInput name="lastname" placeholder="Nom" :form="$form" />
        <FormInput name="name" placeholder="Prénom" :form="$form" />

        <WrapperInput
          name="birthday"
          placeholder="Date de naissance"
          :form="$form"
        >
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
        <div class="w-full flex flex-col items-center gap-3">
          <Button
            type="submit"
            class="w-64"
            :class="[getGroupColor({ color: personnalGroup?.color })]"
            label="Enregistrer les modifications"
          />
          <Button
            variant="outlined"
            class="w-64"
            :class="[
              getGroupColor({ color: personnalGroup?.color, outlined: true }),
            ]"
            label="Supprimer mon compte"
            @click="handleDelete"
          />
        </div>
      </Form>
    </template>
  </ClientOnly>
</template>
