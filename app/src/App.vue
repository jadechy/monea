<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
 import { Button, InputText } from 'primevue';
import ColoredLabel from './components/ColoredLabel.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper"> 
      <ColoredLabel label="restaurant" />

      <InputText placeholder="lala" />
      <Button label="Submit" severity="primary" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

 
