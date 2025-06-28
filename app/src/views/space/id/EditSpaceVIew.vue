<script setup lang="ts">
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { Button } from "primevue"
  import { computed, ref, watch } from "vue"
  import { ColorSchema } from "@/types/color"
  import BaseSection from "@/components/BaseSection.vue"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import { NewGroupSchema, type GroupType, type NewGroupType } from "@/types/groupType"
  import SubHeader from "@/components/Header/SubHeader.vue"
  import ChoiceColor from "@/components/Space/NewSpace/ChoiceColor.vue"
  import CategoriesSelection from "@/components/Space/Form/CategoriesSelection.vue"
  import FormInput from "@/components/InputComponent/FormInput.vue"
  import Members from "@/components/Space/Form/Members.vue"
  import type { NewCategoryType } from "@/types/categoryType"
  import { useMutation, useQueryClient } from "@tanstack/vue-query"
  import router from "@/router"
  import { editGroup, postGroup } from "@/services/groupService"
  import { useAuthStore } from "@/stores/authStore"
  import { useGroupsStore } from "@/stores/groupStore"
  import { getSpaceColor } from "@/utils/getColor"
  // Props
  const { space_id } = defineProps<{ space_id?: GroupType["id"] }>()
  // Store
  const { user } = useAuthStore()
  const { groupById } = useGroupsStore()
  const group = computed(() => groupById({ id: space_id }))

  // Const
  const selectedIndex = ref<number | null>(null)
  const currentCategories = ref<NewCategoryType[]>([])

  watch(
    () => group.value,
    (updateGroup) => {
      if (updateGroup) {
        selectedIndex.value =
          updateGroup.color && updateGroup.color !== "gray"
            ? ColorSchema.options.filter((color) => color !== "gray").indexOf(updateGroup.color)
            : null

        currentCategories.value =
          updateGroup.categories?.filter((category) => category.label !== "default") ?? []
      }
    },
    { immediate: true },
  )

  // Mutation
  const queryClient = useQueryClient()
  const createGroupMutation = useMutation({
    mutationFn: (data: NewGroupType) => postGroup(data),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["groups-by-user", user?.id] })
      router.push({ name: "spaces" })
    },
  })

  const editGroupMutation = useMutation({
    mutationFn: (data: NewGroupType) => {
      if (!group.value?.id) {
        return Promise.reject(new Error("ID du groupe manquant"))
      }
      return editGroup(group.value.id, data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["groups-by-user", user?.id] })
      router.push({ name: "spaces" })
    },
  })

  // Action
  const handleClick = (i: number) => {
    selectedIndex.value = selectedIndex.value === i ? null : i
  }
  console.log(currentCategories.value)
  const onFormSubmit = (form: FormSubmitEvent) => {
    if (selectedIndex.value === null) return
    console.log(currentCategories.value.values)
    const data: NewGroupType = {
      name: form.states.name.value,
      type: "occasional",
      color: ColorSchema.options.filter((color) => color !== "gray")[selectedIndex.value],
      categories: currentCategories.value,
    }
    group.value ? editGroupMutation.mutate(data) : createGroupMutation.mutate(data)
  }

  const onDelete = () => {}
</script>

<template>
  <SubHeader
    :label="group ? group.name : 'Nouveau space'"
    :color="group ? group.color : 'gray'"
    :routeName="group ? 'space' : 'home'"
    :params="group ? { space_id: group.id } : {}"
  />

  <Form
    v-slot="$form"
    :initialValues="{
      name: group?.name ?? '',
      type: group?.type ?? 'daily',
    }"
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
    <div class="flex flex-col gap-3 w-64 self-center" v-if="group">
      <Button
        :class="[getSpaceColor({ color: group?.color })]"
        type="submit"
        label="Modifier le groupe"
      />

      <Button
        variant="outlined"
        @click="onDelete()"
        :class="getSpaceColor({ color: group?.color, outlined: true })"
        label="Supprimer le groupe"
      />
    </div>
    <Button
      class="w-64"
      :class="[getSpaceColor({ color: 'gray' })]"
      type="submit"
      v-else
      label="Créer le groupe"
    />
  </Form>
</template>
