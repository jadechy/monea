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
  primitive: {
    pink: {
      50: "#FDF2F7",
      100: "#FDE6F2",
      200: "#FCCBE4",
      300: "#FBA6CF",
      400: "#F76FAE",
      500: "#F0448F",
      600: "#E0226B",
      700: "#C21452",
      800: "#A11344",
      900: "#86153B",
      950: "#520520",
    },
    blue: {
      50: "#EDF5FF",
      100: "#DFEBFF",
      200: "#C5DBFF",
      300: "#A9C6FF",
      400: "#7D9EFC",
      500: "#5E7AF6",
      600: "#4154EA",
      700: "#3341CF",
      800: "#2C38A7",
      900: "#2B3784",
      950: "#191E4D",
    },
    yellow: {
      50: "#FEFDE8",
      100: "#FFFCC2",
      200: "#FFF9A5",
      300: "#FFEB45",
      400: "#FCDA13",
      500: "#ECC006",
      600: "#CC9602",
      700: "#A26A06",
      800: "#86540D",
      900: "#724411",
      950: "#432305",
    },
    green: {
      50: "#F7FDE8",
      100: "#EAFACD",
      200: "#DDF7B1",
      300: "#B9EC6A",
      400: "#9DDF3C",
      500: "#7EC51D",
      600: "#619D13",
      700: "#4A7813",
      800: "#3D5F15",
      900: "#355017",
      950: "#192C07",
    },
    orange: {
      50: "#FEF5EE",
      100: "#FEF1E6",
      200: "#FEE9D6",
      300: "#FBCBA6",
      400: "#F9AD78",
      500: "#F58142",
      600: "#F25F1D",
      700: "#E34513",
      800: "#BC3212",
      900: "#962916",
      950: "#792515",
    },
    gray: {
      50: "#F6F6F6",
      100: "#E7E7E7",
      200: "#D1D1D1",
      300: "#B0B0B0",
      400: "#888888",
      500: "#6D6D6D",
      600: "#5D5D5D",
      700: "#4F4F4F",
      800: "#454545",
      900: "#3D3D3D",
      950: "#1D1D1D",
    },
  },
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

const app = createApp(App)

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
