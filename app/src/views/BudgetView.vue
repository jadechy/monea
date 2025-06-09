<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import { categories, type CategoryLabel } from "@/data/categoryLabel"
  import { spacesData } from "@/data/spaces"
  import ChartLayout from "@/layouts/Budget/ChartLayout.vue"
  import router from "@/router"
  import { getSpaceColor } from "@/services/getColor"
  import { Button } from "primevue"

  const props = defineProps<{ space_id: string }>()
  const space = spacesData.find((space) => space.id === props.space_id)

  const colorMap: Record<CategoryLabel, string> = {
    abonnement: `bg-yellow-50 hover:bg-yellow-100 text-yellow-800`,
    course: `bg-pink-50 hover:bg-pink-100 text-pink-800`,
    restaurant: ` bg-green-50 hover:bg-green-100 text-green-800`,
    shopping: `bg-blue-50 hover:bg-blue-100 text-blue-800`,
    loisir: `bg-orange-50 hover:bg-orange-100 text-orange-800`,
    default: `bg-gray-50 hover:bg-gray-100 text-gray-800`,
  }
</script>

<template>
  <SubHeader :label="space?.label ?? 'error'" :color="space?.color" routeName="home" />
  <div class="flex flex-col gap-10">
    <section class="flex justify-between">
      <div class="flex gap-5 w-full">
        <RemainingBudget :amount="300" />
        <RemainingBudget label="Budget initial" :amount="space?.overallBudget ?? 0" />
      </div>

      <Button
        icon="pi pi-pencil"
        label="Prévision des dépenses"
        size="small"
        :class="[getSpaceColor({ color: space?.color })]"
        @click="router.push({ name: 'forecast_budget_space', params: { id: space?.id } })"
      />
    </section>
    <BaseSection label="Par catégories">
      <div class="grid gap-2 grid-cols-2 md:grid-cols-3">
        <router-link
          v-for="(category, i) in categories.filter((category) => category.label !== 'default')"
          :to="{
            name: 'category_budget_space',
            params: { space_id: space?.id, category_id: category.label },
          }"
          class="flex justify-between rounded-full px-4 py-3"
          :key="i"
          :class="colorMap[category.label]"
        >
          <p>{{ category.label }}</p>
          <p>{{ space?.budgetByCategory[category.label] }} €</p>
        </router-link>
      </div>
    </BaseSection>
    <ChartLayout />
  </div>
</template>
