import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import PrimeVue from "primevue/config"
import Aura from "@primeuix/themes/aura"
import { definePreset } from "@primeuix/themes"
import type { ButtonTokenSections } from "@primeuix/themes/types/button"
import type { InputTextTokenSections } from "@primeuix/themes/types/inputtext"
import "primeicons/primeicons.css"
import type { SelectTokenSections } from "@primeuix/themes/types/select"
// @ts-ignore
import Matomo from "vue-matomo"
import { createPinia } from "pinia"
import {
  MutationCache,
  QueryCache,
  QueryClient,
  VueQueryPlugin,
  type VueQueryPluginOptions,
} from "@tanstack/vue-query"
import { handleApiError } from "./utils/errorHandler"

const buttonRoot: ButtonTokenSections.Root = {
  primary: {
    background: "{primitive.pink.500}",
    activeBackground: "{primitive.pink.500}",
    color: "{primitive.pink.500}",
    focusRing: {},
  },
  borderRadius: "300px",
}

const inputtextRoot: InputTextTokenSections.Root = {
  borderRadius: "300px",
  shadow: "0 4px 8px rgba(79,79,79,0.1)",
  borderColor: "none",
  placeholderColor: "{primitive.gray.400}",
  focusRing: {
    shadow: "0 4px 8px rgba(79,79,79,0.1)",
    width: "1px",
    style: "solid",
    color: "{primitive.gray.100}",
  },
}

const selectRoot: SelectTokenSections.Root = {
  borderRadius: "300px",
  borderColor: "none",
  shadow: "0 4px 8px rgba(79,79,79,0.1)",
  focusRing: {
    shadow: "0 4px 8px rgba(79,79,79,0.1)",
  },
}
const selectOption: SelectTokenSections.Option = {
  borderRadius: "300px",
}
const selectOverlay: SelectTokenSections.Overlay = {
  shadow: "none",
  borderRadius: "1rem",
}

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{gray.50}",
      100: "{gray.100}",
      200: "{gray.200}",
      300: "{gray.300}",
      400: "{gray.400}",
      500: "{gray.950}",
      600: "{gray.900}",
      700: "{gray.700}",
      800: "{gray.800}",
      900: "{gray.900}",
      950: "{gray.950}",
    },
  },
  components: {
    button: {
      root: buttonRoot,
    },
    inputtext: {
      root: inputtextRoot,
    },
    select: {
      root: selectRoot,
      option: selectOption,
      overlay: selectOverlay,
    },
  },
})

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.error("Erreur query:", error)
      handleApiError(error)
      if (query.state.fetchStatus === "fetching") {
        handleApiError(error)
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, variables, context, mutation) => {
      console.error("Erreur mutation:", error)
      handleApiError(error)
    },
  }),
  defaultOptions: {
    queries: {
      retry: (failureCount, error: any) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403 ||
          error?.response?.status === 404
        ) {
          return false
        }
        return failureCount < 3
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000,
    },
    mutations: { retry: false },
  },
})

const vueQueryOptions: VueQueryPluginOptions = {
  queryClient,
}
const app = createApp(App)
const pinia = createPinia()

app.use(VueQueryPlugin, vueQueryOptions)
app.use(pinia)
app.use(Matomo, {
  host: "http:localhost:5173",
  siteId: 1,
  router: router,
  enableLinkTracking: true,
  requireConsent: false,
  trackInitialView: true,
  trackPageView: true,
})

app.use(router)
app.use(PrimeVue, {
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
})
app.mount("#app")
