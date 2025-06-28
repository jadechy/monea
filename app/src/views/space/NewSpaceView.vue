<script setup lang="ts">
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { Button } from "primevue"
  import { ref } from "vue"
  import { ColorSchema } from "@/types/color"
  import BaseSection from "@/components/BaseSection.vue"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import { NewGroupSchema, type NewGroupType } from "@/types/groupType"
  import SubHeader from "@/components/Header/SubHeader.vue"
  import ChoiceColor from "@/components/Space/NewSpace/ChoiceColor.vue"
  import CategoriesSelection from "@/components/Space/Form/CategoriesSelection.vue"
  import FormInput from "@/components/InputComponent/FormInput.vue"
  import Members from "@/components/Space/Form/Members.vue"
  import type { NewCategoryType } from "@/types/categoryType"
  import { useMutation } from "@tanstack/vue-query"
  import router from "@/router"
  import { postGroup } from "@/services/groupService"

  // Const
  defineProps<{}>()
  const selectedIndex = ref<number | null>(null)
  const currentCategories = ref<NewCategoryType[]>([])

  // Form
  const initialValues = {
    name: "",
    color: "gray",
    type: "daily",
  }

  // Mutation
  const createGroupMutation = useMutation({
    mutationFn: (data: NewGroupType) => postGroup(data),
    onSuccess: async () => {
      router.push({ name: "spaces" })
    },
  })

  // Action
  const handleClick = (i: number) => {
    selectedIndex.value = selectedIndex.value === i ? null : i
  }

  const onFormSubmit = (form: FormSubmitEvent) => {
    if (!selectedIndex.value) return
    const data: NewGroupType = {
      name: form.states.name.value,
      type: "occasional",
      color: ColorSchema.options.filter((color) => color !== "gray")[selectedIndex.value],
      categories: currentCategories.value,
    }
    createGroupMutation.mutate(data)
  }
</script>

<template>
  <SubHeader label="Nouveau space" color="gray" routeName="home" />

  <Form
    v-slot="$form"
    :initialValues="initialValues"
    :resolver="zodResolver(NewGroupSchema)"
    @submit="onFormSubmit"
    class="flex flex-col gap-10"
  >
    <FormInput class="w-full lg:w-3/4" placeholder="Nom du space" name="name" :form="$form" fluid />
    <Members />

    <CategoriesSelection v-model="currentCategories" />
    <BaseSection label="Choisir la couleur">
      <div class="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <ChoiceColor
          v-for="(color, i) in ColorSchema.options.filter((color) => color !== 'gray')"
          :color="color"
          :key="i"
          :selected="selectedIndex === i"
          @click="handleClick(i)"
        />
      </div>
    </BaseSection>

    <Button type="submit" class="w-64 self-center" label="Créer le space" />
  </Form>
</template>

<style></style>
