<script setup lang="ts">
  import { RouterView } from "vue-router"
  import ColoredLabel from "./components/ColoredLabelComponent.vue"
  import SpendCardComponent from "./components/SpendCardComponent.vue"
  import SpendDate, { type SpendDateProps } from "./components/SpendDate.vue"
  import { spendsData } from "./data/spends"
  const spends: SpendDateProps[] = spendsData
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <Button label="Submit" severity="primary" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <main class="px-10">
    <SpendDate
      v-for="spend in spends"
      :key="spend.date"
      :spends="spend.spends"
      :date="spend.date"
    />
    <SpendCardComponent label="lala" :price="90.0" people="Jean" />
    <SpendCardComponent label="lala" colored-label="restaurant" :price="90.0" people="Jean" />
    <ColoredLabel label="restaurant" />
    <InputText placeholder="lala" />
    <RouterView />
  </main>
</template>
