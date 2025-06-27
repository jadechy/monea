<script setup lang="ts">
  import { Form } from "@primevue/forms"
  import ColoredLabelComponent from "@/components/CategoryLabel.vue"
  import { Button, InputNumber, InputText, Message } from "primevue"
  import { ref } from "vue"
  import { ColorSchema } from "@/types/color"
  import BaseSection from "@/components/BaseSection.vue"
  import { useForm } from "@primevue/forms/useform"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import { NewGroupSchema, type NewGroupType } from "@/types/groupType"
  import { defaultCategories } from "@/data/defaultCategories"
  import SubHeader from "@/components/Header/SubHeader.vue"
  const selectedIndex = ref<number | null>(null)
  const form = useForm({
    initialValues: {
      name: "",
      color: "gray",
      type: "",
    } as NewGroupType,
    resolver: zodResolver(NewGroupSchema),
  })
  const handleClick = (i: number) => {
    selectedIndex.value = selectedIndex.value === i ? null : i
  }
  const onFormSubmit = form.handleSubmit((data) => {
    console.log("SUBMITTED:")
  })

  defineProps<{}>()
</script>

<template>
  <SubHeader label="Nouveau space" color="gray" routeName="home" />
  <Form v-slot="$form" @submit="onFormSubmit()" class="flex flex-col gap-10">
    <InputText placeholder="Nom du space" class="w-full lg:w-3/4" name="name" fluid />
    <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{
      $form.username.error.message
    }}</Message>

    <BaseSection label="Ajouter un membre">
      <div class="flex flex-col w-full lg:w-3/4">
        <InputText placeholder="Pseudo/mail" class="w-full" />
        <Button variant="outlined" size="small" class="mt-2 ml-auto">
          <i class="pi pi-inbox"></i> Envoyer la demande
        </Button>
      </div>
    </BaseSection>
    <BaseSection label="Budget total">
      <div class="flex gap-10">
        <InputNumber placeholder="0" class="w-full" />
        <p class="text-4xl font-black">€</p>
      </div>
    </BaseSection>

    <BaseSection label="Ajouter une catégorie">
      <div class="flex gap-1.5 flex-wrap">
        <ColoredLabelComponent v-for="category in defaultCategories" :category="category" add />
      </div>
    </BaseSection>
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
