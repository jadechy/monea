<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import WrapperInput from "@/components/InputComponent/WrapperInput.vue"
  import { FrequencyEnum, type RecurringExpenseType } from "@/types/recurringExpenseType"
  import type { FormFieldState } from "@primevue/forms"
  import { Card, DatePicker, InputNumber, Select } from "primevue"
  import { ref } from "vue"
  const { recurringExpense, form } = defineProps<{
    form: {
      register: (field: string, options: any) => any
      reset: () => void
      valid: boolean
    } & {
      [key: string]: FormFieldState
    }
    recurringExpense?: RecurringExpenseType
  }>()
  const isActif = ref(recurringExpense !== undefined)
  const deleteRecurring = () => {
    form.repetitionCount.value = null
    form.frequency.value = null
    form.endDate.value = null
    isActif.value = false
  }
</script>

<template>
  <div class="item hover" @click="isActif = true" v-if="!isActif">
    <p>Créer une récurrence</p>
    <i class="pi pi-arrow-right"></i>
  </div>
  <Card v-else class="w-full">
    <template #content>
      <div class="flex lg:justify-center items-center gap-4 flex-wrap w-full">
        <WrapperInput
          :form="form"
          name="repetitionCount"
          placeholder="Nombre de fois"
          class="max-w-26"
        >
          <InputNumber class="w-full" name="repetitionCount" fluid />
        </WrapperInput>
        <p>par</p>
        <WrapperInput name="frequency" :form="form" placeholder="Récurrence" class="max-w-32">
          <Select
            name="frequency"
            :options="FrequencyEnum.options"
            class="w-full"
            labelClass="capitalize"
            fluid
          />
        </WrapperInput>
        <p>jusqu'au</p>
        <WrapperInput name="endDate" :form="form" placeholder="jj/mm/yyyy" class="max-w-34">
          <DatePicker
            name="endDate"
            showIcon
            iconDisplay="input"
            fluid
            :min-date="form.spentAt ? new Date(form.spentAt.value) : undefined"
            dateFormat="dd/mm/yy"
          />
        </WrapperInput>
      </div>
    </template>
    <template #footer>
      <p class="item hover w-fit mx-auto mt-12" @click="deleteRecurring">
        <i class="pi pi-times-circle mr-2"></i>Supprimer la récurrence
      </p>
    </template>
  </Card>
</template>
