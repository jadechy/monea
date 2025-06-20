<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import PaiementCardComponent from "@/components/ExpenseCardComponent.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import Day from "@/layouts/BudgetForecast/Day.vue"
  import { formatDateForApi, formatDateToDayMonth } from "@/utils/date"
  import { fetchCategoryByGroup } from "@/services/categoryService"
  import type { CategoryType } from "@/types/category"
  import type { ErrorType } from "@/types/error"
  import type { ExpenseDateType } from "@/types/expense"
  import type { GroupType } from "@/types/group"
  import { DatePicker } from "primevue"
  import { computed, onMounted, ref } from "vue"
  import { useGroups } from "@/composables/useGroups"
  import Year from "@/components/BudgetForecast/Year.vue"
  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()

  const currentDate = ref<Date | null>(null)
  const expenses = ref<ExpenseDateType>()
  const error = ref<ErrorType>(null)
  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: space_id }))

  const categories = ref<CategoryType[]>([])

  onMounted(async () => {
    const resultCategories = await fetchCategoryByGroup(space_id)

    if (resultCategories === null) {
      return (error.value = "Erreur lors du chargement des utilisateurs")
    }
    categories.value = resultCategories
  })
</script>

<template>
  <SubHeader label="Budgets" :color="group?.color" routeName="home" />
  <div class="flex flex-col gap-10">
    <Year :space_id="space_id" />
    <BaseSection label="Les dépenses passés et futurs" v-if="group">
      <div class="flex flex-col gap-10">
        <DatePicker
          v-if="expenses"
          v-model="currentDate"
          inline
          panel-class="border-none shadow rounded-xl "
          class="w-full"
        >
          <template #date="slotProps">
            <Day
              :date="slotProps.date"
              :expensesInDay="expenses['2025-05-05']"
              :color="group?.color ?? 'gray'"
            />
          </template>
        </DatePicker>
        <div
          class="flex flex-col gap-2 sm:flex-row justify-between items-center"
          v-if="currentDate"
        >
          <RemainingBudget label="Budget restant à date" :space_id="group.id" />
        </div>

        <BaseSection
          :label="formatDateToDayMonth(currentDate)"
          v-if="currentDate && expenses && expenses[formatDateForApi(currentDate)]"
        >
          <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <PaiementCardComponent
              v-for="expense in expenses[formatDateForApi(currentDate)]"
              :key="expense.id"
              :expense="expense"
            />
          </div>
        </BaseSection>
      </div>
    </BaseSection>
  </div>
</template>
