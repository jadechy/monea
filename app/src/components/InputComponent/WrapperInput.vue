<script lang="ts" setup>
  import type { InputTextProps } from "primevue/inputtext"
  import { FloatLabel, Message } from "primevue"
  import type { useFormReturn } from "@primevue/forms/useform"

  interface Props {
    name: InputTextProps["name"]
    placeholder?: InputTextProps["placeholder"]
    form: useFormReturn
  }
  defineProps<Props>()
</script>
<template>
  <div class="input">
    <FloatLabel variant="on" class="w-full">
      <slot />
      <label :for="name" class="font-normal text-gray-400">{{ placeholder }}</label>
    </FloatLabel>
    <Message v-if="name && form.states[name]?.invalid" severity="error" size="small">
      {{ form.states[name].error?.message }}
    </Message>
  </div>
</template>
