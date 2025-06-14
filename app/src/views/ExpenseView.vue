<script setup lang="ts">
  import SubHeader from "@/components/SubHeader.vue"
  import { onMounted, ref } from "vue"
  import ColoredLabelComponent from "@/components/CategoryLabel.vue"
  import { formatDateToDayMonth } from "@/lib/date"
  import BaseSection from "@/components/BaseSection.vue"
  import PeopleComponent from "@/components/PeopleComponent.vue"
  import { Button, Chip } from "primevue"
  import router from "@/router"
  import { getSpaceColor } from "@/services/getColor"
  import type { ExpenseType } from "@/types/expense"
  import type { ErrorType } from "@/types/error"
  import { fetchExpense } from "@/services/expenseService"
  import placeholder from "@/assets/placeholder_people.jpg"
  const props = defineProps<{ id: string }>()
  const expense = ref<ExpenseType>()
  const error = ref<ErrorType>(null)
  onMounted(async () => {
    const result = await fetchExpense(props.id)
    if (result === null) {
      error.value = "Erreur lors du chargement des utilisateurs"
    } else {
      expense.value = result
    }
  })
</script>

<template>
  <SubHeader
    :label="expense?.title ?? 'error'"
    :color="expense?.groupe?.color"
    routeName="space"
    :params="{ id: String(expense?.groupe.id) }"
  />
  <div class="flex flex-col items-center gap-10" v-if="expense">
    <div class="w-full">
      <div class="flex justify-between items-center w-full">
        <ColoredLabelComponent v-if="expense.category?.label" :label="expense.category?.label" />
        <Button
          icon="pi pi-pencil"
          label="Edition"
          size="small"
          :class="[getSpaceColor({ color: expense.groupe?.color })]"
          @click="router.push({ name: 'edit_paiement', params: { id: expense.id } })"
        />
      </div>

      <div class="flex items-center gap-6 mt-3">
        <Chip :label="expense.creator.username" :image="expense.creator.picture ?? placeholder" />
        <p v-if="expense.spentAt">
          <i class="pi pi-calendar mr-1"></i>{{ formatDateToDayMonth(new Date(expense.spentAt)) }}
        </p>
      </div>
    </div>

    <BaseSection label="Participants" class="w-full">
      <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PeopleComponent
          v-if="expense.amount"
          v-for="member in expense.members"
          :key="member.id"
          :user="member"
        >
          <p>{{ expense.amount / expense.members.length }} €</p>
        </PeopleComponent>
      </div>
    </BaseSection>
  </div>
</template>
