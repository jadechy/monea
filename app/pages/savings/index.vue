<script setup lang="ts">
import { ref, computed } from "vue";
import DatePicker from "primevue/calendar";

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
useSeo({
  title: "Prévision d’épargne mois par mois",
  description:
    "Estimez facilement votre épargne potentielle en entrant vos revenus et dépenses. Visualisez un tableau mois par mois pour mieux gérer votre budget.",
  ogTitle: "Prévision d’épargne mois par mois",
  ogDescription:
    "Visualisez votre épargne potentielle mois par mois avec Monea. Entrez vos revenus et dépenses pour un meilleur suivi de votre budget.",
});
const form = ref<FormModel>({
  start: undefined,
  end: undefined,
  enters: [{ name: null, value: null }],
  exits: [{ name: null, value: null }],
});

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
  <div class="flex gap-8 mt-6 w-full md:max-w-3/4">
    <DatePicker
      v-model="form.start"
      date-format="dd/mm/yy"
      show-icon
      fluid
      class="w-full"
      icon-display="input"
      placeholder="Date de début"
    />

    <DatePicker
      v-model="form.end"
      date-format="dd/mm/yy"
      show-icon
      fluid
      class="w-full"
      icon-display="input"
      placeholder="Date de fin"
    />
  </div>
  <div class="flex flex-col lg:flex-row gap-10 mt-6">
    <NewEnter :form="form" category="enters" />
    <NewEnter :form="form" category="exits" />
  </div>
  <div v-if="months.length > 0" class="flex justify-end mt-14">
    <Button
      icon="pi pi-file-export"
      label="Exporter via Excel"
      @click="async () => await exportFormToExcel()"
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
