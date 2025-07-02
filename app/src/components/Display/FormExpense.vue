<script setup lang="ts">
  import SubHeader from "@/components/Header/SubHeader.vue"
  import { Button, DatePicker, InputNumber, Select } from "primevue"
  import { getSpaceColor } from "@/utils/getColor"
  import type { GroupType } from "@/types/groupType"
  import { computed } from "vue"
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { NewExpenseSchema, type ExpenseType, type NewExpenseType } from "@/types/expenseType"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import WrapperInput from "@/components/InputComponent/WrapperInput.vue"
  import FormInput from "@/components/InputComponent/FormInput.vue"
  import { useAuthStore } from "@/stores/authStore"
  import { convertToLocalDate } from "@/utils/date"
  import { useExpenseMutation } from "@/composables/useExpenseMutation"
  import { useGroupsStore } from "@/stores/groupStore"
  // Props
  const { space_id, id } = defineProps<{ space_id: GroupType["id"]; id?: ExpenseType["id"] }>()
  // Store
  const { groupById } = useGroupsStore()
  const group = computed(() => groupById({ id: space_id }))
  const { user } = useAuthStore()

  // Mutation
  const { expense, createExpenseMutation, updateExpenseMutation, deleteExpenseMutation } =
    useExpenseMutation(space_id, id)

  // Form
  const initialValues = computed(() => {
    if (expense?.value) {
      const e = expense.value
      return {
        title: e.title,
        amount: e.amount,
        spentAt: new Date(e.spentAt),
        author: e.creator.id,
        category: e.category,
      }
    } else
      ({
        title: "",
        amount: 0,
        spentAt: new Date(),
        author: user?.id,
        category: null,
      })
  })
  const onFormSubmit = (form: FormSubmitEvent) => {
    if (!form.valid || !group.value) return
    const data: NewExpenseType = {
      title: form.states.title.value,
      amount: form.states.amount.value,
      spentAt: convertToLocalDate(form.states.spentAt.value),
      groupId: group.value.id,
      authorId: form.states.author.value,
      categoryId: form.states.category.value.id,
    }
    id && expense ? updateExpenseMutation.mutate(data) : createExpenseMutation.mutate(data)
  }
  const onDelete = () => {
    if (!id) return
    deleteExpenseMutation.mutate()
  }
</script>

<template v-if="group">
  <SubHeader
    :label="expense ? expense.title : 'Nouveau expense'"
    :color="group?.color"
    :routeName="expense ? 'expense' : 'space'"
    :params="expense ? { id: expense.id, space_id } : { space_id }"
  />

  <Form
    v-slot="$form"
    :initialValues="initialValues"
    :resolver="zodResolver(NewExpenseSchema)"
    @submit="onFormSubmit"
    class="flex flex-col items-center gap-10 lg:w-2/3 mx-auto"
  >
    <WrapperInput name="category" :form="$form" placeholder="Catégorie">
      <Select
        v-if="group?.categories"
        name="category"
        :options="group.categories"
        optionLabel="label"
        class="w-full md:w-56"
        :labelClass="['capitalize', `text-${$form.category?.value?.color ?? 'gray'}-600`]"
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
          :options="group?.members?.map((member) => member.memberId)"
          :labelClass="['capitalize']"
          class="w-2/3"
        />
      </WrapperInput>
      <WrapperInput name="spentAt" :form="$form" placeholder="jj/mm/yyyy">
        <DatePicker name="spentAt" showIcon iconDisplay="input" />
      </WrapperInput>
    </div>

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
