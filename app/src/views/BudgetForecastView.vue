<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import type { PaiementCardComponentProps } from "@/components/PaiementCardComponent.vue"
  import PaiementCardComponent from "@/components/PaiementCardComponent.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import {
    categories,
    categoryLabel as categoryLabelData,
    type CategoryLabel,
  } from "@/data/categoryLabel"
  import { spacesData } from "@/data/spaces"
  import Day from "@/layouts/BudgetForecast/Day.vue"
  import { formatDateToDayMonth } from "@/lib/date"
  import { getColors } from "@/services/getColor"
  import { DatePicker, Select } from "primevue"
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

  const selectedCity = ref(null)

  const cities = [
    { name: "Paris", code: "PAR" },
    { name: "Lyon", code: "LYN" },
    { name: "Marseille", code: "MRS" },
    { name: "Toulouse", code: "TLS" },
    { name: "Nice", code: "NCE" },
  ]
  type Month = {
    label: string
    amount: number
  }
  const months: Month[] = [
    {
      label: "Janvier",
      amount: 300,
    },
    {
      label: "Février",
      amount: 300,
    },
    {
      label: "Mars",
      amount: 300,
    },
    {
      label: "Avril",
      amount: 300,
    },
    {
      label: "Mai",
      amount: 300,
    },
    {
      label: "Juin",
      amount: 300,
    },
    {
      label: "Juillet",
      amount: 300,
    },

    {
      label: "Août",
      amount: 300,
    },
    {
      label: "Septembre",
      amount: 300,
    },
    {
      label: "Octobre",
      amount: 300,
    },
    {
      label: "Novembre",
      amount: 300,
    },
    {
      label: "Décembre",
      amount: 300,
    },
  ]
  const categoryLabel = categoryLabelData.filter((label) => label !== "default")
  const colorCategoryStyle = computed(() => {
    const currentCategory = categories.filter(
      (category) => selectedCategory.value === category.label,
    )[0]
    return getColors({ array: categories.map((category) => category.color) })[
      (currentCategory && currentCategory.color) ?? "gray"
    ]
  })
  const selectedCategory = defineModel<CategoryLabel>("selectedCategory")
</script>

<template>
  <SubHeader label="Budgets" color="gray" routeName="home" />
  <div class="flex flex-col gap-10">
    <BaseSection label="Budget mois par mois">
      <template #header>
        <Select
          editable
          showClear
          v-model="selectedCategory"
          :options="categoryLabel"
          placeholder="Choisir une catégorie"
          class="ml-auto md:w-56"
          :class="[colorCategoryStyle.bg, colorCategoryStyle.hover]"
          :labelClass="['capitalize', colorCategoryStyle.text]"
        />
      </template>
      <section class="grid gap-6 grid-cols-3 lg:grid-cols-6 mt-1">
        <div v-for="month in months" :key="month.label" class="item">
          <p>{{ month.label }}</p>
          <p>{{ month.amount }}€</p>
        </div>
      </section>
    </BaseSection>
    <BaseSection label="Les dépenses passés et futurs">
      <div class="flex flex-col gap-10">
        <DatePicker
          v-model="date"
          inline
          panel-class="border-none shadow rounded-xl "
          class="w-full"
        >
          <template #date="slotProps">
            <Day
              :date="slotProps.date"
              :allPaiements="allPaiements"
              :color="space?.color ?? 'gray'"
            />
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
    </BaseSection>
  </div>
</template>
