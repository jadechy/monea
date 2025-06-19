<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import PeopleComponent from "@/components/PeopleComponent.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import { peoplesData } from "@/data/people"
  import { Button, Checkbox, DatePicker, InputNumber, InputText, Select } from "primevue"
  import { computed, onMounted, ref } from "vue"
  import { getSpaceColor, getColors } from "@/utils/getColor"
  import type { ErrorType } from "@/types/error"
  import type { FetchNewExpenseType } from "@/types/expense"
  import { fetchNewExpense } from "@/services/expenseService"
  import type { ColorType } from "@/types/color"
  import type { CategoryType } from "@/types/category"
  import type { UserType } from "@/types/user"
  import { useGroupStore } from "@/stores/groupStore"
  import type { GroupType } from "@/types/group"
  import { useAuthStore } from "@/stores/authStore"
  const props = defineProps<{ space_id: GroupType["id"] }>()

  const selectedCategory = defineModel<CategoryType>("selectedCategory")
  const selectedAuthor = defineModel<UserType>("selectedAuthor")
  const selectedDate = defineModel<Date>("selectedDate")
  const auth = useAuthStore()
  console.log(auth.token)
  const members = ref<boolean[]>([])
  const groupStore = useGroupStore()
  const group = groupStore.getGroupById(props.space_id)

  console.log(group)

  const isNew = false

  const error = ref<ErrorType>(null)
  // onMounted(async () => {

  //   if (resultGroup === null) {
  //     error.value = "Erreur lors du chargement des utilisateurs"
  //   } else {
  //     group.value = resultGroup
  //     members.value = group.value.members.map(() => false)
  //   }
  // })

  const handleClick = (i: number) => {
    members.value[i] = !members.value[i]
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
      v-if="group?.categories"
      editable
      showClear
      v-model="selectedCategory"
      :options="group.categories"
      optionLabel="label"
      placeholder="Choisir une catégorie"
      class="w-full md:w-56"
      :class="[`bg-${selectedCategory?.color}-100`, `hover:bg-${selectedCategory?.color}-50`]"
      :labelClass="['capitalize', `text-${selectedCategory?.color}-800`]"
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
      <DatePicker
        v-model="selectedDate"
        showIcon
        iconDisplay="input"
        :default-value="new Date()"
        placeholder="jj/mm/yyyy"
      />
    </div>
    <!-- <BaseSection label="Participants" class="w-full" v-if="group?.members">
      <PeopleComponent
        v-for="(member, i) in group?.members"
        :key="member.memberId"
        :user-id="member.memberId"
      >
        <Checkbox :v-model="members[i]" binary />
      </PeopleComponent>
    </BaseSection> -->

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
