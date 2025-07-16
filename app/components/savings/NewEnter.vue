<script lang="ts" setup>
import type { FormModel } from "~/pages/savings/index.vue";
export type CategoryForm = "exits" | "enters";
defineProps<{ category: CategoryForm }>();
const form = defineModel<FormModel>("form");
</script>

<template>
  <Card>
    <template #title
      >{{ category === "exits" ? "Sortie" : "Entrée" }} d'argent</template
    >
    <template #content>
      <div class="flex flex-col gap-14 sm:gap-8 mt-3">
        <div
          v-for="(current, i) in form?.[category]"
          :key="i"
          class="flex gap-8 justify-between sm:flex-row flex-col"
        >
          <div class="flex gap-6">
            <FloatLabel class="w-40">
              <InputText v-model="current.name" fluid />
              <label :for="`${current}-${i}-name`">Nom</label>
            </FloatLabel>
            <div class="flex gap-3 items-center">
              <FloatLabel class="w-22">
                <InputNumber v-model="current.value" fluid />
                <label :for="`${current}-${i}-value`">Montant</label>
              </FloatLabel>
              <p class="font-bold text-3xl">€</p>
            </div>
          </div>

          <Button
            v-if="form?.[category] && i === form[category].length - 1"
            class="h-fit"
            :disabled="
              !(
                current.name &&
                current.name.trim() !== '' &&
                current.value !== null
              )
            "
            icon="pi pi-plus"
            :aria-label="`add ${category}`"
            @click="form?.[category].push({ name: null, value: null })"
          />
        </div>
      </div>
    </template>
  </Card>
</template>
