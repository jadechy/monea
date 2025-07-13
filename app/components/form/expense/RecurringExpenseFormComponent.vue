<script setup lang="ts">
import { FrequencyEnum } from "@/types/recurringExpenseType";
import type { RecurringExpenseType } from "@/types/recurringExpenseType";
import { Card, DatePicker, InputNumber, Select } from "primevue";
import { ref } from "vue";
import type { FormState } from "~/types/formType";
const { recurringExpense = null, form } = defineProps<{
  form: FormState;
  recurringExpense?: RecurringExpenseType | null;
}>();
const isActif = ref(recurringExpense !== undefined);
const { repetitionCount, frequency, endDate, spentAt } = form;
const deleteRecurring = () => {
  repetitionCount.value = null;
  frequency.value = null;
  endDate.value = null;
  isActif.value = false;
};
</script>

<template>
  <div v-if="!isActif" class="item hover" @click="isActif = true">
    <p>Créer une récurrence</p>
    <i class="pi pi-arrow-right" />
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
        <WrapperInput
          name="frequency"
          :form="form"
          placeholder="Récurrence"
          class="max-w-32"
        >
          <Select
            name="frequency"
            :options="FrequencyEnum.options"
            class="w-full"
            label-class="capitalize"
            fluid
          />
        </WrapperInput>
        <p>jusqu'au</p>
        <WrapperInput
          name="endDate"
          :form="form"
          placeholder="jj/mm/yyyy"
          class="max-w-34"
        >
          <DatePicker
            name="endDate"
            show-icon
            icon-display="input"
            fluid
            :min-date="spentAt ? new Date(spentAt.value) : undefined"
            date-format="dd/mm/yy"
          />
        </WrapperInput>
      </div>
    </template>
    <template #footer>
      <p class="item hover w-fit mx-auto mt-12" @click="deleteRecurring">
        <i class="pi pi-times-circle mr-2" />Supprimer la récurrence
      </p>
    </template>
  </Card>
</template>
