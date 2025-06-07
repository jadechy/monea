<script setup lang="ts">
  import SubHeader from "@/components/SubHeader.vue"
  import InfoLayout from "@/layouts/NewSpace/InfoLayout.vue"
  defineProps<{ type?: string }>()
  const heightWindow = window.innerHeight
</script>

<template>
  <SubHeader label="Nouveau space" color="gray" routeName="home" />
  <div v-if="type === 'personal' || type === 'group'">
    <InfoLayout />
  </div>

  <div
    v-else
    class="bg-blue-100 flex flex-col md:flex-row justify-center items-center rounded-sm p-8 gap-6 container"
    :style="{ height: heightWindow * 0.75 + 'px' }"
  >
    <router-link
      :to="{ name: 'new_space', params: { type: 'group' } }"
      class="w-full h-full bg-white flex justify-center items-center rounded-sm font-bold"
      >Créer un groupe</router-link
    >
    <router-link
      :to="{ name: 'new_space', params: { type: 'personal' } }"
      class="w-full h-full bg-white flex justify-center items-center rounded-sm font-bold"
      >Créer un espace personnel</router-link
    >
  </div>
</template>

<style></style>
