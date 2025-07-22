<script setup>
if (process.client) {
  const matomoScript = document.createElement("script");
  matomoScript.innerHTML = `
    var _paq = window._paq = window._paq || [];
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//localhost:8081/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '1']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();
  `;
  document.head.appendChild(matomoScript);
}

const trackLoginSuccess = () => {
  if (process.client && window._paq) {
    window._paq.push([
      "trackEvent",
      "Login",
      "connexion_reussie",
      "Connexion réussie par un utilisateur",
    ]);
  }
};

import { useNuxtApp } from "#app";
const nuxtApp = useNuxtApp();
nuxtApp.trackLoginSuccess = trackLoginSuccess;
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
