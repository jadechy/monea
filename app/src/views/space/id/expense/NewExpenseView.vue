<script setup lang="ts">
  import SubHeader from "@/components/Header/SubHeader.vue"
  import { peoplesData } from "@/data/people"
  import { Button, DatePicker, InputNumber, InputText, Message, Select } from "primevue"
  import { getSpaceColor } from "@/utils/getColor"
  import type { CategoryType } from "@/types/categoryType"
  import type { UserType } from "@/types/user"
  import type { GroupType } from "@/types/groupType"
  import { computed, ref } from "vue"
  import { useGroups } from "@/composables/useGroups"
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { NewExpenseSchema } from "@/types/expenseType"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()

  const selectedCategory = defineModel<CategoryType>("selectedCategory")
  const selectedAuthor = defineModel<UserType>("selectedAuthor")
  const selectedDate = defineModel<Date>("selectedDate")
  const members = ref<boolean[]>([])
  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: space_id }))
  const initialValues = {
    category: {},
    title: "",
    amount: 0,
    // author: null as string | null,
    spendAt: new Date(),
  }

  const isNew = true

  const onFormSubmit = (values: FormSubmitEvent) => {
    console.log("Form submitted with:", values)
    // Ici tu peux appeler ton API, store, etc.
  }
  const handleClick = (i: number) => {
    members.value[i] = !members.value[i]
    const postData = {}
  }
</script>

<template v-if="group">
  <SubHeader
    label="Nouveau expense"
    :color="group?.color"
    routeName="space"
    :params="{ id: space_id }"
  />

  <Form
    v-slot="$form"
    :initialValues="initialValues"
    :resolver="zodResolver(NewExpenseSchema)"
    @submit="onFormSubmit"
    class="flex flex-col items-center gap-10 lg:w-2/3 mx-auto"
  >
    <!-- Catégorie -->
    <div class="w-full space-y-1">
      <Select
        v-if="group?.categories"
        editable
        showClear
        name="category"
        :options="group.categories"
        optionLabel="label"
        placeholder="Choisir une catégorie"
        class="w-full md:w-56"
        :class="[`bg-${selectedCategory?.color}-700`, `hover:bg-${selectedCategory?.color}-600`]"
        :labelClass="['capitalize', `text-white`]"
      />
      <Message v-if="$form.category?.invalid" severity="error" size="small" class="!w-full">{{
        $form.category.error.message
      }}</Message>
    </div>

    <!-- Titre -->
    <div class="w-full space-y-1">
      <InputText placeholder="Nom" class="w-full" name="title" />
      <Message v-if="$form.title?.invalid" severity="error" size="small" class="!w-full">{{
        $form.title.error.message
      }}</Message>
    </div>

    <!-- Montant -->
    <div class="flex gap-4 w-full items-end">
      <div class="flex-1 space-y-1">
        <InputNumber placeholder="Prix" class="w-full" name="amount" />
        <Message v-if="$form.amount?.invalid" severity="error" size="small" class="!w-full">{{
          $form.amount.error.message
        }}</Message>
      </div>
      <p class="text-3xl font-black mb-1">€</p>
    </div>

    <!-- Auteur + Date -->
    <div class="flex justify-between w-full gap-4">
      <Select
        v-model="selectedAuthor"
        :options="peoplesData.map((p) => p.pseudo)"
        placeholder="Sélectionner une personne"
        :labelClass="['capitalize']"
        class="w-2/3"
      />
      <DatePicker
        v-model="selectedDate"
        showIcon
        iconDisplay="input"
        :default-value="new Date()"
        placeholder="jj/mm/yyyy"
        name="spendAt"
      />
    </div>

    <!-- Bouton -->
    <Button
      class="w-64"
      v-if="isNew"
      :class="[getSpaceColor({ color: group?.color })]"
      type="submit"
    >
      Créer le expense
    </Button>

    <div class="flex flex-col gap-3 w-64" v-else>
      <Button :class="[getSpaceColor({ color: group?.color })]" type="submit">
        Modifier le expense
      </Button>
      <Button variant="outlined" :class="getSpaceColor({ color: group?.color, outlined: true })">
        Supprimer le expense
      </Button>
    </div>
  </Form>
</template>
