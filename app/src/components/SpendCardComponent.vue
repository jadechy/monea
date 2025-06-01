<template>
  <div class="flex shadow-lg rounded-4xl px-5 py-4 justify-between">
    <div>
      <p class="font-bold mb-2.5">{{ label }}</p>
      <div class="flex items-center gap-2.5">
        <div v-if="coloredLabel">
          <ColoredLabelComponent :label="coloredLabel" />
        </div>
        <p>Payé par {{ people }}</p>
      </div>
    </div>
    <p>
      <span class="font-bold">{{ price }}</span
      >€
    </p>
  </div>
</template>

<script setup lang="ts">
  import type { ColoredLabelProps } from "./ColoredLabelComponent.vue"
  import ColoredLabelComponent from "./ColoredLabelComponent.vue"

  export type SpendCardComponentProps = {
    label: string
    coloredLabel?: ColoredLabelProps
    people: string
    price: number
  }
  defineProps<SpendCardComponentProps>()
</script>
