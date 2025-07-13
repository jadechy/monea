<template>
  <router-link
    :to="`${route.path}/expense/${expense.id}`"
    class="flex shadow px-4 py-3 justify-between w-full rounded-3xl hover:bg-gray-50"
  >
    <div>
      <p class="font-bold mb-2.5">{{ expense.title }}</p>
      <div class="flex items-center gap-2.5">
        <ColoredLabelComponent
          v-if="expense.category.label !== 'default'"
          :category="expense.category"
        />
        <Chip
          :label="expense.creator.username"
          :image="expense.creator.picture ?? default_avatar"
        />
      </div>
    </div>
    <p>
      <span class="font-bold">{{ expense.amount }}</span
      >€
    </p>
  </router-link>
</template>

<script setup lang="ts">
import ColoredLabelComponent from "./CategoryLabel.vue";
import { Chip } from "primevue";
import type { ExpenseSingleValueDateType } from "@/types/expenseType";
import type { GroupType } from "@/types/groupType";
import default_avatar from "@/assets/default_avatar.svg";
export interface ExpenseCardComponentProps {
  expense: ExpenseSingleValueDateType;
  groupId: GroupType["id"];
}
defineProps<ExpenseCardComponentProps>();
const route = useRoute();
</script>
