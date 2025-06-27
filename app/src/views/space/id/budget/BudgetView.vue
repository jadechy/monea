<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
  import SubHeader from "@/components/Header/SubHeader.vue"
  import { truncateToTenth } from "@/utils/number"
  import router from "@/router"
  import { getSpaceColor } from "@/utils/getColor"
  import type { GroupType } from "@/types/groupType"
  import { Button } from "primevue"
  import { computed } from "vue"
  import { formatDateForApi, getCurrentMonthDate } from "@/utils/date"
  import { fetchAllBudgetCategoriesByGroup } from "@/services/budgetService"
  import { useGroups } from "@/composables/useGroups"
  import ChartLayout from "@/components/Budget/ChartLayout.vue"
  import { useQuery } from "@tanstack/vue-query"

  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()

  const budgetCategoriesQuery = useQuery({
    queryKey: ["budgetCategories", space_id, getCurrentMonthDate()],
    queryFn: () => {
      return fetchAllBudgetCategoriesByGroup(space_id, getCurrentMonthDate())
    },
    enabled: !!space_id,
  })

  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: space_id }))
  const budgetCategories = computed(() => budgetCategoriesQuery.data.value ?? [])

  // const budgetCategories = ref<BudgetByCategoryType[]>([])

  // onMounted(async () => {
  //   const resultBudgetCategories = await fetchAllBudgetCategoriesByGroup(
  //     space_id,
  //     getCurrentMonthDate(),
  //   )
  //   if (resultBudgetCategories === null) {
  //     error.value = "Erreur lors du chargement des utilisateurs"
  //   } else {
  //     budgetCategories.value = resultBudgetCategories
  //   }
  // })
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
