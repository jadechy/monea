<template>
  <router-link
    :to="{ name: 'paiement', params: { id: expense.id, space_id: expense.groupe.id } }"
    class="flex shadow px-4 py-3 justify-between w-full rounded-3xl hover:bg-gray-50"
  >
    <div>
      <p class="font-bold mb-2.5">{{ expense.title }}</p>
      <div class="flex items-center gap-2.5">
        <div v-if="expense.category">
          <ColoredLabelComponent v-if="expense.category.label" :label="expense.category.label" />
        </div>
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
  import type { ExpenseType } from "@/types/expense"

  export interface ExpenseCardComponentProps {
    expense: Pick<
      ExpenseType,
      "id" | "title" | "category" | "creator" | "amount" | "spentAt" | "groupe"
    >
  }
  defineProps<ExpenseCardComponentProps>()
</script>
