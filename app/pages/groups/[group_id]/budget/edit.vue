<script setup lang="ts">
import { useBudget } from "@/composables/useBudget";
import { useGroupsStore } from "@/stores/groupStore";
import { Form, type FormInstance, type FormSubmitEvent } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useForm } from "@primevue/forms/useform";
import { Button, DatePicker, InputText } from "primevue";
import { computed, ref } from "vue";
import { watch } from "vue";
import {
  NewBudgetSchemaResolver,
  type NewBudgetType,
} from "~/types/budgetType";
import type { GroupType } from "~/types/groupType";

// Props
const { group_id } = defineProps<{ group_id: GroupType["id"] }>();

// Const
const year = ref<Date>(new Date());
const { groupById } = useGroupsStore();
const group = computed(() => groupById({ id: group_id }));
const formRef = ref<FormInstance | null>(null);

// Queries
const { refetchBudget, postBudgetsMutation, budgetList } = useBudget(
  group_id,
  year
);

const computeInitialValues = () => {
  if (!budgetList.value || !group.value?.categories) return {};
  return group.value.categories.reduce(
    (acc, current) => {
      acc[current.id] =
        budgetList.value.find(
          (budget) => Number(budget.category.id) === Number(current.id)
        )?.amount ?? 0;
      return acc;
    },
    {} as Record<string, number>
  );
};

watch(year, async () => {
  if (!group.value) return;
  await refetchBudget();
  if (formRef.value) {
    const newValues = computeInitialValues();
    formRef.value.setValues(newValues);
  }
});

const onFormSubmit = (form: FormSubmitEvent) => {
  if (!form.valid || !group.value) return;
  const budgets: NewBudgetType["budgets"] = Object.entries(form.states).map(
    (e) => ({
      amount: Number(e[1] && e[1]?.value ? e[1].value : 0),
      monthStart: formatDateISO(getFirstDayOfMonth(year.value)),
      categoryId: Number(e[0]),
    })
  );
  const data: NewBudgetType = {
    groupId: group.value.id,
    budgets: budgets,
  };
  postBudgetsMutation.mutate(data);
};

const initialValues = computed(() => computeInitialValues());
const form = useForm({
  initialValues: initialValues.value,
  resolver: zodResolver(NewBudgetSchemaResolver),
});
</script>

<template>
  <SubHeader
    label="Edition des Budgets"
    :color="group?.color"
    routeName="budget_group"
    :params="{
      group_id: group_id,
    }"
  />
  <div class="w-full flex justify-center">
    <DatePicker
      v-model="year"
      view="month"
      dateFormat="mm/yy"
      class="w-64 mt-3"
      input-class="text-center"
    />
  </div>

  <Form
    v-if="budgetList && group?.categories"
    ref="formRef"
    :form="form"
    @submit="onFormSubmit"
    class="flex justify-center flex-col items-center gap-10"
  >
    <section class="grid gap-2 grid-cols-2 md:grid-cols-3 mt-6 w-full">
      <div
        v-for="category in group.categories"
        :to="{
          name: 'category_budget_group',
          params: { group_id: group?.id, category_id: category.id },
        }"
        class="flex justify-between items-center rounded-full px-4 py-3"
        :key="category.id"
        :class="`bg-${category.color}-50 text-${category.color}-800`"
      >
        <p>{{ category.label !== "default" ? category.label : "Autres" }}</p>
        <div class="flex items-center gap-2">
          <WrapperInput
            :form="form"
            :name="String(category.id)"
            placeholder="Budget"
            class="w-24"
          >
            <InputText :name="String(category.id)" fluid />
          </WrapperInput>
          <p class="text-2xl">€</p>
        </div>
      </div>
    </section>
    <Button
      :class="[getSpaceColor({ color: group?.color })]"
      type="submit"
      class="w-64"
      label="Sauvergarde les budgets"
    />
  </Form>
  <Loading v-else />
</template>
