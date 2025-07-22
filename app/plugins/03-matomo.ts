export default defineNuxtPlugin(() => {
  if (!process.client) return;

  if (!window._paq || !Array.isArray(window._paq)) {
    window._paq = [];
  }
  const _paq = (window._paq = window._paq || []);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  _paq.push(["setTrackerUrl", "http://localhost:8080/matomo.php"]);
  _paq.push(["setSiteId", "1"]);

  const matomoScript = document.createElement("script");
  matomoScript.src = "http://localhost:8080/matomo.js";
  matomoScript.async = true;
  document.head.appendChild(matomoScript);

  const router = useRouter();
  router.afterEach((to) => {
    _paq.push(["setCustomUrl", window.location.origin + to.fullPath]);
    _paq.push(["setDocumentTitle", document.title]);
    _paq.push(["trackPageView"]);
  });
});
