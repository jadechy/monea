<script lang="ts" setup>
import type { FormModel } from "~/pages/savings/index.vue";

defineProps<{ form: FormModel; type: "exits" | "enters" }>();
</script>

<template>
  <div
    class="item rounded shadow-sm h-fit"
    v-for="(current, i) in form[type].filter((e) => e.name && e.value != null)"
    :key="type + '-' + i"
  >
    <div class="flex gap-2 items-center">
      <Tag
        :severity="type === 'enters' ? 'success' : 'danger'"
        :value="type === 'enters' ? 'Entrée' : 'Sortie'"
      />
      <p>{{ current.name }}</p>
    </div>
    <p>{{ current.value }} €</p>
  </div>
</template>
