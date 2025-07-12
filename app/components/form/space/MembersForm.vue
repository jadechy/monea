<script setup lang="ts">
import BaseSection from "~/components/ui-kit/BaseSection.vue";
import { Button, InputText } from "primevue";
</script>

<template>
  <BaseSection label="Ajouter un membre">
    <div class="flex flex-col w-full lg:w-3/4">
      <InputText placeholder="Pseudo/mail" class="w-full" />
      <Button variant="outlined" size="small" class="mt-2 ml-auto">
        <i class="pi pi-inbox"></i> Envoyer la demande
      </Button>
    </div>
  </BaseSection>
</template>
