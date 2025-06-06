<script setup lang="ts">
  import SubHeader from "@/components/SubHeader.vue"
  import { categoryLabel } from "@/data/categoryLabel"
  import { spacesData } from "@/data/spaces"
  import { Select } from "primevue"
  const selectedCity = defineModel()

  const props = defineProps<{ space_id: string }>()
  const space = spacesData.find((space) => space.id === props.space_id)
  const categories = categoryLabel
</script>

<template>
  <SubHeader
    label="Nouveau paiement"
    :color="space?.color"
    routeName="space"
    :params="{ id: space_id }"
  />
  <!-- optionLabel="name" -->
  <Select
    editable
    v-model="selectedCity"
    :options="categories"
    placeholder="Choisir une catégorie"
    class="w-full md:w-56 rounded-4xl"
  />

  <div></div>
</template>

<style></style>
