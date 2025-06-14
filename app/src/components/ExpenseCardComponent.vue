<template>
  <router-link
    :to="{ name: 'paiement', params: { id: id, space_id: space_id } }"
    class="flex shadow px-4 py-3 justify-between w-full rounded-3xl hover:bg-gray-50"
  >
    <div>
      <p class="font-bold mb-2.5">{{ expense.title }}</p>
      <div class="flex items-center gap-2.5">
        <div v-if="category">
          <ColoredLabelComponent v-if="category.label" :label="category.label" />
        </div>
        <Chip :label="creator.username" :image="creator.picture ?? placeholder" />
      </div>
    </div>
    <p>
      <span class="font-bold">{{ amount }}</span
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
    expense: Pick<ExpenseType, "id" | "title" | "category" | "creator" | "amount" | "spentAt">
  }
  defineProps<ExpenseCardComponentProps & { space_id: string }>()
</script>
