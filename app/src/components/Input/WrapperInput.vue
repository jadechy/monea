<script lang="ts" setup>
  import type { FormFieldState } from "@primevue/forms"
  import type { InputTextProps } from "primevue/inputtext"
  import { FloatLabel, Message } from "primevue"

  interface Props {
    name: InputTextProps["name"]
    placeholder?: InputTextProps["placeholder"]
    form: {
      register: (field: string, options: any) => any
      reset: () => void
      valid: boolean
    } & {
      [key: string]: FormFieldState
    }
  }
  defineProps<Props>()
</script>
<template>
  <div class="input">
    <FloatLabel variant="on" class="w-full">
      <slot />
      <label :for="name" class="font-normal text-gray-400">{{ placeholder }}</label>
    </FloatLabel>
    <Message v-if="name && form[name]?.invalid" severity="error" size="small">
      {{ form[name].error?.message }}
    </Message>
  </div>
</template>
