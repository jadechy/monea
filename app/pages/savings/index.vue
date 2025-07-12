<script setup lang="ts">
import { ref, computed } from "vue";
import DatePicker from "primevue/calendar";
import FloatLabel from "primevue/floatlabel";

type InputData = {
  name: string | null;
  value: number | null;
};
export type FormModel = {
  start: Date | undefined;
  end: Date | undefined;
  enters: InputData[];
  exits: InputData[];
};
const form = ref<FormModel>({
  start: new Date("2024-01-01"),
  end: new Date("2024-06-30"),
  enters: [
    { name: "Salaire", value: 2500 },
    { name: "Vente", value: 300 },
  ],
  exits: [
    { name: "Loyer", value: 800 },
    { name: "Courses", value: 250 },
    { name: "Abonnement", value: 30 },
  ],
});

// const form = ref<FormModel>({
//   start: undefined,
//   end: undefined,
//   enters: [{ name: null, value: null }],
//   exits: [{ name: null, value: null }],
// });

const { months } = useGeneratedMonths({
  form: form,
});
const savings = computed(() => {
  const hasData =
    form.value.enters.some((e) => e.name && e.value != null) ||
    form.value.exits.some((e) => e.name && e.value != null);

  if (!hasData) return [];
  const savings: number[] = [];
  for (let index = 0; index < months.value.length; index++) {
    let entersSum = 0;
    let exitsSum = 0;

    form.value.enters.forEach((enter) => {
      if (enter.value != null) entersSum += enter.value;
    });

    form.value.exits.forEach((exit) => {
      if (exit.value != null) exitsSum += exit.value;
    });
    const prev = savings[savings.length - 1] || 0;
    savings.push(entersSum - exitsSum + prev);
  }
  return savings;
});
const { exportFormToExcel } = useExcelFormSavingsExport({
  form: form.value,
  months: months.value,
  savings: savings.value,
});
</script>

<template>
  <div class="flex gap-8 mt-6">
    <FloatLabel>
      <DatePicker
        v-model="form.start"
        dateFormat="dd/mm/yy"
        showIcon
        fluid
        class="w-full"
        iconDisplay="input"
      />
      <label for="start">Date de début</label>
    </FloatLabel>

    <FloatLabel>
      <DatePicker
        v-model="form.end"
        dateFormat="dd/mm/yy"
        showIcon
        fluid
        class="w-full"
        iconDisplay="input"
      />
      <label for="end">Date de fin</label>
    </FloatLabel>
  </div>
  <div class="flex flex-col lg:flex-row gap-10 mt-6">
    <NewEnter :form="form" category="enters" />
    <NewEnter :form="form" category="exits" />
  </div>
  <div class="flex justify-end mt-14">
    <Button
      @click="async () => await exportFormToExcel()"
      icon="pi pi-file-export"
      label="Exporter via Excel"
    />
  </div>
  <Accordion :value="0" class="shadow-sm mt-3">
    <AccordionPanel
      v-for="(month, monthIndex) in months"
      :key="monthIndex"
      :value="monthIndex"
    >
      <AccordionHeader>{{ month }}</AccordionHeader>
      <AccordionContent>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3"
        >
          <RowSavings category="enters" :form="form" />
          <RowSavings category="exits" :form="form" />
        </div>
        <p
          v-if="!isNaN(savings[monthIndex])"
          class="mt-4 text-center font-bold text-xl"
        >
          Epargne : {{ savings[monthIndex] }} €
        </p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
