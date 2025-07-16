import type { FormFieldState } from "@primevue/forms";

export type FormState = {
  register: (
    field: string,
    options: Record<string, unknown>
  ) => Record<string, unknown>;
  reset: () => void;
  valid: boolean;
} & {
  [key: string]: FormFieldState;
};
