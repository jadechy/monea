<script setup lang="ts">
  import { spacesData } from "@/data/spaces"
  import SubHeader from "@/components/SubHeader.vue"
  import { formatDateToDayMonth } from "@/services/date"
  import PaiementCardComponent from "@/components/PaiementCardComponent.vue"
  import BaseSection from "@/components/BaseSection.vue"
  import AddAction from "@/components/AddAction.vue"
  import { Button } from "primevue"
  import router from "@/router"
  import { getSpaceColor } from "@/services/getColor"
  const props = defineProps<{ id: string }>()
  const space = spacesData.find((space) => space.id === props.id)
</script>

<template>
  <SubHeader :label="space?.label ?? 'error'" :color="space?.color" routeName="home" />
  <div class="flex flex-col gap-2 sm:flex-row justify-between">
    <div class="item w-3xs">
      <p>Budget restant :</p>
      <p class="font-bold">300€</p>
    </div>
    <div>
      <Button
        icon="pi pi-eye"
        label="Budget"
        class="mr-2"
        size="xs"
        :class="[getSpaceColor({ color: space?.color })]"
        @click="router.push({ name: 'budget_space', params: { space_id: space?.id } })"
      />
      <Button
        icon="pi pi-pencil"
        label="Edition"
        size="xs"
        :class="[getSpaceColor({ color: space?.color })]"
        @click="router.push({ name: 'edit_space', params: { id: space?.id } })"
      />
    </div>
  </div>
  <div class="flex flex-col gap-7 mt-10">
    <BaseSection
      :label="formatDateToDayMonth(data.date)"
      v-for="(data, index) in space?.paiements"
      :key="index"
    >
      <PaiementCardComponent
        v-for="spendCard in data.paiements"
        :key="spendCard.id"
        :id="spendCard.id"
        :price="spendCard.price"
        :label="spendCard.label"
        :people="spendCard.people"
        :colored-label="spendCard.coloredLabel"
        :space_id="props.id"
        :date="spendCard.date"
        :participants="spendCard.participants"
      />
    </BaseSection>
  </div>
  <AddAction route-name="new_paiement" :params="{ space_id: space?.id ?? 'error' }" />
</template>
