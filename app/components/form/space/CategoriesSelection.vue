<script setup lang="ts">
import BaseSection from "~/components/ui-kit/BaseSection.vue";
import ColoredLabelComponent from "~/components/ui-kit/CategoryLabel.vue";
import type { NewCategoryType } from "@/types/categoryType";
import CategoryForm from "./CategoryForm.vue";
const model = defineModel<NewCategoryType[]>({ default: [] });
// Const
const selectedCategory = ref<NewCategoryType | undefined>(undefined);
const mode = ref<"create" | "edit">("create");
const categoryDialogVisible = ref(false);
const categories = ref<NewCategoryType[]>(defaultCategories);

// Action
const addCategory = ({ category }: { category: NewCategoryType }) => {
  model.value.push(category);
  const index = categories.value.indexOf(category);
  categories.value.splice(index, 1);
};
const deleteCategory = ({ category }: { category: NewCategoryType }) => {
  if (!model.value) return;
  const index = model?.value.indexOf(category);
  model?.value.splice(index, 1);
  categories.value.push(category);
};

const openCreate = () => {
  selectedCategory.value = undefined;
  mode.value = "create";
  categoryDialogVisible.value = true;
};

const openEdit = (category: NewCategoryType) => {
  selectedCategory.value = category;
  mode.value = "edit";
  categoryDialogVisible.value = true;
};

const handleSave = (newCat: NewCategoryType) => {
  if (!model.value) return;
  if (mode.value === "edit" && selectedCategory.value) {
    const index = model?.value.findIndex(
      (c) => c.label === selectedCategory.value?.label
    );
    if (index !== -1) model.value[index] = newCat;
  } else {
    model?.value.push(newCat);
    const i = categories.value.findIndex((c) => c.label === newCat.label);
    if (i !== -1) categories.value.splice(i, 1);
  }
};
</script>

<template>
  <BaseSection label="Catégorie sélectionné" v-if="model.length">
    <div class="flex gap-1.5 flex-wrap">
      <ColoredLabelComponent
        v-for="(category, i) in model"
        :category="category"
        add
        :key="i"
      >
        <template #add>
          <i class="pi pi-pencil" @click="openEdit(category)" />
          <i class="pi pi-minus" @click="deleteCategory({ category })" />
        </template>
      </ColoredLabelComponent>
    </div>
  </BaseSection>
  <BaseSection label="Ajouter une catégorie">
    <div class="flex gap-1.5 flex-wrap">
      <ColoredLabelComponent
        v-for="(category, i) in categories"
        :category="category"
        add
        :key="i"
      >
        <template #add>
          <i class="pi pi-plus" @click="addCategory({ category })"></i>
        </template>
      </ColoredLabelComponent>
      <ColoredLabelComponent @click="openCreate" />
      <CategoryForm
        v-model="categoryDialogVisible"
        :category="selectedCategory"
        :mode="mode"
        :on-save-category="handleSave"
      />
    </div>
  </BaseSection>
</template>
