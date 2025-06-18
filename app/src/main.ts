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
import { createPinia } from "pinia"

const buttonRoot: ButtonTokenSections.Root = {
  primary: {
    background: "{primitive.pink.500}",
    activeBackground: "{primitive.pink.500}",
    color: "{primitive.pink.500}",
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

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
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
