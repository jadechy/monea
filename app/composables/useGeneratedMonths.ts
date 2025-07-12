// composables/useGeneratedMonths.ts
import { computed } from "vue";
import type { FormModel } from "~/pages/savings/index.vue";

export function useGeneratedMonths({ form }: { form: Ref<FormModel> }) {
  const months = computed(() => {
    const start = form.value.start;
    const end = form.value.end;
    if (!start || !end) return [];

    const result: string[] = [];
    const current = new Date(start.getFullYear(), start.getMonth(), 1);
    const last = new Date(end.getFullYear(), end.getMonth(), 1);

    while (current <= last) {
      result.push(
        current.toLocaleDateString("fr-FR", {
          month: "long",
          year: "numeric",
        })
      );
      current.setMonth(current.getMonth() + 1);
    }

    return result;
  });

  return { months };
}
