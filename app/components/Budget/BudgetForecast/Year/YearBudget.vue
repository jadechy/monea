<script setup lang="ts">
import BaseSection from "~/components/ui-kit/BaseSection.vue";
import { useBudget } from "@/composables/useBudget";
import { fetchCategoryByGroup } from "@/services/categoryService";
import { useGroupsStore } from "@/stores/groupStore";
import type { CategoryType } from "@/types/categoryType";
import type { GroupType } from "@/types/groupType";
import { useQuery } from "@tanstack/vue-query";
import { DatePicker, Select } from "primevue";
import { computed } from "vue";
import { ref } from "vue";
import { watch } from "vue";
import ItemYearBudget from "./ItemYearBudget.vue";
// Props
const { group_id } = defineProps<{ group_id: GroupType["id"] }>();

// Const
const selectedCategory = defineModel<CategoryType>("selectedCategory");
const year = ref<Date>(new Date());

const { groupById } = useGroupsStore();
const group = computed(() => groupById({ id: group_id }));
const { refetch, months } = useBudget(group_id, year);
const { data: categories } = useQuery({
  queryKey: ["categories-by-group", group_id],
  queryFn: () => fetchCategoryByGroup(group_id),
});
watch(year, (newYear) => {
  if (!newYear) return;
  refetch();
});
</script>
<template>
  <BaseSection label="Budget restant mois par mois">
    <template #header>
      <Select
        editable
        showClear
        v-model="selectedCategory"
        :options="
          categories?.filter((category) => category.label !== 'default')
        "
        optionLabel="label"
        placeholder="Choisir une catégorie"
        class="ml-auto md:w-56"
        :class="[
          `bg-${selectedCategory?.color}-50`,
          `hover:bg-${selectedCategory?.color}-100`,
        ]"
        :labelClass="['capitalize', `text-${selectedCategory?.color}-600`]"
      />
    </template>
    <DatePicker
      v-model="year"
      view="year"
      dateFormat="yy"
      class="w-64 mx-auto mt-3"
      input-class="text-center"
    />
    <section
      class="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-1"
      v-if="group"
    >
      <div v-for="(month, i) in Object.entries(months)" :key="i" class="item">
        <ItemYearBudget
          :group-id="group?.id"
          :month="month"
          :year="year"
          :selected-category="selectedCategory"
        />
      </div>
    </section>
  </BaseSection>
</template>
