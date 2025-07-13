<script setup lang="ts">
import { Form, type FormSubmitEvent } from "@primevue/forms";
import { Button, FileUpload } from "primevue";
import { DatePicker } from "primevue";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useAuthStore } from "@/stores/authStore";
import { useGroupsStore } from "@/stores/groupStore";
import { storeToRefs } from "pinia";
import { UserEditSchema, type UserEditType } from "~/types/user";
const { user, updateUser } = useAuthStore();

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
</script>

<template>
  <SubHeader
    v-if="personnalGroup"
    label="Modifier mon profil"
    :color="personnalGroup.color"
    to="/user"
  />
  <Form
    v-slot="$form"
    v-if="user"
    :form="$form"
    :initialValues="user ? user : undefined"
    :resolver="zodResolver(UserEditSchema)"
    @submit="onFormSubmit"
    class="flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center"
  >
    <FormInput name="lastname" placeholder="Nom" :form="$form" />
    <FormInput name="name" placeholder="Prénom" :form="$form" />

    <WrapperInput name="birthday" placeholder="Date de naissance" :form="$form">
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

    <Button
      type="submit"
      class="w-64"
      :class="[getGroupColor({ color: personnalGroup?.color })]"
      label="Enregistrer les modifications"
    />
  </Form>
</template>
