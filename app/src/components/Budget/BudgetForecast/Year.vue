<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import { useBudget } from "@/composables/BudgetForecast/useBudget"
  import { useRemaining } from "@/composables/BudgetForecast/useRemaining"
  import { fetchCategoryByGroup } from "@/services/categoryService"
  import type { CategoryType } from "@/types/categoryType"
  import type { GroupType } from "@/types/groupType"
  import { useQuery } from "@tanstack/vue-query"
  import { DatePicker, Select } from "primevue"
  import { ref } from "vue"
  import { watch } from "vue"
  // Props
  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()

  // Const
  const selectedCategory = defineModel<CategoryType>("selectedCategory")
  const year = ref<Date>(new Date())

  const { yearData, refetch } = useBudget(space_id, year)
  const { getRemaining, getRemainingClass } = useRemaining(selectedCategory)
  // Queries
  const { data: categories } = useQuery({
    queryKey: ["categories-by-group", space_id],
    queryFn: () => fetchCategoryByGroup(space_id),
    enabled: !!space_id,
  })

  watch(year, (newYear) => {
    if (!newYear) return
    refetch()
  })
</script>
<template>
  <BaseSection label="Budget restant mois par mois">
    <template #header>
      <Select
        editable
        showClear
        v-model="selectedCategory"
        :options="categories"
        optionLabel="label"
        placeholder="Choisir une catégorie"
        class="ml-auto md:w-56"
        :class="[`bg-${selectedCategory?.color}-100`, `hover:bg-${selectedCategory?.color}-50`]"
        :labelClass="['capitalize', `text-${selectedCategory?.color}-800`]"
      />
    </template>
    <DatePicker
      v-model="year"
      view="year"
      dateFormat="yy"
      class="w-64 mx-auto mt-3"
      input-class="text-center"
    />

    <section class="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-1">
      <div v-for="([month, value], i) in Object.entries(yearData)" :key="i" class="item">
        <p>{{ month }}</p>

        <p :class="getRemainingClass(value)">{{ getRemaining(value) }}€</p>
      </div>
    </section>
  </BaseSection>
</template>
