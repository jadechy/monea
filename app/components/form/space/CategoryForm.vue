<script setup lang="ts">
import { ref, watch } from "vue";
import { Dialog, FloatLabel, InputText, Button } from "primevue";
import BaseSection from "~/components/ui-kit/BaseSection.vue";
import ChoiceColor from "../NewSpace/ChoiceColor.vue";
import { ColorSchema } from "@/types/color";
import type { NewCategoryType } from "@/types/categoryType";

const props = defineProps<{
  category?: NewCategoryType;
  onSaveCategory: (category: NewCategoryType) => void;
  mode: "create" | "edit";
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const categoryState = ref<NewCategoryType>({ label: "", color: "gray" });
const selectedIndex = ref<number | null>(null);

watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      categoryState.value = props.category
        ? { ...props.category }
        : { label: "", color: "gray" };
      const allowedColors = ColorSchema.options.filter((c) => c !== "gray");

      selectedIndex.value = props.category
        ? allowedColors.indexOf(
            props.category.color as (typeof allowedColors)[number]
          )
        : null;
    }
  }
);

const save = () => {
  if (!categoryState.value.label || selectedIndex.value === null) return;
  const newCategory: NewCategoryType = {
    label: categoryState.value.label,
    color: ColorSchema.options.filter((c) => c !== "gray")[selectedIndex.value],
  };
  props.onSaveCategory(newCategory);
  emit("update:modelValue", false);
};
</script>

<template>
  <Dialog
    :visible="modelValue"
    modal
    :header="mode === 'edit' ? 'Modifier la catégorie' : 'Créer une catégorie'"
    :style="{ width: '25rem' }"
    @update:visible="emit('update:modelValue', $event)"
  >
    <FloatLabel variant="on" class="mt-1">
      <InputText id="label" v-model="categoryState.label" />
      <label for="label">Nom</label>
    </FloatLabel>

    <BaseSection label="Choisir la couleur" class="my-6">
      <div class="grid grid-cols-5 md:grid-cols-6 gap-4">
        <ChoiceColor
          v-for="(color, i) in ColorSchema.options.filter((c) => c !== 'gray')"
          :key="i"
          :color="color"
          :selected="selectedIndex === i"
          @click="selectedIndex = i"
        />
      </div>
    </BaseSection>

    <div class="flex justify-end">
      <Button
        :label="mode === 'edit' ? 'Sauvegarder' : 'Ajouter'"
        @click="save"
      />
    </div>
  </Dialog>
</template>
