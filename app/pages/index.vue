<script setup lang="ts">
import homepage from "~/assets/homepage.jpg";
import { getGroupColor } from "../utils/getColor";

type Average = {
  icon: string;
  label: string;
};
const averages: Average[] = [
  {
    icon: "pi-chart-bar",
    label: "Suivi des dépenses par catégorie",
  },
  {
    icon: "pi-users",
    label: "Partage entre membres d’un groupe",
  },
  {
    icon: "pi-planner",
    label: "Vue mensuelle / annuelle",
  },
];
const router = useRouter();
</script>

<template>
  <div class="flex justify-between px-10 items-center mt-2">
    <h1 class="font-extrabold text-center text-4xl">Monéa</h1>
    <div class="flex gap-4 items-center">
      <RouterLink :to="{ name: 'index' }">Accueil</RouterLink>
      <RouterLink :to="{ name: 'auth-login' }"
        ><Button size="small">Commencer à gerer le budgets</Button></RouterLink
      >
    </div>
  </div>
  <main class="p-10">
    <section class="flex gap-10 items-center">
      <div class="flex flex-col gap-6">
        <p class="text-6xl font-extrabold">Monéa</p>
        <p class="text-2xl font-light text-gray-700">
          Gérez vos budgets en toute simplicité.
        </p>
        <p>
          Une application intuitive pour suivre vos dépenses, planifier l’avenir
          et garder le contrôle de vos finances personnelles ou en groupe.
        </p>
        <div class="flex gap-3">
          <Button
            label="Se connecter"
            @click="router.push({ name: 'auth-login' })"
            :class="[getGroupColor({ color: 'pink' })]"
          />
          <Button
            label="Créer un compte gratuitement"
            @click="router.push({ name: 'auth-register' })"
            :class="[getGroupColor({ color: 'pink' })]"
          />
        </div>
      </div>
      <img class="w-1/2 h-full rounded" :src="homepage" />
    </section>
    <section class="flex justify-center gap-5 my-20">
      <div
        class="w-48 flex flex-col items-center"
        v-for="(average, i) in averages"
        :key="i"
      >
        <p
          class="text-6xl text-center mb-3 pi text-gray-700"
          :class="average.icon"
        />
        <p class="text-center">{{ average.label }}</p>
      </div>
    </section>
    <TestimonialComponent />
  </main>
</template>

<style></style>
