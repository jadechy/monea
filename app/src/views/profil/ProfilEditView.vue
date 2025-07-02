<script setup lang="ts">
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { Button } from "primevue"
  import { DatePicker } from "primevue"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import FormInput from "@/components/InputComponent/FormInput.vue"
  import WrapperInput from "@/components/InputComponent/WrapperInput.vue"
  import { UserEditSchema, type UserEditType } from "@/types/user"
  import { useAuthStore } from "@/stores/authStore"
  import { useGroupsStore } from "@/stores/groupStore"
  import { storeToRefs } from "pinia"
  import SubHeader from "@/components/Header/SubHeader.vue"
  import { getSpaceColor } from "@/utils/getColor"
  import { convertToLocalDate } from "@/utils/date"
  const { user, updateUser } = useAuthStore()

  const { personnalGroup } = storeToRefs(useGroupsStore())

  const onFormSubmit = (form: FormSubmitEvent) => {
    if (!form.valid) return

    const data = Object.entries(form.states).reduce((acc, [key, state]) => {
      const k = key as keyof UserEditType
      acc[k] = state.value
      return acc
    }, {} as UserEditType)
    updateUser.mutate({ ...data, birthday: convertToLocalDate(data.birthday) })
  }
</script>

<template>
  <SubHeader
    v-if="personnalGroup"
    label="Modifier mon profil"
    :color="personnalGroup.color"
    routeName="profil"
  />
  <Form
    v-if="user"
    v-slot="$form"
    :initialValues="user"
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

    <FormInput name="email" placeholder="Email" type="email" :form="$form" autocomplete="email" />
    <FormInput name="username" placeholder="Pseudonyme" :form="$form" autocomplete="username" />

    <Button
      type="submit"
      class="w-64"
      :class="[getSpaceColor({ color: personnalGroup?.color })]"
      label="Enregistrer les modifications"
    />
  </Form>
</template>
