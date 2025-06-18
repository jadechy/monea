<script setup lang="ts">
  import ColoredLabelComponent from "@/components/CategoryLabel.vue"
  import { Button, InputNumber, InputText } from "primevue"
  import ChoiceColor from "./ChoiceColor.vue"
  import { ref } from "vue"
  import { defaultCategories } from "@/data/defaultCategories"
  import { ColorSchema } from "@/types/color"
  import BaseSection from "@/components/BaseSection.vue"
  const selectedIndex = ref<number | null>(null)

  const handleClick = (i: number) => {
    selectedIndex.value = selectedIndex.value === i ? null : i
  }
</script>

<template>
  <div class="flex flex-col gap-10">
    <InputText placeholder="Nom du space" class="w-full lg:w-3/4" />
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

    <Button class="w-64 self-center">Créer le space</Button>
  </div>
</template>

<style></style>
