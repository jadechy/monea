<script setup lang="ts">
import BaseSection from "~/components/ui-kit/BaseSection.vue";
import { useBudget } from "~/composables/useBudgetMutation";
import { useGroupsStore } from "@/stores/groupStore";
import type { CategoryType } from "@/types/categoryType";
import { DatePicker, Select } from "primevue";
import { ref, watch  } from "vue";
import ItemYearBudget from "./ItemYearBudget.vue";

// Const
const selectedCategory = defineModel<CategoryType>("selectedCategory");
const year = ref<Date>(new Date());

const { group } = storeToRefs(useGroupsStore());
const { refetch, months } = useBudget(year);
const { categories } = useCategoryMutation();
watch(year, (newYear) => {
  if (!newYear) return;
  refetch();
});
</script>
<template>
  <BaseSection label="Budget restant mois par mois">
    <template #header>
      <Select
        v-model="selectedCategory"
        editable
        show-clear
        :options="
          categories?.filter((category) => category.label !== 'default')
        "
        option-label="label"
        placeholder="Choisir une catégorie"
        class="ml-auto md:w-56"
        :class="[
          `bg-${selectedCategory?.color}-50`,
          `hover:bg-${selectedCategory?.color}-100`,
        ]"
        :label-class="['capitalize', `text-${selectedCategory?.color}-600`]"
      />
    </template>
    <DatePicker
      v-model="year"
      view="year"
      date-format="yy"
      class="w-64 mx-auto mt-3"
      input-class="text-center"
    />
    <section
      v-if="group"
      class="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-1"
    >
      <div v-for="(month, i) in Object.entries(months)" :key="i" class="item">
        <ItemYearBudget
          :month="month"
          :year="year"
          :selected-category="selectedCategory"
        />
      </div>
    </section>
  </BaseSection>
</template>
