<script setup lang="ts">
import { Button, DatePicker, InputNumber, Listbox, Select } from "primevue";
import { getGroupColor } from "@/utils/getColor";
import { computed, ref, watchEffect, type ComputedRef } from "vue";
import { Form, type FormSubmitEvent } from "@primevue/forms";
import { NewExpenseSchema, type NewExpenseType } from "@/types/expenseType";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useAuthStore } from "~/stores/authStore";
import { convertToLocalDate } from "@/utils/date";
import { useExpenseMutation } from "@/composables/useExpenseMutation";
import { useGroupsStore } from "@/stores/groupStore";
import type { UserType } from "@/types/user";
// Props

const route = useRoute();
const { group_id, category_id, expense_id } = route.params as {
  group_id: string;
  category_id?: string;
  expense_id?: string;
};
// Store
const { group } = storeToRefs(useGroupsStore());
const { user } = useAuthStore();
// Const
const categories = computed(() => {
  if (!group.value) return [];
  return group?.value.categories?.filter(
    (category) => category.label !== "default"
  );
});
// Mutation
const {
  expense,
  createExpenseMutation,
  updateExpenseMutation,
  deleteExpenseMutation,
} = useExpenseMutation();
const { members } = useMemberMutation();
type FormattedMembers = {
  label: string;
  value: number;
};
const formattedMembers: ComputedRef<FormattedMembers[] | undefined> = computed(
  () =>
    members.value?.map((member) => ({
      label: member.user.username,
      value: member.user.id,
    }))
);
const getInitialAuthor = (userAuthorId: UserType["id"]) => {
  return computed(
    () =>
      userAuthorId &&
      formattedMembers.value?.filter(
        (member) => member.value === userAuthorId
      )[0]
  );
};
const onDelete = () => {
  if (!expense_id) return;
  if (confirm("Es-tu sûr de vouloir supprimer la dépense ?")) {
    deleteExpenseMutation.mutate();
  }
};
// Form
const initialValues = ref();
watchEffect(() => {
  if (!members.value || !formattedMembers.value) return;

  if (expense?.value) {
    const e = expense.value;
    initialValues.value = {
      title: e.title,
      amount: e.amount,
      spentAt: new Date(e.spentAt),
      author: getInitialAuthor(e.creator.id).value,
      category: e.category.label !== "default" ? e.category : null,
      frequency: e.recurring?.frequency ?? null,
      repetitionCount: e.recurring?.repetitionCount ?? null,
      endDate: e.recurring?.endDate ?? null,
      participants:
        e.participants
          ?.map((p) => formattedMembers.value?.find((m) => m.value === p.id))
          .filter(Boolean) || [],
    };
  } else {
    initialValues.value = {
      title: "",
      amount: null,
      spentAt: new Date(),
      author: user && getInitialAuthor(user?.id).value,
      category: categories.value?.find(
        (category) => category.id === Number(category_id)
      ),
      frequency: null,
      repetitionCount: null,
      endDate: null,
      participants: [],
    };
  }
});

const onFormSubmit = (form: FormSubmitEvent) => {
  if (!form.valid || !group.value) return;
  const {
    title,
    amount,
    spentAt,
    author,
    category,
    frequency,
    repetitionCount,
    endDate,
    participants,
  } = form.states;
  const data: NewExpenseType = {
    title: title.value,
    amount: amount.value,
    spentAt: convertToLocalDate(new Date(spentAt.value)),
    groupId: group.value.id,
    authorId: author.value.value,
    participants: participants.value?.map(
      (participant: FormattedMembers) => participant.value
    ),
  };
  if (category && category.value) {
    data["categoryId"] = Number(category.value.id);
  }
  if (
    frequency &&
    repetitionCount &&
    endDate &&
    frequency.value &&
    repetitionCount.value &&
    endDate.value
  ) {
    data["recurring"] = {
      frequency: frequency.value,
      repetitionCount: repetitionCount.value,
      endDate: endDate.value,
    };
  } else data["recurring"] = null;
  expense_id && expense
    ? updateExpenseMutation.mutate(data)
    : createExpenseMutation.mutate(data);
};

const baseRoute = `/groups/${group_id}`;
</script>

<template v-if="group">
  <SubHeader
    :label="expense ? expense.title : 'Nouveau expense'"
    :color="group?.color"
    :to="expense ? `${baseRoute}/expense/${expense_id}` : baseRoute"
  />
  <div
    v-if="!initialValues || !formattedMembers"
    class="flex justify-center p-8"
  >
    <p>Chargement...</p>
  </div>

  <!-- :form="$form"  -->
  <Form
    v-else
    v-slot="$form"
    :initialValues="initialValues"
    :resolver="zodResolver(NewExpenseSchema)"
    @submit="onFormSubmit"
    class="flex flex-col items-center gap-10 lg:w-2/3 mx-auto"
  >
    <WrapperInput
      name="category"
      :form="$form"
      placeholder="Catégorie"
      v-if="categories && categories.length > 0"
    >
      <Select
        name="category"
        :options="categories"
        optionLabel="label"
        class="w-full md:w-56"
        :labelClass="[
          'capitalize',
          `text-${$form.category?.value?.color ?? 'gray'}-600`,
        ]"
      />
    </WrapperInput>

    <FormInput name="title" placeholder="Nom" :form="$form" />
    <div class="flex gap-4 w-full items-end">
      <WrapperInput :form="$form" name="amount" placeholder="Prix">
        <InputNumber class="w-full" name="amount" />
      </WrapperInput>
      <p class="text-3xl font-black mb-1">€</p>
    </div>

    <div class="flex justify-between w-full gap-4">
      <WrapperInput :form="$form" name="author" placeholder="Auteur">
        <Select
          name="author"
          :options="formattedMembers"
          optionLabel="label"
          :labelClass="['capitalize']"
          class="w-2/3"
        />
      </WrapperInput>
      <WrapperInput name="spentAt" :form="$form" placeholder="jj/mm/yyyy">
        <DatePicker
          name="spentAt"
          showIcon
          iconDisplay="input"
          dateFormat="dd/mm/yy"
        />
      </WrapperInput>
    </div>
    <BaseSection label="Participants" class="w-full">
      <Listbox
        name="participants"
        :options="formattedMembers"
        multiple
        optionLabel="label"
        class="w-full"
        fluid
      />
    </BaseSection>

    <RecurringExpenseFormComponent
      :form="$form"
      :recurringExpense="expense?.recurring"
      v-if="group?.type === 'daily'"
    />
    <div class="flex flex-col gap-3 w-64" v-if="expense">
      <Button :class="[getGroupColor({ color: group?.color })]" type="submit">
        Modifier la dépense
      </Button>
      <Button
        variant="outlined"
        @click="onDelete()"
        :class="getGroupColor({ color: group?.color, outlined: true })"
      >
        Supprimer la dépense
      </Button>
    </div>
    <Button
      class="w-64"
      :class="[getGroupColor({ color: group?.color })]"
      type="submit"
      v-else
    >
      Créer la dépense
    </Button>
  </Form>
</template>
