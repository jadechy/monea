<template>
  <header class="flex justify-between lg:px-10 px-5 mt-5 items-center">
    <h1 class="font-extrabold text-4xl mb-1.5">Monéa</h1>
    <nav class="flex gap-4">
      <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
      <RouterLink :to="{ name: 'space', params: { id: 6 } }">Espace personnel</RouterLink>
      <RouterLink :to="{ name: 'profil' }">Profil</RouterLink>
    </nav>
  </header>
</template>
