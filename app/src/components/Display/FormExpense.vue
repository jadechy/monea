<script setup lang="ts">
  import SubHeader from "@/components/Header/SubHeader.vue"
  import { Button, DatePicker, InputNumber, Listbox, Select } from "primevue"
  import { getSpaceColor } from "@/utils/getColor"
  import type { GroupType } from "@/types/groupType"
  import { computed, ref, watchEffect, type ComputedRef } from "vue"
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { NewExpenseSchema, type ExpenseType, type NewExpenseType } from "@/types/expenseType"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import WrapperInput from "@/components/InputComponent/WrapperInput.vue"
  import FormInput from "@/components/InputComponent/FormInput.vue"
  import { useAuthStore } from "@/stores/authStore"
  import { convertToLocalDate } from "@/utils/date"
  import { useExpenseMutation } from "@/composables/useExpenseMutation"
  import { useGroupsStore } from "@/stores/groupStore"
  import Recurring from "../Expense/Form/RecurringFormExpense.vue"
  import type { CategoryType } from "@/types/categoryType"
  import { useQuery } from "@tanstack/vue-query"
  import { getMembersByGroup } from "@/services/memberService"
  import type { UserType } from "@/types/user"
  import BaseSection from "../BaseSection.vue"
  import { useForm } from "@primevue/forms/useform"
  // Props
  const {
    space_id,
    id,
    category: categoryId,
  } = defineProps<{
    space_id: GroupType["id"]
    id?: ExpenseType["id"]
    category?: CategoryType["id"]
  }>()
  // Store
  const { groupById } = useGroupsStore()
  const group = computed(() => groupById({ id: space_id }))
  const { user } = useAuthStore()
  // Const
  const categories = computed(() => {
    if (!group.value) return []
    return group?.value.categories?.filter((category) => category.label !== "default")
  })
  // Mutation
  const { expense, createExpenseMutation, updateExpenseMutation, deleteExpenseMutation } =
    useExpenseMutation(space_id, id)
  const { data: members } = useQuery({
    queryKey: ["members-by-group", space_id],
    queryFn: () => getMembersByGroup(space_id),
    enabled: !!space_id,
  })
  type FormattedMembers = {
    label: string
    value: number
  }
  const formattedMembers: ComputedRef<FormattedMembers[] | undefined> = computed(() =>
    members.value?.map((member) => ({
      label: member.user.username,
      value: member.user.id,
    })),
  )
  const getInitialAuthor = (userAuthorId: UserType["id"]) => {
    return computed(
      () =>
        userAuthorId &&
        formattedMembers.value?.filter((member) => member.value === userAuthorId)[0],
    )
  }
  // Form

  const initialValues = ref()
  watchEffect(() => {
    if (!members.value || !formattedMembers.value) return

    if (expense?.value) {
      const e = expense.value
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
      }
    } else {
      initialValues.value = {
        title: "",
        amount: null,
        spentAt: new Date(),
        author: user && getInitialAuthor(user?.id).value,
        category: categories.value?.find((category) => category.id === Number(categoryId)),
        frequency: null,
        repetitionCount: null,
        endDate: null,
        participants: [],
      }
    }
  })

  const onFormSubmit = (form: FormSubmitEvent) => {
    if (!form.valid || !group.value) return
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
    } = form.states
    const data: NewExpenseType = {
      title: title.value,
      amount: amount.value,
      spentAt: convertToLocalDate(spentAt.value),
      groupId: group.value.id,
      authorId: author.value.id,
      participants: participants.value.map((participant: FormattedMembers) => participant.value),
    }
    console.log(data)
    if (category && category.value) {
      data["categoryId"] = category.value.id
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
      }
    } else data["recurring"] = null
    id && expense ? updateExpenseMutation.mutate(data) : createExpenseMutation.mutate(data)
  }
  const onDelete = () => {
    if (!id) return
    deleteExpenseMutation.mutate()
  }
  const form = useForm({
    initialValues: initialValues.value,
    resolver: zodResolver(NewExpenseSchema),
  })
  defineExpose({ form, onFormSubmit, createExpenseMutation, deleteExpenseMutation })
</script>

<template v-if="group">
  <SubHeader
    :label="expense ? expense.title : 'Nouveau expense'"
    :color="group?.color"
    :routeName="expense ? 'expense' : 'space'"
    :params="expense ? { id: expense.id, space_id } : { space_id }"
  />
  <div v-if="!initialValues || !formattedMembers" class="flex justify-center p-8">
    <p>Chargement...</p>
  </div>

  <Form
    v-else
    :form="form"
    @submit="onFormSubmit"
    class="flex flex-col items-center gap-10 lg:w-2/3 mx-auto"
  >
    <WrapperInput
      name="category"
      :form="form"
      placeholder="Catégorie"
      v-if="categories && categories.length > 0"
    >
      <Select
        name="category"
        :options="categories"
        optionLabel="label"
        class="w-full md:w-56"
        :labelClass="['capitalize', `text-${form.states.category?.value?.color ?? 'gray'}-600`]"
      />
    </WrapperInput>

    <FormInput name="title" placeholder="Nom" :form="form" />
    <div class="flex gap-4 w-full items-end">
      <WrapperInput :form="form" name="amount" placeholder="Prix">
        <InputNumber class="w-full" name="amount" />
      </WrapperInput>
      <p class="text-3xl font-black mb-1">€</p>
    </div>

    <div class="flex justify-between w-full gap-4">
      <WrapperInput :form="form" name="author" placeholder="Auteur">
        <Select
          name="author"
          :options="formattedMembers"
          optionLabel="label"
          :labelClass="['capitalize']"
          class="w-2/3"
        />
      </WrapperInput>
      <WrapperInput name="spentAt" :form="form" placeholder="jj/mm/yyyy">
        <DatePicker name="spentAt" showIcon iconDisplay="input" dateFormat="dd/mm/yy" />
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

    <Recurring :form="form" :recurringExpense="expense?.recurring" v-if="group?.type === 'daily'" />
    <div class="flex flex-col gap-3 w-64" v-if="expense">
      <Button :class="[getSpaceColor({ color: group?.color })]" type="submit">
        Modifier la dépense
      </Button>
      <Button
        variant="outlined"
        @click="onDelete()"
        :class="getSpaceColor({ color: group?.color, outlined: true })"
      >
        Supprimer la dépense
      </Button>
    </div>
    <Button class="w-64" :class="[getSpaceColor({ color: group?.color })]" type="submit" v-else>
      Créer la dépense
    </Button>
  </Form>
</template>
