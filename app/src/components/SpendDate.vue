<template>
  <p>{{ date }}</p>
  <div v-for="(spendCard, index) in spends" :key="index" class="gap-3">
    <SpendCardComponent
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
