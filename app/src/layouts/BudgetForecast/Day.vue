<script setup lang="ts">
  import type { PaiementCardComponentProps } from "@/components/PaiementCardComponent.vue"
  import { getColor } from "@/services/getColor"
  import type { DatePickerDateSlotOptions } from "primevue"
  import type { Color } from "../Home/SpaceCard.vue"
  const props = defineProps<{
    date: DatePickerDateSlotOptions
    allPaiements: PaiementCardComponentProps[]
    color: Color
  }>()
  const havePaiement = props.allPaiements.some((specialDay) => {
    const paiementDate = new Date(specialDay.date)
    return (
      paiementDate.toDateString() ===
      new Date(props.date.year, props.date.month, props.date.day).toDateString()
    )
  })
</script>
<template>
  <p :class="havePaiement && getColor({ color, text: 700 }).text">{{ date.day }}</p>
</template>
