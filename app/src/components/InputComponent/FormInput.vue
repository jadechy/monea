<script setup lang="ts">
  import { InputText } from "primevue"
  import type { InputTextProps } from "primevue/inputtext"
  import WrapperInput from "./WrapperInput.vue"
  import type { useFormReturn } from "@primevue/forms/useform"

  interface Props {
    name: InputTextProps["name"]
    required?: InputTextProps["required"]
    placeholder?: InputTextProps["placeholder"]
    disabled?: InputTextProps["disabled"]
    readonly?: InputTextProps["readonly"]
    type?: InputTextProps["type"]
    autocomplete?: InputTextProps["autocomplete"]
    form: useFormReturn
  }

  defineProps<Props>()
</script>

<template>
  <WrapperInput :name :placeholder :form>
    <InputText
      :id="name"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
      :type="type || 'text'"
      class="w-full"
      :autocomplete="autocomplete"
    />
  </WrapperInput>
</template>
