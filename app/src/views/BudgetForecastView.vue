<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import CategoryLabel from "@/components/CategoryLabel.vue"
  import type { PaiementCardComponentProps } from "@/components/PaiementCardComponent.vue"
  import PaiementCardComponent from "@/components/PaiementCardComponent.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
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
  <div class="flex flex-col gap-10">
    <DatePicker v-model="date" inline panel-class="border-none shadow rounded-xl " class="w-full">
      <template #date="slotProps">
        <Day :date="slotProps.date" :allPaiements="allPaiements" :color="space?.color ?? 'gray'" />
      </template>
    </DatePicker>
    <div class="flex flex-col gap-2 sm:flex-row justify-between items-center" v-if="date">
      <RemainingBudget label="Budget restant à date" :amount="30" />
    </div>
    <BaseSection :label="formatDateToDayMonth(date)" v-if="date">
      <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PaiementCardComponent
          v-for="spendCard in currentPaiements"
          :key="spendCard.id"
          :id="spendCard.id"
          :price="spendCard.price"
          :label="spendCard.label"
          :people="spendCard.people"
          :categoryLabel="spendCard.categoryLabel"
          :space_id="props.space_id"
          :date="spendCard.date"
          :participants="spendCard.participants"
        />
      </div>
    </BaseSection>
    <!-- <BaseSection :label="formatDateToDayMonth(date)" v-if="date" class="mt-10">
      <div>
        <div class="item block w-fit rounded-lg">
          <p>Budget restant à date</p>
          <p><span class="font-bold">300</span> €</p>
        </div>
        <RemainingBudget :amount="30" label="Budget restant à date" />
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div v-for="paiement in currentPaiements" :key="paiement.id" class="item hover">
          <CategoryLabel :label="paiement.categoryLabel" />
          <p>{{ paiement.label }}</p>
        </div>
      </div>
    </BaseSection> -->
  </div>
</template>
