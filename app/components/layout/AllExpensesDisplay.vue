<script setup lang="ts">
import { formatDayMonth } from "@/utils/date";
import { getGroupColor } from "@/utils/getColor";
import { Button } from "primevue";
import type { ExpenseDateType } from "@/types/expenseType";
import type { GroupType } from "@/types/groupType";
import { computed } from "vue";
import type { CategoryType } from "@/types/categoryType";
import { hasEditPermission } from "@/utils/authorization";
import type { TitleComponentProps } from "../header/TitleComponent.vue";
import type { RouteProps } from "../header/BackComponent.vue";
import type ImageUploadDialog from "../ui-kit/ImageUploadDialog.vue";
interface Props {
  haveCategory?: boolean;
  actionButton?: boolean;
  subHeader: TitleComponentProps & RouteProps;
  expensesDate?: ExpenseDateType;
  category?: CategoryType;
}

const route = useRoute();
const { group } = storeToRefs(useGroupsStore());
const dialogRef = ref<InstanceType<typeof ImageUploadDialog> | null>(null);

const props = defineProps<Props>();
const safeExpensesDate = computed(() => props.expensesDate ?? {});
const router = useRouter();
const { uploadCoverGroupMutation } = useGroupMutation(group);
</script>

<template>
  <SubHeader
    :label="subHeader.label"
    :color="subHeader?.color"
    :to="subHeader.to"
    :params="subHeader.params"
  />
  <div class="flex flex-col gap-10" v-if="group">
    <div class="flex flex-col gap-2 sm:flex-row justify-between items-center">
      <RemainingBudget :category="category" />
      <div v-if="actionButton">
        <Button
          icon="pi pi-eye"
          label="Budget"
          size="small"
          :class="[getGroupColor({ color: group?.color })]"
          @click="router.push(`/groups/${group.id}/budget`)"
        />
        <Button
          v-if="hasEditPermission(group)"
          icon="pi pi-pencil"
          label="Edition"
          size="small"
          class="mx-2"
          :class="[getGroupColor({ color: group?.color })]"
          @click="router.push(`/groups/${group.id}/edit`)"
        />
        <Button
          v-if="hasEditPermission(group)"
          icon="pi pi-download"
          label="Cover"
          size="small"
          :class="[getGroupColor({ color: group?.color })]"
          @click="dialogRef?.open()"
        />
      </div>
      <ImageUploadDialog
        ref="dialogRef"
        :uploadFn="(file) => uploadCoverGroupMutation.mutateAsync(file)"
        header="Modifier la cover du groupe."
      />
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
    :to="`${route.path}/expense/new`"
    :class="[getGroupColor({ color: group.color })]"
    :query="{
      ...(category ? { category: category.id } : { category: 0 }),
    }"
  />
</template>
