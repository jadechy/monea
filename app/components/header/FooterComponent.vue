<template>
  <footer class="mt-16">
    <div
      class="border-t border-gray-300 max-w-7xl mx-auto px-6 py-10 flex gap-8"
    >
      <!-- À propos -->
      <div class="max-w-lg">
        <div>
          <h3 class="text-lg font-semibold mb-4">Monéa</h3>
          <p class="text-sm">
            Gérer vos dépenses de groupe simplement. Visualisez vos économies et
            prévoyez vos budgets mois par mois.
          </p>
        </div>

        <div>
          <h4 class="text-md font-semibold mt-3">Informations</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/terms" class="hover:underline"
                >Conditions d'utilisation</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/privacy" class="hover:underline"
                >Politique de confidentialité</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Navigation -->
      <div>
        <h4 class="text-md font-semibold mb-3">Navigation</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/auth/login" class="hover:underline"
              >Connexion</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/auth/register" class="hover:underline"
              >Créer un compte</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/user" class="hover:underline">Profil</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t text-center text-xs py-4 border-gray-300">
      © {{ new Date().getFullYear() }} Monéa. Tous droits réservés.
    </div>
  </footer>
</template>
