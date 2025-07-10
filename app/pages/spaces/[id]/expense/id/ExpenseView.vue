<script setup lang="ts">
  import SubHeader from "@/components/Header/SubHeader.vue"
  import { computed } from "vue"
  import ColoredLabelComponent from "@/components/CategoryLabel.vue"
  import { formatDayMonth } from "../../../../../../../app/utils/date"
  import BaseSection from "@/components/BaseSection.vue"
  import PeopleComponent from "@/components/PeopleComponent.vue"
  import { Button, Chip } from "primevue"
  import router from "@/router"
  import { getSpaceColor } from "../../../../../../../app/utils/getColor"
  import type { ExpenseType } from "../../../../../../../app/types/expenseType"
  import { getExpenseById } from "@/services/expenseService"
  import default_avatar from "@/assets/default_avatar.svg"
  import type { GroupType } from "../../../../../../../app/types/groupType"
  import { useQuery } from "@tanstack/vue-query"
  import { useGroupsStore } from "@/stores/groupStore"

  // Props
  const props = defineProps<{ id: ExpenseType["id"]; space_id: GroupType["id"] }>()

  // Group
  const { groupById } = useGroupsStore()
  const group = computed(() => groupById({ id: props.space_id }))

  // Query
  const { data: expense } = useQuery({
    queryKey: ["expense-by-id", props.id],
    queryFn: () => getExpenseById(props.id),
  })
</script>

<template>
  <SubHeader
    v-if="group"
    :label="expense?.title ?? 'error'"
    :color="group.color"
    routeName="space"
    :params="{ id: group.id }"
  />
  <div class="flex flex-col items-center gap-10" v-if="expense && group">
    <div class="flex flex-col md:flex-row gap-2 justify-between w-full">
      <div class="flex flex-col gap-2">
        <div class="flex gap-3 items-end">
          <p class="font-bold text-4xl">{{ expense.amount }} €</p>
          <p v-if="expense.spentAt">
            <i class="pi pi-calendar mr-1"></i>{{ formatDayMonth(new Date(expense.spentAt)) }}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <ColoredLabelComponent
            v-if="expense.category.label !== 'default'"
            :category="expense.category"
          />
          <Chip
            :label="expense.creator.username"
            :image="expense.creator.picture ?? default_avatar"
          />
          <Chip icon="pi pi-replay" label="Dépense récurrente" v-if="expense.recurring" />
        </div>
      </div>
      <Button
        v-if="group.userRole !== 'viewer' && group.userRole !== 'banned'"
        icon="pi pi-pencil"
        label="Edition"
        size="small"
        :class="[getSpaceColor({ color: group.color })]"
        class="h-fit w-fit"
        @click="
          router.push({ name: 'edit_expense', params: { id: expense.id, space_id: space_id } })
        "
      />
    </div>
    <BaseSection label="Participants" class="w-full" v-if="expense.participants">
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
