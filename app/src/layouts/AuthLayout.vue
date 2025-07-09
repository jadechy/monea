<script setup lang="ts">
  import { Button } from "primevue"
</script>

<template>
  <div>
    <h1 class="font-bold text-center text-7xl mt-20 md:mt-30 mb-2">Monéa</h1>
    <RouterView>Accueil</RouterView>
    <RouterView><Button>Commencer à gerer le budgets</Button></RouterView>
  </div>
</template>
