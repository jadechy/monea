import { definePreset } from "@primeuix/themes";
import type { ButtonTokenSections } from "@primeuix/themes/types/button";
import type { InputTextTokenSections } from "@primeuix/themes/types/inputtext";
import type { SelectTokenSections } from "@primeuix/themes/types/select";
import Aura from "@primeuix/themes/aura";

const buttonRoot: ButtonTokenSections.Root = {
  primary: {
    background: "{primitive.pink.500}",
    activeBackground: "{primitive.pink.500}",
    color: "{primitive.pink.500}",
    focusRing: {},
  },
  borderRadius: "300px",
};

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
};

const selectRoot: SelectTokenSections.Root = {
  borderRadius: "300px",
  borderColor: "none",
  shadow: "0 4px 8px rgba(79,79,79,0.1)",
  focusRing: {
    shadow: "0 4px 8px rgba(79,79,79,0.1)",
  },
};
const selectOption: SelectTokenSections.Option = {
  borderRadius: "300px",
};
const selectOverlay: SelectTokenSections.Overlay = {
  shadow: "none",
  borderRadius: "1rem",
};

export const MyPreset = definePreset(Aura, {
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
});

export default {
  preset: MyPreset,
  options: {
    darkModeSelector: ".my-dark",
  },
};
