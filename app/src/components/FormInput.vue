<script setup lang="ts">
  import { computed } from "vue"
  import type { FormFieldState } from "@primevue/forms"
  import { InputText, Message, type InputTextProps } from "primevue"
  type FormType = {
    register: (field: string, options?: any) => any
    reset: () => void
    valid: boolean
  } & {
    [key: string]: FormFieldState
  }

  type Props = {
    name: string
    formState: FormType
  } & InputTextProps

  const props = defineProps</* @vue-ignore */ Props>()
  console.log(props.formState)

  const fieldState = computed(() => props.formState[props.name] as FormFieldState | undefined)
</script>

<template>
  <div class="w-full space-y-1">
    <InputText v-bind="props.formState.register(props.name)" class="w-full" :name="name" />
    <Message v-if="fieldState?.invalid" severity="error" size="small" class="!w-full">
      {{ fieldState.error?.message }}
    </Message>
  </div>
</template>
