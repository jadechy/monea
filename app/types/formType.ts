import type { FormFieldState } from "@primevue/forms";

export type FormState = {
  register: (field: string, options: any) => any;
  reset: () => void;
  valid: boolean;
} & {
  [key: string]: FormFieldState;
};
