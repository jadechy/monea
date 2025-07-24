<template>
  <div class="min-h-screen flex justify-center items-center bg-gray-50 p-4">
    <Card class="w-full max-w-md shadow-md rounded-xl">
      <template #title>
        <h1 class="text-5xl text-center font-extrabold text-red-600">
          {{ error.statusCode }}
        </h1>
      </template>

      <template #content>
        <p class="text-lg text-center text-gray-700">
          {{ error.statusMessage || "Une erreur est survenue." }}
        </p>
      </template>

      <template #footer>
        <div class="flex justify-center mt-4">
          <Button
            label="Retour à l'accueil"
            icon="pi pi-home"
            @click="goHome"
            class="p-button-primary"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { Card, Button } from "primevue";

const props = defineProps({
  error: Object,
});

const goHome = () => {
  useRouter().push("/");
};
</script>
