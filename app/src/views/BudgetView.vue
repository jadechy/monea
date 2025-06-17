<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import ChartLayout from "@/layouts/Budget/ChartLayout.vue"
  import { truncateToTenth } from "@/lib/number"
  import router from "@/router"
  import { getSpaceColor } from "@/lib/getColor"
  import type { BudgetByCategoryType } from "@/types/budget"
  import type { ErrorType } from "@/types/error"
  import type { GroupType } from "@/types/group"
  import { Button } from "primevue"
  import { onMounted, ref } from "vue"
  import { useGroupStore } from "@/stores/groupStore"
  import { formatDateForApi, getCurrentMonthDate } from "@/lib/date"
  import { fetchAllBudgetCategoriesByGroup } from "@/services/budgetService"

  const props = defineProps<{ space_id: GroupType["id"] }>()
  const groupStore = useGroupStore()
  const group = ref<GroupType>()
  const budgetCategories = ref<BudgetByCategoryType[]>([])
  const error = ref<ErrorType>(null)

  onMounted(async () => {
    const resultGroup = await groupStore.getGroupById(props.space_id)
    const resultBudgetCategories = await fetchAllBudgetCategoriesByGroup(
      props.space_id,
      getCurrentMonthDate(),
    )
    if (resultGroup === null || resultBudgetCategories === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      group.value = resultGroup
      budgetCategories.value = resultBudgetCategories
    }
  })
</script>

<template>
  <SubHeader label="Budget du mois" :color="group?.color" routeName="home" />

  <div class="flex flex-col gap-10" v-if="group">
    <section class="flex justify-between">
      <div class="flex gap-5 w-full">
        <RemainingBudget :space_id="group.id" />
        <RemainingBudget :space_id="group.id" label="Budget initial" initialBudget />
      </div>

      <Button
        icon="pi pi-pencil"
        label="Prévision des dépenses"
        size="small"
        :class="[getSpaceColor({ color: group?.color })]"
        @click="router.push({ name: 'forecast_budget_space', params: { id: group?.id } })"
      />
    </section>
    <BaseSection label="Budget du mois par catégories" v-if="budgetCategories.length > 0">
      <div class="grid gap-2 grid-cols-2 md:grid-cols-3">
        <router-link
          v-for="(budget, i) in budgetCategories.filter(
            (budget) =>
              budget.category.label !== 'default' &&
              budget.monthStart === formatDateForApi(getCurrentMonthDate()),
          )"
          :to="{
            name: 'category_budget_space',
            params: { space_id: group?.id, category_id: budget.category.categoryId },
          }"
          class="flex justify-between rounded-full px-4 py-3"
          :key="i"
          :class="`bg-${budget.category.color}-50 hover:bg-${budget.category.color}-100 text-${budget.category.color}-800`"
        >
          <p>{{ budget.category.label }}</p>
          <p>{{ truncateToTenth(budget.amount) }} €</p>
        </router-link>
      </div>
    </BaseSection>
    <ChartLayout :budgets="budgetCategories" :group_id="space_id" />
  </div>
</template>
