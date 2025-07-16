<script setup lang="ts">
import { Form } from "@primevue/forms";
import type { FormSubmitEvent } from "@primevue/forms";
import { Button, RadioButton, RadioButtonGroup } from "primevue";
import { ColorSchema } from "@/types/color";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { GroupTypeEnum, NewGroupSchema } from "@/types/groupType";
import type { NewGroupType } from "@/types/groupType";
import type { NewCategoryType } from "@/types/categoryType";
import { useGroupsStore } from "@/stores/groupStore";
import { getGroupColor as getGroupColor } from "@/utils/getColor";

// Store
const { group } = storeToRefs(useGroupsStore());

// Const
const selectedIndex = ref<number | null>(null);
const currentCategories = ref<NewCategoryType[]>([]);

watch(
  () => group.value,
  (updateGroup) => {
    if (updateGroup) {
      selectedIndex.value =
        updateGroup.color && updateGroup.color !== "gray"
          ? ColorSchema.options
              .filter((color) => color !== "gray")
              .indexOf(updateGroup.color)
          : null;

      currentCategories.value =
        updateGroup.categories?.filter(
          (category) => category.label !== "default"
        ) ?? [];
    }
  },
  { immediate: true }
);

// Mutation
const { createGroupMutation, editGroupMutation, deleteGroupMutation } =
  useGroupMutation(group);

// Action
const handleClick = (i: number) => {
  selectedIndex.value = selectedIndex.value === i ? null : i;
};
const onFormSubmit = (form: FormSubmitEvent) => {
  if (selectedIndex.value === null) return;
  const data: NewGroupType = {
    name: form.states.name.value,
    type: form.states.type.value,
    color: ColorSchema.options.filter((color) => color !== "gray")[
      selectedIndex.value
    ],
    categories: currentCategories.value,
  };
  if (group.value) {
    editGroupMutation.mutate(data);
  } else {
    createGroupMutation.mutate(data);
  }
};

const onDelete = () => {
  if (confirm("Es-tu sûr de vouloir supprimer le groupe ?")) {
    deleteGroupMutation.mutate();
  }
};
const initialValues =
  group.value && group.value
    ? { name: group.value.name ?? "", type: group.value.type }
    : {};
</script>

<template>
  <SubHeader
    :label="group ? group.name : 'Nouveau group'"
    :color="group ? group.color : 'gray'"
    :to="group ? `/groups/${group.id}` : '/groups'"
  />

  <Form
    v-slot="$form"
    :initial-values="initialValues"
    :resolver="zodResolver(NewGroupSchema)"
    class="flex flex-col gap-10"
    @submit="onFormSubmit"
  >
    <FormInput
      v-if="group?.type !== 'personnal'"
      class="w-full lg:w-3/4"
      placeholder="Nom du group"
      name="name"
      :form="$form"
      fluid
    />
    <MembersForm
      v-if="group?.id && group?.type !== 'personnal'"
      :group="group"
    />

    <BaseSection v-if="group?.type !== 'personnal'" label="Type de groupe">
      <RadioButtonGroup name="type" class="flex flex-wrap gap-4">
        <div class="flex items-center gap-2">
          <RadioButton
            :input-id="GroupTypeEnum.options[1]"
            :value="GroupTypeEnum.options[1]"
          />
          <label :for="GroupTypeEnum.options[1]">Occasional</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton
            :input-id="GroupTypeEnum.options[2]"
            :value="GroupTypeEnum.options[2]"
          />
          <label :for="GroupTypeEnum.options[2]">Régulier</label>
        </div>
      </RadioButtonGroup>
    </BaseSection>
    <BaseSection label="Choisir la couleur">
      <div class="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <ChoiceColor
          v-for="(color, i) in ColorSchema.options.filter(
            (color) => color !== 'gray'
          )"
          :key="i"
          :color="color"
          :selected="selectedIndex === i"
          @click="handleClick(i)"
        />
      </div>
    </BaseSection>

    <CategoriesSelection v-model="currentCategories" />

    <div v-if="group" class="flex flex-col gap-3 w-64 self-center">
      <Button
        :class="[getGroupColor({ color: group?.color })]"
        type="submit"
        label="Modifier le groupe"
      />

      <Button
        v-if="group.type !== 'personnal' && group.userRole === 'author'"
        variant="outlined"
        :class="getGroupColor({ color: group?.color, outlined: true })"
        label="Supprimer le groupe"
        @click="onDelete()"
      />
    </div>
    <div v-else class="flex justify-center">
      <Button
        class="w-64"
        :class="[getGroupColor({ color: 'gray' })]"
        type="submit"
        label="Créer le groupe"
      />
    </div>
  </Form>
</template>
