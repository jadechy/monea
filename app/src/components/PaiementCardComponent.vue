<template>
  <router-link
    :to="{ name: 'paiement', params: { id: id, space_id: space_id } }"
    class="flex shadow px-4 py-3 justify-between w-full rounded-3xl hover:bg-gray-50"
  >
    <div>
      <p class="font-bold mb-2.5">{{ label }}</p>
      <div class="flex items-center gap-2.5">
        <div v-if="coloredLabel">
          <ColoredLabelComponent :label="coloredLabel" />
        </div>
        <p>Payé par {{ people.pseudo }}</p>
      </div>
    </div>
    <p>
      <span class="font-bold">{{ price }}</span
      >€
    </p>
  </router-link>
</template>

<script setup lang="ts">
  import type { People } from "@/data/people"
  import ColoredLabelComponent from "./CategoryLabel.vue"
  import type { CategoryLabel } from "@/data/categoryLabel"

  export type PaiementCardComponentProps = {
    id: string
    label: string
    coloredLabel?: CategoryLabel
    people: People
    price: number
    date: Date
    participants: People[]
  }
  defineProps<PaiementCardComponentProps & { space_id: string }>()
</script>
