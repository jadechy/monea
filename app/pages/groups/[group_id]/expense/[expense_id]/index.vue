<script setup lang="ts">
import { computed } from "vue";
import { Button, Chip } from "primevue";
import default_avatar from "@/assets/default_avatar.svg";
import { useQuery } from "@tanstack/vue-query";
import { useGroupsStore } from "@/stores/groupStore";
import type { ExpenseType } from "~/types/expenseType";
import type { GroupType } from "~/types/groupType";

// Props
const route = useRoute();
const { group_id, category_id, expense_id } = route.params as {
  group_id: string;
  category_id?: string;
  expense_id?: string;
};
const router = useRouter();
// Group
const { groupById } = useGroupsStore();
const group = computed(() => groupById({ id: group_id }));

const { expense } = useExpenseMutation();
</script>

<template>
  <SubHeader
    v-if="group"
    :label="expense?.title ?? 'error'"
    :color="group.color"
    :to="`/groups/${group_id}`"
  />
  <div class="flex flex-col items-center gap-10" v-if="expense && group">
    <div class="flex flex-col md:flex-row gap-2 justify-between w-full">
      <div class="flex flex-col gap-2">
        <div class="flex gap-3 items-end">
          <p class="font-bold text-4xl">{{ expense.amount }} €</p>
          <p v-if="expense.spentAt">
            <i class="pi pi-calendar mr-1"></i
            >{{ formatDayMonth(new Date(expense.spentAt)) }}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <CategoryLabel
            v-if="expense.category.label !== 'default'"
            :category="expense.category"
          />
          <Chip
            :label="expense.creator.username"
            :image="expense.creator.picture ?? default_avatar"
          />
          <Chip
            icon="pi pi-replay"
            label="Dépense récurrente"
            v-if="expense.recurring"
          />
        </div>
      </div>
      <Button
        v-if="group.userRole !== 'viewer' && group.userRole !== 'banned'"
        icon="pi pi-pencil"
        label="Edition"
        size="small"
        :class="[getGroupColor({ color: group.color })]"
        class="h-fit w-fit"
        @click="router.push(`/groups/${group_id}/expense/${expense_id}/edit`)"
      />
    </div>
    <BaseSection
      label="Participants"
      class="w-full"
      v-if="expense.participants"
    >
      <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PeopleComponent
          v-for="participant in expense.participants"
          :key="participant.id"
          :user="participant"
        >
          <p>{{ expense.amount / expense.participants.length }} €</p>
        </PeopleComponent>
      </div>
    </BaseSection>
  </div>
</template>
