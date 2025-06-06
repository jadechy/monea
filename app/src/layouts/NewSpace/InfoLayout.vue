<script setup lang="ts">
  import ColoredLabelComponent from "@/components/CategoryLabel.vue"
  import { Button, InputNumber, InputText } from "primevue"
  import ChoiceColor from "./ChoiceColor.vue"
  import type { Color } from "../Home/SpaceCard.vue"
  import { ref } from "vue"
  import { categoryLabel } from "@/data/categoryLabel"
  const colors: Color[] = ["blue", "yellow", "pink", "green", "orange"]
  const selectedIndex = ref<number | null>(null)

  const handleClick = (i: number) => {
    selectedIndex.value = selectedIndex.value === i ? null : i
  }
</script>

<template>
  <div class="flex flex-col gap-10">
    <InputText placeholder="Nom du space" class="w-full lg:w-3/4" />
    <section class="flex flex-col w-full lg:w-3/4">
      <p>Ajouter un membre</p>
      <InputText placeholder="Pseudo/mail" class="w-full" />
      <Button variant="outlined" size="small" class="mt-2 ml-auto">
        <i class="pi pi-inbox"></i> Envoyer la demande
      </Button>
    </section>
    <section class="w-full lg:w-3/4">
      <p>Budget total</p>
      <div class="flex gap-10">
        <InputNumber placeholder="0" class="w-full" />
        <p class="text-4xl font-black">€</p>
      </div>
    </section>
    <section class="w-full">
      <p>Ajouter une catégorie</p>
      <div class="flex gap-1.5 flex-wrap">
        <ColoredLabelComponent v-for="category in categoryLabel" :label="category" add />
      </div>
    </section>
    <section class="w-full">
      <p>Choisir la couleur</p>
      <div class="flex gap-1.5 flex-wrap">
        <ChoiceColor
          v-for="(color, i) in colors"
          :color="color"
          :key="i"
          :selected="selectedIndex === i"
          @click="handleClick(i)"
        />
      </div>
    </section>
    <Button class="w-64 self-center">Créer le space</Button>
  </div>
</template>

<style></style>
