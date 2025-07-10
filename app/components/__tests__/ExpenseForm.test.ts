import FormExpense from "~/components/form/ExpenseForm.vue";
import { useExpenseMutation } from "@/composables/useExpenseMutation";
import type { ExpenseType, NewExpenseType } from "@/types/expenseType";
import { formatDateISO } from "@/utils/date";
import { mount, flushPromises } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { nextTick, ref } from "vue";

// Mocks pour les stores et composables utilisés dans le component
vi.mock("@/stores/authStore", () => ({
  useAuthStore: () => ({
    user: { id: 1 },
  }),
}));

vi.mock("@/stores/groupStore", () => ({
  useGroupsStore: () => ({
    groupById: ({ id }: { id: number }) => ({
      id,
      color: "blue",
      categories: [{ id: 1, label: "food", color: "red" }],
      type: "daily",
    }),
  }),
}));

vi.mock("@/services/memberService", () => ({
  getMembersByGroup: vi.fn(() =>
    Promise.resolve([
      { user: { id: 1, username: "User1" } },
      { user: { id: 2, username: "User2" } },
    ])
  ),
}));

vi.mock("@tanstack/vue-query", () => ({
  useQuery: ({ queryFn }: { queryFn: () => Promise<any> }) => {
    // On exécute la fonction immédiatement et on retourne data comme ref
    const data = ref(null);
    queryFn().then((res) => (data.value = res));
    return { data };
  },
}));

vi.mock("@/composables/useExpenseMutation", () => ({
  useExpenseMutation: () => ({
    expense: ref(null),
    createExpenseMutation: { mutate: vi.fn() },
    updateExpenseMutation: { mutate: vi.fn() },
    deleteExpenseMutation: { mutate: vi.fn() },
  }),
}));

vi.mock("@/utils/date", () => ({
  convertToLocalDate: (date: Date) => date?.toISOString(),
}));

describe("ExpenseForm.vue", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("affiche chargement tant que membres non chargés", async () => {
    const wrapper = mount(FormExpense, {
      props: { space_id: 123 },
    });
    expect(wrapper.text()).toContain("Chargement...");
    await flushPromises();
  });

  it("affiche le formulaire et soumet une création de dépense", async () => {
    const wrapper = mount(FormExpense, {
      props: { space_id: 123 },
      global: {
        stubs: [
          "SubHeader",
          "WrapperInput",
          "FormInput",
          "Recurring",
          "BaseSection",
        ],
      },
    });

    await flushPromises();
    await nextTick();

    // Formulaire visible
    expect(wrapper.find("form").exists()).toBe(true);

    // Simuler la soumission du formulaire
    // On va mocker les valeurs dans form.states
    const formComponent = wrapper.vm.form;
    const statesDate = {
      touched: false,
      dirty: false,
      pristine: true,
      valid: true,
      errors: [],
      invalid: false,
      error: {},
    };
    formComponent.states = {
      title: { value: "Test depense", ...statesDate },
      amount: { value: 42, ...statesDate },
      spentAt: { value: new Date("2023-01-01"), ...statesDate },
      author: { value: { id: 1, label: "User1" }, ...statesDate },
      category: { value: { id: 1, label: "food" }, ...statesDate },
      frequency: { value: null, ...statesDate },
      repetitionCount: { value: null, ...statesDate },
      endDate: { value: null, ...statesDate },
      participants: { value: [{ value: 1, label: "User1" }], ...statesDate },
    };
    formComponent.valid = true;
    const values = Object.fromEntries(
      Object.entries(formComponent.states).map(([key, fieldState]) => [
        key,
        fieldState.value,
      ])
    );

    const submitEvent = {
      originalEvent: new Event("submit"),
      states: values,
      errors: [],
      valid: true,
      reset: () => {},
      values,
    };
    wrapper.vm.onFormSubmit(submitEvent);

    // On vérifie que la mutation create a bien été appelée
    const { createExpenseMutation } = wrapper.vm;
    expect(createExpenseMutation.mutate).toHaveBeenCalledOnce();
    expect(createExpenseMutation.mutate).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Test depense",
        amount: 42,
        groupId: 123,
        authorId: 1,
        participants: [1],
        categoryId: 1,
        recurring: null,
      })
    );
  });

  it("affiche bouton modifier et supprime la dépense", async () => {
    // Ici on simule un expense existant avec un id
    const expenseMock: ExpenseType = {
      id: 99,
      title: "Existing",
      amount: 20,
      spentAt: formatDateISO(new Date()),
      creator: { id: 1, username: "e" },
      category: { id: 1, label: "food", color: "red" },
      participants: [],
      recurring: null,
      groupe: 1,
    };
    const newEpenseMock: NewExpenseType = {
      title: "Existing",
      categoryId: 1,
      authorId: 1,
      amount: 20,
      participants: [],
      spentAt: new Date(),
      recurring: null,
      groupId: 1,
    };
    const mockMutation = {
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
      reset: vi.fn(),
      status: ref<"success">("success"),
      data: ref({ message: "" }),
      error: ref(null),
      isLoading: ref<false>(false),
      isSuccess: ref<true>(true),
      isError: ref<false>(false),
      isIdle: ref<false>(false),
      failureCount: ref(0),
      isPaused: ref<false>(false),
      variables: ref(newEpenseMock),
      context: ref(null),
      isPending: ref(<const>false),
      failureReason: ref(null),
      submitted: ref(false),
      submittedAt: ref(Date.now()),
    };
    const mockMutationDelete = {
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
      reset: vi.fn(),
      status: ref<"success">("success"),
      data: ref({ message: "" }),
      error: ref(null),
      isLoading: ref<false>(false),
      isSuccess: ref<true>(true),
      isError: ref<false>(false),
      isIdle: ref<false>(false),
      failureCount: ref(0),
      isPaused: ref<false>(false),
      variables: ref(undefined),
      context: ref(null),
      isPending: ref(<const>false),
      failureReason: ref(null),
      submitted: ref(false),
      submittedAt: ref(Date.now()),
    };
    vi.mocked(useExpenseMutation).mockReturnValueOnce({
      expense: ref(expenseMock),
      createExpenseMutation: mockMutation,
      updateExpenseMutation: mockMutation,
      deleteExpenseMutation: mockMutationDelete,
    });

    const wrapper = mount(FormExpense, {
      props: { space_id: 123, id: 99 },
      global: {
        stubs: [
          "SubHeader",
          "WrapperInput",
          "FormInput",
          "Recurring",
          "BaseSection",
        ],
      },
    });
    await flushPromises();
    await nextTick();

    expect(wrapper.text()).toContain("Modifier la dépense");
    expect(wrapper.text()).toContain("Supprimer la dépense");

    // Cliquer sur supprimer appelle la mutation delete
    await wrapper
      .find('button:contains("Supprimer la dépense")')
      .trigger("click");

    const { deleteExpenseMutation } = wrapper.vm;
    expect(deleteExpenseMutation.mutate).toHaveBeenCalledOnce();
  });
});
