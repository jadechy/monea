<script setup lang="ts" ssr="false">
import { Form, type FormSubmitEvent } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useAuthStore } from "@/stores/authStore";
import { useGroupsStore } from "@/stores/groupStore";
import { storeToRefs } from "pinia";
import { UserEditSchema, type UserEditType } from "~/types/user";
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
        :initialValues="user"
        :resolver="zodResolver(UserEditSchema)"
        @submit="onFormSubmit"
        class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
      >
        <FormInput name="lastname" placeholder="Nom" :form="$form" />
        <FormInput name="name" placeholder="Prénom" :form="$form" />

        <WrapperInput
          name="birthday"
          placeholder="Date de naissance"
          :form="$form"
        >
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
            @click="handleDelete"
            :class="[
              getGroupColor({ color: personnalGroup?.color, outlined: true }),
            ]"
            label="Supprimer mon compte"
          />
        </div>
      </Form>
    </template>
  </ClientOnly>
</template>
