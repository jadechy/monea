<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import PeopleComponent from "@/components/PeopleComponent.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import {
    categories,
    categoryLabel as categoryLabelData,
    type CategoryLabel,
  } from "@/data/categoryLabel"
  import { peoplesData, type People } from "@/data/people"
  import { spacesData } from "@/data/spaces"
  import { Button, Checkbox, DatePicker, InputNumber, InputText, Select } from "primevue"
  import { computed } from "vue"
  import { getSpaceColor, getColors } from "@/services/getColor"

  const selectedCategory = defineModel<CategoryLabel>("selectedCategory")
  const selectedAuthor = defineModel<People>("selectedAuthor")
  const selectedDate = defineModel<Date>("selectedDate")
  const participants = defineModel<boolean[]>({
    default: peoplesData.map(() => false),
  })

  const isNew = false
  const props = defineProps<{ space_id: string }>()
  const space = spacesData.find((space) => space.id === props.space_id)
  const categoryLabel = categoryLabelData.filter((label) => label !== "default")
  const colorCategoryStyle = computed(() => {
    const currentCategory = categories.filter(
      (category) => selectedCategory.value === category.label,
    )[0]
    return getColors({ array: categories.map((category) => category.color) })[
      (currentCategory && currentCategory.color) ?? "gray"
    ]
  })

  const handleClick = (i: number) => {
    participants.value[i] = !participants.value[i]
  }
</script>

<template>
  <SubHeader
    label="Nouveau paiement"
    :color="space?.color"
    routeName="space"
    :params="{ id: space_id }"
  />
  <div class="flex flex-col items-center gap-10 lg:w-2/3 mx-auto">
    <Select
      editable
      showClear
      v-model="selectedCategory"
      :options="categoryLabel"
      placeholder="Choisir une catégorie"
      class="w-full md:w-56"
      :class="[colorCategoryStyle.bg, colorCategoryStyle.hover]"
      :labelClass="['capitalize', colorCategoryStyle.text]"
    />
    <InputText placeholder="Nom" class="w-full" />
    <div class="flex gap-10 self-start w-1/2">
      <InputNumber placeholder="Prix" class="w-full" />
      <p class="text-4xl font-black">€</p>
    </div>
    <div class="flex justify-between w-full gap-4">
      <Select
        v-model="selectedAuthor"
        :options="peoplesData.map((p) => p.pseudo)"
        placeholder="Sélectionner une personne"
        :labelClass="['capitalize']"
        class="w-2/3"
      />
      <DatePicker v-model="selectedDate" showIcon iconDisplay="input" placeholder="jj/mm" />
    </div>
    <BaseSection label="Participants" class="w-full">
      <PeopleComponent v-for="(people, i) in peoplesData" :key="i" :people="people">
        <Checkbox :v-model="participants[i]" binary />
      </PeopleComponent>
    </BaseSection>

    <Button class="w-64" v-if="isNew" :class="[getSpaceColor({ color: space?.color })]"
      >Créer le paiement</Button
    >
    <div class="flex flex-col gap-3 w-64" v-if="!isNew">
      <Button :class="[getSpaceColor({ color: space?.color })]">Modifier le paiement</Button>
      <Button variant="outlined" :class="getSpaceColor({ color: space?.color, outlined: true })"
        >Supprimer le paiement</Button
      >
    </div>
  </div>

  <div></div>
</template>

<style></style>
