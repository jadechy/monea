// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { MyPreset } from "./themes/mytheme";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_URL,
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@pinia/nuxt",
    "@primevue/nuxt-module",
    "@nuxtjs/sitemap",
  ],
  site: {
    url: process.env.NUXT_PUBLIC_BASE_URL,
    name: "Monéa",
  },
  sitemap: {
    autoLastmod: true,
    defaults: {
      changefreq: "monthly",
      priority: 0.7,
    },
    exclude: [
      "/auth/**",
      "/terms",
      "/privacy",
      "/oauth/**",
      /^\/middleware/,
      /^\/NotFoundView$/,
    ],
    sources: ["/api/__sitemap__/urls"],
  },
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: false,
          cssLayer: {
            name: "primevue",
            order: "theme, base, primevue",
          },
        },
      },
    },
  },
  css: ["primeicons/primeicons.css", "~/assets/css/main.css"],

  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/components/ui-kit", pathPrefix: false },
    { path: "~/components/group", pathPrefix: false },
    { path: "~/components/profil", pathPrefix: false },
    { path: "~/components/layout", pathPrefix: false },
    { path: "~/components/homepage", pathPrefix: false },
    { path: "~/components/header", pathPrefix: false },
    { path: "~/components/form", pathPrefix: false },
    { path: "~/components/budget", pathPrefix: false },
    { path: "~/components/savings", pathPrefix: false },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: true,
  },
});
