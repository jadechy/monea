<template>
  <router-link
    :to="{ name: 'expense', params: { id: expense.id, space_id: groupId } }"
    class="flex shadow px-4 py-3 justify-between w-full rounded-3xl hover:bg-gray-50"
  >
    <div>
      <p class="font-bold mb-2.5">{{ expense.title }}</p>
      <div class="flex items-center gap-2.5">
        <ColoredLabelComponent
          v-if="expense.category.label !== 'default'"
          :category="expense.category"
        />
        <Chip :label="expense.creator.username" :image="expense.creator.picture ?? placeholder" />
      </div>
    </div>
    <p>
      <span class="font-bold">{{ expense.amount }}</span
      >€
    </p>
  </router-link>
</template>

<script setup lang="ts">
  import placeholder from "@/assets/placeholder_people.jpg"
  import ColoredLabelComponent from "./CategoryLabel.vue"
  import { Chip } from "primevue"
  import type { ExpenseSingleValueDateType } from "@/types/expenseType"
  import type { GroupType } from "@/types/groupType"
  export interface ExpenseCardComponentProps {
    expense: ExpenseSingleValueDateType
    groupId: GroupType["id"]
  }
  defineProps<ExpenseCardComponentProps>()
</script>
