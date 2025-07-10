<script setup lang="ts">
  import { useBudget } from "@/composables/useBudget"
  import type { CategoryType } from "@/types/categoryType"
  import type { GroupType } from "@/types/groupType"
  import { computed, toRef, type Ref } from "vue"

  const props = defineProps<{
    month: [string, string]
    selectedCategory?: CategoryType
    year: Date
    groupId: GroupType["id"]
  }>()
  const yearRef = toRef(props, "year")
  const selectedCategoryRef = toRef(props, "selectedCategory")
  const { month, groupId } = props

  const { remainingBudgetInYear, getRemainingStyle } = useBudget(groupId, yearRef)
  const yearString = computed(() => `${yearRef.value.getFullYear()}-${month[0]}`)

  const remaining = computed(() =>
    selectedCategoryRef.value
      ? (remainingBudgetInYear?.value?.[yearString.value]?.categories.find(
          (category) => category.id === selectedCategoryRef.value?.id,
        )?.remaining ?? 0)
      : (remainingBudgetInYear?.value?.[yearString.value]?.remaining ?? 0),
  )
</script>

<template>
  {{ month[1] }}
  <p :class="getRemainingStyle(remaining)">{{ remaining }} €</p>
</template>
