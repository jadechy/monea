<script setup lang="ts">
import { useBudget } from "~/composables/useBudgetMutation";
import type { CategoryType } from "@/types/categoryType";
import { computed, toRef } from "vue";

const props = defineProps<{
  month: [string, string];
  selectedCategory?: CategoryType;
  year: Date;
}>();
const yearRef = toRef(props, "year");
const selectedCategoryRef = toRef(props, "selectedCategory");
const { month } = props;

const { remainingBudgetInYear, getRemainingStyle } = useBudget(yearRef);
const yearString = computed(() => `${yearRef.value.getFullYear()}-${month[0]}`);

const remaining = computed(() =>
  selectedCategoryRef.value
    ? (remainingBudgetInYear?.value?.[yearString.value]?.categories.find(
        (category) => category.id === selectedCategoryRef.value?.id
      )?.remaining ?? { amount: 0 })
    : (remainingBudgetInYear?.value?.[yearString.value]?.remaining ?? {
        amount: 0,
      })
);
</script>

<template>
  {{ month[1] }}
  <p :class="getRemainingStyle(remaining.amount)">{{ remaining.amount }} €</p>
</template>
