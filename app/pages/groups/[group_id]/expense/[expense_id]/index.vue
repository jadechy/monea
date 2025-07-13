<script setup lang="ts">
import { Button, Chip } from "primevue";
import default_avatar from "@/assets/default_avatar.svg";
import { useGroupsStore } from "@/stores/groupStore";
import { useSeo } from "~/composables/useSeo";

// Props
const route = useRoute();
const { group_id, expense_id } = route.params as {
  group_id: string;
  expense_id?: string;
};
const router = useRouter();
// Group
const { group } = storeToRefs(useGroupsStore());
const { expense } = useExpenseMutation();
useSeo({
  title: `Créer une dépense dans ${group.value?.name}`,
  description: `Ajoutez une nouvelle dépense au groupe ${group.value?.name} pour mieux gérer votre budget.`,
  ogTitle: `Nouvelle dépense - ${group.value?.name}`,
  ogDescription: `Page de création d'une dépense pour le groupe ${group.value?.name}.`,
  image: group.value?.picture ?? undefined,
});
</script>

<template>
  <SubHeader
    v-if="group"
    :label="expense?.title ?? 'error'"
    :color="group.color"
    :to="`/groups/${group_id}`"
  />
  <div v-if="expense && group" class="flex flex-col items-center gap-10">
    <div class="flex flex-col md:flex-row gap-2 justify-between w-full">
      <div class="flex flex-col gap-2">
        <div class="flex gap-3 items-end">
          <p class="font-bold text-4xl">{{ expense.amount }} €</p>
          <p v-if="expense.spentAt">
            <i class="pi pi-calendar mr-1"/>{{ formatDayMonth(new Date(expense.spentAt)) }}
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
            v-if="expense.recurring"
            icon="pi pi-replay"
            label="Dépense récurrente"
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
      v-if="expense.participants"
      label="Participants"
      class="w-full"
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
