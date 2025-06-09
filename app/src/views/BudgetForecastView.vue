<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import CategoryLabel from "@/components/CategoryLabel.vue"
  import type { PaiementCardComponentProps } from "@/components/PaiementCardComponent.vue"
  import { spacesData } from "@/data/spaces"
  import Day from "@/layouts/BudgetForecast/Day.vue"
  import { formatDateToDayMonth } from "@/services/date"
  import { DatePicker } from "primevue"
  import { computed, ref } from "vue"
  const props = defineProps<{ space_id: string }>()
  const space = spacesData.find((space) => space.id === props.space_id)

  const date = ref<Date | null>(null)
  const allPaiements: PaiementCardComponentProps[] =
    space?.paiements.flatMap((arr) => arr.paiements) ?? []
  const currentPaiements = computed(() => {
    return allPaiements.filter((paiement) => {
      if (!date.value || date.value === null) return []
      const paiementDate = new Date(paiement.date)
      return paiementDate.toString() === date.value.toString()
    })
  })
</script>

<template>
  <div class="lg:flex gap-5 w-full">
    <DatePicker v-model="date" inline panel-class="border-none shadow rounded-xl " class="w-full">
      <template #date="slotProps">
        <Day :date="slotProps.date" :allPaiements="allPaiements" :color="space?.color ?? 'gray'" />
      </template>
    </DatePicker>
    <BaseSection :label="formatDateToDayMonth(date)" v-if="date" class="mt-10">
      <div class="grid grid-cols-2 gap-3">
        <div v-for="paiement in currentPaiements" :key="paiement.id" class="item hover">
          <CategoryLabel :label="paiement.categoryLabel" />
          <p>{{ paiement.label }}</p>
        </div>
      </div>
    </BaseSection>
  </div>
</template>
