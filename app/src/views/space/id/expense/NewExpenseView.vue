<script setup lang="ts">
  import SubHeader from "@/components/Header/SubHeader.vue"
  import { Button, DatePicker, InputNumber, Select } from "primevue"
  import { getSpaceColor } from "@/utils/getColor"
  import type { GroupType } from "@/types/groupType"
  import { computed } from "vue"
  import { useGroups } from "@/composables/useGroups"
  import { Form, type FormSubmitEvent } from "@primevue/forms"
  import { NewExpenseSchema, type NewExpenseType } from "@/types/expenseType"
  import { zodResolver } from "@primevue/forms/resolvers/zod"
  import WrapperInput from "@/components/Input/WrapperInput.vue"
  import FormInput from "@/components/Input/FormInput.vue"
  import { useAuthStore } from "@/stores/authStore"
  import { useMutation, useQueryClient } from "@tanstack/vue-query"
  import { postExpense } from "@/services/expenseService"
  import router from "@/router"
  import { toLocalDateWithoutTimezoneShift } from "@/utils/date"
  // Props
  const { space_id } = defineProps<{ space_id: GroupType["id"] }>()

  // Const
  const isNew = true

  // Store
  const { groupById } = useGroups()
  const group = computed(() => groupById({ id: space_id }))
  const { user } = useAuthStore()

  // Mutation
  const queryClient = useQueryClient()

  const expenseMutation = useMutation({
    mutationFn: (data: NewExpenseType) => postExpense(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["expenses-by-group", space_id] })
      await queryClient.invalidateQueries({ queryKey: ["budget", "remaining", space_id] })
      router.push({ name: "space", params: { id: space_id } })
    },
  })

  // Form
  const initialValues = {
    title: "",
    amount: 0,
    spentAt: new Date(),
    author: user?.id,
  }

  const onFormSubmit = (form: FormSubmitEvent) => {
    if (!form.valid || !group.value) return
    const data: NewExpenseType = {
      title: form.states.title.value,
      amount: form.states.amount.value,
      spentAt: toLocalDateWithoutTimezoneShift(form.states.spentAt.value),
      groupId: group.value.id,
      authorId: form.states.author.value,
      categoryId: form.states.category.value.id,
    }
    expenseMutation.mutate(data)
  }
</script>

<template v-if="group">
  <SubHeader
    label="Nouveau expense"
    :color="group?.color"
    routeName="space"
    :params="{ id: space_id }"
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
        editable
        showClear
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
    <!-- Bouton -->
    <Button
      class="w-64"
      v-if="isNew"
      :class="[getSpaceColor({ color: group?.color })]"
      type="submit"
    >
      Créer le expense
    </Button>

    <div class="flex flex-col gap-3 w-64" v-else>
      <Button :class="[getSpaceColor({ color: group?.color })]" type="submit">
        Modifier le expense
      </Button>
      <Button variant="outlined" :class="getSpaceColor({ color: group?.color, outlined: true })">
        Supprimer le expense
      </Button>
    </div>
  </Form>
</template>
