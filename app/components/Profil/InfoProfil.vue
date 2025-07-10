<script setup lang="ts">
import type { ColorType } from "@/types/color";

interface Props {
  label: string;
  stat: string;
  color: ColorType;
}
defineProps<Props>();
</script>
<template>
  <div class="flex flex-col items-center gap-0">
    <p class="text-3xl font-semibold" :class="[`text-${color}-700`]">
      {{ stat }}
    </p>
    <p class="text-center">{{ label }}</p>
  </div>
</template>
