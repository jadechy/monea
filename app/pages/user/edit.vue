<script setup lang="ts">
import { Form, type FormSubmitEvent } from "@primevue/forms";
import { Button, FileUpload } from "primevue";
import { DatePicker } from "primevue";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useAuthStore } from "@/stores/authStore";
import { useGroupsStore } from "@/stores/groupStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { UserEditSchema, type UserEditType } from "~/types/user";
const { user, updateUser } = useAuthStore();

const { personnalGroup } = storeToRefs(useGroupsStore());
const fileupload = ref();

const onFormSubmit = (form: FormSubmitEvent) => {
  if (!form.valid) return;

  const data = Object.entries(form.states).reduce((acc, [key, state]) => {
    const k = key as keyof UserEditType;
    acc[k] = state.value;
    return acc;
  }, {} as UserEditType);
  const uploadedFile = fileupload.value?.files?.[0] || null;

  const formData = new FormData();
  if (uploadedFile) {
    formData.append("picture", uploadedFile);
  }
  Object.entries(data).forEach(([key, value]) => {
    if (key === "birthday" && value) {
      formData.append("birthday", convertToLocalDate(value).toISOString());
    } else {
      formData.append(key, value as string);
    }
  });

  updateUser.mutate(formData);
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
    <FileUpload
      ref="fileupload"
      mode="basic"
      name="demo[]"
      accept="image/*"
      :maxFileSize="1000000"
    />

    <Button
      type="submit"
      class="w-64"
      :class="[getGroupColor({ color: personnalGroup?.color })]"
      label="Enregistrer les modifications"
    />
  </Form>
</template>
