<template>
  <p class="italic text-gray-700">{{ date }}</p>
  <div class="flex flex-col gap-3 mt-1.5">
    <SpendCardComponent
      v-for="(spendCard, index) in spends"
      :key="index"
      :price="spendCard.price"
      :label="spendCard.label"
      :people="spendCard.people"
      :colored-label="spendCard.coloredLabel"
    />
  </div>
</template>

<script setup lang="ts">
  import SpendCardComponent, { type SpendCardComponentProps } from "./SpendCardComponent.vue"
  export type SpendDateProps = {
    spends: SpendCardComponentProps[]
    date: string
  }
  defineProps<SpendDateProps>()
</script>
