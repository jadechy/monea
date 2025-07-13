<script setup lang="ts">
import { useBudget } from "~/composables/useBudgetMutation";
import { useGroupsStore } from "@/stores/groupStore";
import { Form } from "@primevue/forms";
import type { FormInstance, FormSubmitEvent } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { Button, DatePicker, InputText } from "primevue";
import { computed, ref, watch } from "vue";
import { NewBudgetSchemaResolver } from "~/types/budgetType";
import type { NewBudgetType } from "~/types/budgetType";
import { useSeo } from "~/composables/useSeo";

// Props
const route = useRoute();
const { group_id } = route.params as {
  group_id: string;
};
// Const
const year = ref<Date | null>(null);
onMounted(() => {
  year.value = new Date();
});
const { group } = storeToRefs(useGroupsStore());
const formRef = ref<FormInstance | null>(null);
const { categories } = useCategoryMutation();
useSeo({
  title: `Modifier le budget du groupe ${group.value?.name}`,
  description: `Ajustez les montants par catégorie, modifiez les plafonds mensuels et gérez les priorités budgétaires du groupe ${group.value?.name}.`,
  ogTitle: `Édition du budget - ${group.value?.name}`,
  ogDescription: `Modifiez le budget partagé du groupe ${group.value?.name} : ajustez les catégories, maîtrisez vos dépenses et anticipez les imprévus.`,
  image: group.value?.picture ?? undefined,
});
// Queries
const { refetchBudget, postBudgetsMutation, budgetList } = useBudget(year);

const computeInitialValues = () => {
  if (!budgetList.value || !categories.value) return {};
  return categories.value.reduce(
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
  if (!categories.value) return;
  await refetchBudget();
  if (formRef.value) {
    const newValues = computeInitialValues();
    formRef.value.setValues(newValues);
  }
});

const onFormSubmit = (form: FormSubmitEvent) => {
  if (!form.valid || !categories.value || !year.value) return;
  const budgets: NewBudgetType["budgets"] = Object.entries(form.states).map(
    (e) => ({
      amount: Number(e[1] && e[1]?.value ? e[1].value : 0),
      monthStart: formatDateISO(getFirstDayOfMonth(year.value!)),
      categoryId: Number(e[0]),
    })
  );
  const data: NewBudgetType = {
    groupId: Number(group_id),
    budgets: budgets,
  };
  postBudgetsMutation.mutate(data);
};

const initialValues = computed(() => computeInitialValues());
</script>

<template>
  <SubHeader
    label="Edition des Budgets"
    :color="group?.color"
    :to="`/groups/${group_id}/budget`"
  />
  <div class="w-full flex justify-center">
    <DatePicker
      v-model="year"
      view="month"
      date-format="mm/yy"
      class="w-64 mt-3"
      input-class="text-center"
    />
  </div>
  <Form
    v-if="budgetList && categories"
    ref="formRef"
    v-slot="$form"
    :initial-values="initialValues"
    :resolver="zodResolver(NewBudgetSchemaResolver)"
    class="flex justify-center flex-col items-center gap-10"
    @submit="onFormSubmit"
  >
    <section class="grid gap-2 grid-cols-2 md:grid-cols-3 mt-6 w-full">
      <div
        v-for="category in categories"
        :key="category.id"
        class="flex justify-between items-center rounded-full px-4 py-3"
        :class="`bg-${category.color}-50 text-${category.color}-800`"
      >
        <p>{{ category.label !== "default" ? category.label : "Autres" }}</p>
        <div class="flex items-center gap-2">
          <WrapperInput
            :form="$form"
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
      :class="[getGroupColor({ color: group?.color })]"
      type="submit"
      class="w-64"
      label="Sauvergarde les budgets"
    />
  </Form>
  <LoadingComponent v-else />
</template>
