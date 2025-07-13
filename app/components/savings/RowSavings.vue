<script lang="ts" setup>
import type { FormModel } from "~/pages/savings/index.vue";
import type { CategoryForm } from "./NewEnter.vue";

defineProps<{ form: FormModel; category: CategoryForm }>();
</script>

<template>
  <div
    v-for="(current, i) in form[category].filter(
      (e) => e.name && e.value != null
    )"
    :key="category + '-' + i"
    class="item rounded shadow-sm h-fit"
  >
    <div class="flex gap-2 items-center">
      <Tag
        :severity="category === 'enters' ? 'success' : 'danger'"
        :value="category === 'enters' ? 'Entrée' : 'Sortie'"
      />
      <p>{{ current.name }}</p>
    </div>
    <p>{{ current.value }} €</p>
  </div>
</template>
