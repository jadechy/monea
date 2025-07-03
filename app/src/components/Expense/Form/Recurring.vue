<script setup lang="ts">
  import BaseSection from "@/components/BaseSection.vue"
  import WrapperInput from "@/components/InputComponent/WrapperInput.vue"
  import type { FormFieldState } from "@primevue/forms"
  import { DatePicker, InputNumber, Select } from "primevue"
  import { ref } from "vue"
  const props = defineProps<{
    form: {
      register: (field: string, options: any) => any
      reset: () => void
      valid: boolean
    } & {
      [key: string]: FormFieldState
    }
  }>()
  const isActif = ref(false)
  const time = ["day", "week", "month", "year"]
</script>

<template>
  <div class="item hover" @click="isActif = true" v-if="!isActif">
    <p>Créer une récurrence</p>
    <i class="pi pi-arrow-right"></i>
  </div>
  <BaseSection label="Récurrence" v-else class="w-full">
    <div class="flex items-center gap-4 flex-wrap w-full">
      <WrapperInput :form="form" name="count" placeholder="Nombre de fois" class="max-w-34">
        <InputNumber class="w-full" name="count" fluid />
      </WrapperInput>
      <p>par</p>
      <WrapperInput name="time" :form="form" placeholder="Récurrence" class="max-w-34">
        <Select name="time" :options="time" class="w-full" labelClass="capitalize" fluid />
      </WrapperInput>
      <p>jusqu'au</p>
      <WrapperInput name="endRecurring" :form="form" placeholder="jj/mm/yyyy" class="max-w-34">
        <DatePicker
          name="endRecurring"
          showIcon
          iconDisplay="input"
          fluid
          :min-date="new Date(form.spentAt.value)"
          dateFormat="dd/mm/yy"
        />
      </WrapperInput>
    </div>
  </BaseSection>
</template>
