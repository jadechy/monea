<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import { categories, type CategoryLabel } from "@/data/categoryLabel"
  import ChartLayout from "@/layouts/Budget/ChartLayout.vue"
  import router from "@/router"
  import { fetchBudgetGroup, fetchBudgetGroupRemaining } from "@/services/budgetService"
  import { getSpaceColor } from "@/services/getColor"
  import { getCurrentMonth } from "@/services/getCurrentMonth"
  import { fetchGroup } from "@/services/groupService"
  import type { AmountType } from "@/types/budget"
  import type { ErrorType } from "@/types/error"
  import type { GroupType } from "@/types/group"
  import { Button } from "primevue"
  import { onMounted, ref } from "vue"

  const props = defineProps<{ space_id: string }>()
  const group = ref<GroupType>()
  const error = ref<ErrorType>(null)

  const budgetRemaining = ref<AmountType>()
  const budget = ref<AmountType>()
  onMounted(async () => {
    const resultGroup = await fetchGroup(props.space_id)
    const resultBudgetRemaining = await fetchBudgetGroupRemaining(
      Number(props.space_id),
      getCurrentMonth,
    )
    const resultBudget = await fetchBudgetGroup(Number(props.space_id), getCurrentMonth)

    if (resultGroup === null || resultBudgetRemaining === null || resultBudget === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      group.value = resultGroup
      budgetRemaining.value = resultBudgetRemaining.amount
      budget.value = resultBudget.amount
      console.log(budget.value)
    }
  })
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
  <SubHeader label="Budget" :color="group?.color" routeName="home" />

  <div class="flex flex-col gap-10">
    <section class="flex justify-between">
      <div class="flex gap-5 w-full">
        <RemainingBudget v-if="budgetRemaining !== undefined" :amount="budgetRemaining" />
        <RemainingBudget v-if="budget !== undefined" label="Budget initial" :amount="budget" />
      </div>

      <Button
        icon="pi pi-pencil"
        label="Prévision des dépenses"
        size="small"
        :class="[getSpaceColor({ color: group?.color })]"
        @click="router.push({ name: 'forecast_budget_space', params: { id: group?.id } })"
      />
    </section>
    <BaseSection label="Par catégories">
      <div class="grid gap-2 grid-cols-2 md:grid-cols-3">
        <router-link
          v-for="(category, i) in categories.filter((category) => category.label !== 'default')"
          :to="{
            name: 'category_budget_space',
            params: { space_id: group?.id, category_id: category.label },
          }"
          class="flex justify-between rounded-full px-4 py-3"
          :key="i"
          :class="colorMap[category.label]"
        >
          <p>{{ category.label }}</p>
          <!-- <p>{{ group?.budgetByCategory[category.label] }} €</p> -->
        </router-link>
      </div>
    </BaseSection>
    <ChartLayout />
  </div>
</template>
