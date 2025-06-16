<script setup lang="ts">
  import AddAction from "@/components/AddAction.vue"
  import type { RouteProps } from "@/components/BackComponent.vue"
  import BaseSection from "@/components/BaseSection.vue"
  import RemainingBudget from "@/components/RemainingBudget.vue"
  import SubHeader from "@/components/SubHeader.vue"
  import type { TitleComponentProps } from "@/components/TitleComponent.vue"
  import router from "@/router"
  import { formatDateToDayMonth } from "@/lib/date"
  import { getSpaceColor } from "@/services/getColor"
  import { Button } from "primevue"
  import type { ExpenseDateType } from "@/types/expense"
  import ExpenseCardComponent from "@/components/ExpenseCardComponent.vue"
  import type { GroupType } from "@/types/group"
  interface Props {
    group: GroupType
    haveCategory?: boolean
    actionButton?: boolean
    subHeader: TitleComponentProps & RouteProps
    expensesDate?: ExpenseDateType
  }

  const props = defineProps<Props>()
</script>

<template>
  <SubHeader
    :label="subHeader.label"
    :color="subHeader?.color"
    :routeName="subHeader.routeName"
    :params="subHeader.params"
  />
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-2 sm:flex-row justify-between items-center">
      <RemainingBudget :space_id="group.id" />
      <div v-if="actionButton">
        <Button
          icon="pi pi-eye"
          label="Budget"
          class="mr-2"
          size="small"
          :class="[getSpaceColor({ color: group?.color })]"
          @click="router.push({ name: 'budget_space', params: { space_id: group?.id } })"
        />
        <Button
          icon="pi pi-pencil"
          label="Edition"
          size="small"
          :class="[getSpaceColor({ color: group?.color })]"
          @click="router.push({ name: 'edit_space', params: { id: group?.id } })"
        />
      </div>
    </div>
    <BaseSection
      v-if="expensesDate"
      v-for="([date, expenses], index) in Object.entries(expensesDate)"
      :label="formatDateToDayMonth(new Date(date))"
      :key="index"
    >
      <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ExpenseCardComponent v-for="expense in expenses" :key="expense.id" :expense="expense" />
      </div>
    </BaseSection>
    <p v-else>Créer votre première dépense !</p>
  </div>
  <AddAction
    route-name="new_expense"
    :class="[getSpaceColor({ color: group?.color })]"
    :params="{ space_id: String(group?.id) ?? 'error' }"
  />
</template>
