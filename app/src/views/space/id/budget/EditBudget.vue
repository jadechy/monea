<script setup lang="ts">
  import SubHeader from "@/components/Header/SubHeader.vue"
  import WrapperInput from "@/components/InputComponent/WrapperInput.vue"
  import { useBudget } from "@/composables/BudgetForecast/useBudget"
  import router from "@/router"
  import { fetchAllRemainingBudgetCategoriesByGroup, postBudgets } from "@/services/budgetService"
  import { fetchCategoryByGroup } from "@/services/categoryService"
  import { useGroupsStore } from "@/stores/groupStore"
  import type { NewBudgetType } from "@/types/budgetType"
  import type { GroupType } from "@/types/groupType"
  import { formatDateISO, getCurrentMonthStartDate, getFirstDayOfMonth } from "@/utils/date"
  import { getSpaceColor } from "@/utils/getColor"
  import { truncateToTenth } from "@/utils/number"
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query"
  import { Button, DatePicker, InputText } from "primevue"
  import { computed, ref } from "vue"
  import { watch } from "vue"
  // Props
  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()

  // Const
  const year = ref<Date>(new Date())
  const { groupById } = useGroupsStore()
  const group = computed(() => groupById({ id: space_id }))
  const { refetch } = useBudget(space_id, year.value.getFullYear())

  // Queries
  const queryClient = useQueryClient()

  const { data: remainingBudget } = useQuery({
    queryKey: ["budgetCategories", space_id, getCurrentMonthStartDate()],
    queryFn: () => {
      return fetchAllRemainingBudgetCategoriesByGroup(space_id, getCurrentMonthStartDate())
    },
    enabled: !!space_id,
  })
  const { data: categories } = useQuery({
    queryKey: ["categories-by-group", space_id],
    queryFn: () => fetchCategoryByGroup(space_id),
  })

  const postBudgetsMutatiion = useMutation({
    mutationFn: (data: NewBudgetType) => postBudgets(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["budgetCategories", space_id, getCurrentMonthStartDate()],
      }),
        router.push({ name: "budget_space", params: { space_id: space_id } })
    },
  })

  watch(year, () => {
    if (!group.value) return
    refetch()
  })

  const onFormSubmit = (form: FormSubmitEvent) => {
    if (!form.valid || !group.value) return
    const budgets: NewBudgetType["budgets"] = Object.entries(form.states).map((e) => ({
      amount: Number(e[1] && e[1]?.value ? e[1].value : 0),
      monthStart: formatDateISO(getFirstDayOfMonth(year.value)),
      categoryId: Number(e[0]),
    }))
    const data: NewBudgetType = {
      groupId: group.value.id,
      budgets: budgets,
    }
    console.log(data)
    postBudgetsMutatiion.mutate(data)
  }
</script>
<template>
  <SubHeader
    label="Edition des Budgets"
    :color="group?.color"
    routeName="budget_space"
    :params="{
      space_id: space_id,
    }"
  />
  <div class="w-full flex justify-center">
    <DatePicker
      :v-model="year"
      view="month"
      dateFormat="mm/yy"
      class="w-64 mt-3"
      input-class="text-center"
    />
  </div>

  <Form
    v-slot="$form"
    @submit="onFormSubmit"
    class="flex justify-center flex-col items-center gap-10"
  >
    <section class="grid gap-2 grid-cols-2 md:grid-cols-3 mt-6 w-full">
      <div
        v-for="(category, i) in categories"
        :to="{
          name: 'category_budget_space',
          params: { space_id: group?.id, category_id: category.id },
        }"
        class="flex justify-between items-center rounded-full px-4 py-3"
        :key="category.id"
        :class="`bg-${category.color}-50 text-${category.color}-800`"
      >
        <p>{{ category.label !== "default" ? category.label : "Autres" }}</p>
        <div class="flex items-center gap-2">
          <WrapperInput :form="$form" :name="String(category.id)" placeholder="Budget" class="w-24">
            <InputText :name="String(category.id)" fluid />
          </WrapperInput>
          <p class="text-2xl">
            <!-- {{
                truncateToTenth(
                  remainingBudget.find(
                    (budget) =>
                      budget.category.id === category.id &&
                      budget.monthStart === formatDateISO(getCurrentMonthStartDate()),
                  )?.amount ?? 0,
                )
              }} -->
            €
          </p>
        </div>
      </div>
    </section>
    <Button
      :class="[getSpaceColor({ color: group?.color })]"
      type="submit"
      class="w-64"
      label="Sauvergarde les budgets"
    />
  </Form>
</template>
