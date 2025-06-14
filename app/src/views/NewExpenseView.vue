<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import PeopleComponent from "@/components/PeopleComponent.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import { peoplesData } from "@/data/people"
  import { Button, Checkbox, DatePicker, InputNumber, InputText, Select } from "primevue"
  import { computed, onMounted, ref } from "vue"
  import { getSpaceColor, getColors } from "@/services/getColor"
  import type { ErrorType } from "@/types/error"
  import type { FetchNewExpenseType } from "@/types/expense"
  import { fetchNewExpense } from "@/services/expenseService"
  import type { ColorType } from "@/types/color"
  import type { CategoryType } from "@/types/category"
  import type { UserType } from "@/types/user"

  const selectedCategory = defineModel<CategoryType["label"]>("selectedCategory")
  const selectedAuthor = defineModel<UserType>("selectedAuthor")
  const selectedDate = defineModel<Date>("selectedDate")

  const isNew = false
  const props = defineProps<{ space_id: string }>()

  const group = ref<FetchNewExpenseType>()
  const error = ref<ErrorType>(null)
  onMounted(async () => {
    const resultGroup = await fetchNewExpense(props.space_id)

    if (resultGroup === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      group.value = resultGroup
    }
  })
  const colorCategoryStyle = computed(() => {
    const currentCategory = group.value?.categories.filter(
      (category) => selectedCategory.value === category.label,
    )[0]
    return getColors({
      array: group.value?.categories.map((category) => category.color) as ColorType[],
    })[(currentCategory && currentCategory.color) ?? "gray"]
  })
  const categoryLabel: string[] = (group.value?.categories ?? [])
    .filter((category) => category.label !== "default" && category.label !== null)
    .map((category) => category.label!)
  const participants = defineModel<boolean[]>({
    default: group.value?.members.map(() => false),
  })

  const handleClick = (i: number) => {
    participants.value[i] = !participants.value[i]
    const postData = {}
  }
</script>

<template>
  <SubHeader
    label="Nouveau expense"
    :color="group?.color"
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
      <PeopleComponent v-for="(member, i) in group?.members" :key="member.id" :user="member">
        <Checkbox :v-model="participants[i]" binary />
      </PeopleComponent>
    </BaseSection>

    <Button class="w-64" v-if="isNew" :class="[getSpaceColor({ color: group?.color })]"
      >Créer le expense</Button
    >
    <div class="flex flex-col gap-3 w-64" v-if="!isNew">
      <Button :class="[getSpaceColor({ color: group?.color })]">Modifier le expense</Button>
      <Button variant="outlined" :class="getSpaceColor({ color: group?.color, outlined: true })"
        >Supprimer le expense</Button
      >
    </div>
  </div>
</template>
