<script setup lang="ts">
import AddAction from "~/components/ui-kit/AddAction.vue";
import type { RouteProps } from "@/components/header-temp/BackComponent.vue";
import BaseSection from "~/components/ui-kit/BaseSection.vue";
import RemainingBudget from "~/components/ui-kit/RemainingBudget.vue";
import SubHeader from "@/components/header-temp/SubHeader.vue";
import type { TitleComponentProps } from "@/components/header-temp/TitleComponent.vue";
import { formatDayMonth } from "@/utils/date";
import { getSpaceColor } from "@/utils/getColor";
import { Button } from "primevue";
import type { ExpenseDateType } from "@/types/expenseType";
import ExpenseCardComponent from "~/components/ui-kit/ExpenseCardComponent.vue";
import type { GroupType } from "@/types/groupType";
import { computed } from "vue";
import type { CategoryType } from "@/types/categoryType";
import { hasEditPermission } from "@/utils/authorization";
interface Props {
  group: GroupType;
  haveCategory?: boolean;
  actionButton?: boolean;
  subHeader: TitleComponentProps & RouteProps;
  expensesDate?: ExpenseDateType;
  category?: CategoryType;
}

const props = defineProps<Props>();
const safeExpensesDate = computed(() => props.expensesDate ?? {});
const router = useRouter();
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
      <RemainingBudget :group_id="group.id" :category="category" />
      <div v-if="actionButton">
        <Button
          icon="pi pi-eye"
          label="Budget"
          class="mr-2"
          size="small"
          :class="[getSpaceColor({ color: group?.color })]"
          @click="
            router.push({
              name: 'budget_group',
              params: { group_id: group.id },
            })
          "
        />
        <Button
          v-if="hasEditPermission(group)"
          icon="pi pi-pencil"
          label="Edition"
          size="small"
          :class="[getSpaceColor({ color: group?.color })]"
          @click="
            router.push({ name: 'edit_group', params: { group_id: group.id } })
          "
        />
      </div>
    </div>
    <template v-if="Object.keys(safeExpensesDate).length > 0">
      <BaseSection
        v-for="([date, expenses], index) in Object.entries(safeExpensesDate)"
        :label="formatDayMonth(new Date(date))"
        :key="index"
      >
        <div class="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <ExpenseCardComponent
            :group-id="group.id"
            v-for="expense in expenses"
            :key="expense.id"
            :expense="expense"
          />
        </div>
      </BaseSection>
    </template>
    <p v-else>Créer votre première dépense !</p>
  </div>
  <AddAction
    v-if="group && group.userRole !== 'viewer' && group.userRole !== 'banned'"
    route-name="new_expense"
    :class="[getSpaceColor({ color: group.color })]"
    :params="{
      group_id: String(group.id),
    }"
    :query="{
      ...(category ? { category: category.id } : { category: 0 }),
    }"
  />
</template>
