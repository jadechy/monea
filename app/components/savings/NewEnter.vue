<script lang="ts" setup>
import type { FormModel } from "~/pages/savings/index.vue";

defineProps<{ form: FormModel; type: "exits" | "enters" }>();
</script>

<template>
  <Card>
    <template #title
      >{{ type === "exits" ? "Sortie" : "Entrée" }} d'argent</template
    >
    <template #content>
      <div class="flex flex-col gap-14 sm:gap-8 mt-3">
        <div
          class="flex gap-8 justify-between sm:flex-row flex-col"
          v-for="(current, i) in form[type]"
          :key="i"
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
            class="h-fit"
            v-if="i === form[type].length - 1"
            :disabled="
              !(
                current.name &&
                current.name.trim() !== '' &&
                current.value !== null
              )
            "
            @click="form[type].push({ name: null, value: null })"
            icon="pi pi-plus"
            :aria-label="`add ${type}`"
          />
        </div>
      </div>
    </template>
  </Card>
</template>
