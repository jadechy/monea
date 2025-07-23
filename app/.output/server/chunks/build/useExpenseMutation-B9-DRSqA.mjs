import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query';
import { z } from 'zod';
import { f as useRoute, u as useRouter, i as useNuxtApp, k as GroupSchema, U as UserSchema, n as dateSchema, o as UserDTOSchema, j as CategorySchema, D as DateSchema } from './server.mjs';
import { a as getCurrentMonthStartDate, f as formatDateISO } from './date-Bb1fHl5x.mjs';

const FrequencyEnum = z.enum(["daily", "monthly", "weekly", "yearly"]);
const RecurringExpenseSchema = z.object({
  id: z.number(),
  repetitionCount: z.number(),
  frequency: FrequencyEnum,
  endDate: z.string().datetime({ offset: true })
});
const NewRecurringExpenseSchema = RecurringExpenseSchema.pick({
  frequency: true,
  repetitionCount: true,
  endDate: true
});
const ExpenseSchema = z.object({
  id: z.number({
    required_error: "Identifiant requis",
    invalid_type_error: "L'identifiant doit \xEAtre un nombre"
  }),
  amount: z.number({
    required_error: "Le montant est requis",
    invalid_type_error: "Le montant doit \xEAtre un nombre"
  }).positive("Le montant doit \xEAtre positif"),
  title: z.string({
    required_error: "Le titre est requis",
    invalid_type_error: "Le titre doit \xEAtre une cha\xEEne de caract\xE8res"
  }).min(3, "Le titre doit contenir au moins 3 caract\xE8res").max(255, "Le titre doit contenir au maximum 255 caract\xE8res"),
  groupe: GroupSchema.shape.id,
  category: CategorySchema,
  creator: UserDTOSchema,
  spentAt: dateSchema,
  recurring: RecurringExpenseSchema.nullable(),
  participants: z.array(UserDTOSchema, {
    invalid_type_error: "Les participants doivent \xEAtre une liste d'utilisateurs"
  }).optional()
});
const NewExpenseSchema = z.object({
  id: z.number().optional(),
  categoryId: z.number().optional(),
  title: ExpenseSchema.shape.title,
  amount: ExpenseSchema.shape.amount,
  spentAt: z.date(),
  authorId: UserSchema.shape.id,
  groupId: GroupSchema.shape.id,
  recurring: NewRecurringExpenseSchema.nullable().optional(),
  participants: z.array(UserSchema.shape.id)
});
const ExpenseSingleValueDateSchema = ExpenseSchema.pick({
  amount: true,
  id: true,
  title: true,
  category: true
}).extend({ creator: UserDTOSchema.pick({ picture: true, username: true }) });
const ExpenseValueDateSchema = z.array(ExpenseSingleValueDateSchema, {
  invalid_type_error: "Les d\xE9penses doivent \xEAtre une liste"
});
const ExpenseDateSchema = z.record(DateSchema, ExpenseValueDateSchema);
const useExpenseService = () => {
  const { $api } = useNuxtApp();
  const getExpenseById = (id) => $api.get({
    url: `expenses/${id}`,
    schema: ExpenseSchema
  });
  const getAllExpensesByGroup = (group_id) => $api.get({
    url: `expenses/groupe/${group_id}/list`,
    schema: ExpenseDateSchema
  });
  const getMonthlyExpensesByGroup = (group_id, month) => $api.get({
    url: `expenses/groupe/${group_id}/mois/${formatDateISO(month)}/list`,
    schema: ExpenseDateSchema
  });
  const getExpensesByCategory = (category_id) => $api.get({
    url: `expenses/category/${category_id}/list`,
    schema: ExpenseDateSchema
  });
  const postExpense = (expense) => $api.post({
    url: "expenses",
    body: expense,
    schema: z.object({ message: z.string() })
  });
  const patchExpense = (expense_id, expense) => $api.patch({
    url: `expenses/${expense_id}`,
    body: expense,
    schema: z.object({ message: z.string() })
  });
  const deleteExpense = (expense_id) => $api.delete({
    url: `expenses/${expense_id}`,
    schema: z.any()
  });
  return {
    getExpenseById,
    getAllExpensesByGroup,
    getMonthlyExpensesByGroup,
    getExpensesByCategory,
    postExpense,
    patchExpense,
    deleteExpense
  };
};
const useExpenseMutation = () => {
  const route = useRoute();
  const { group_id, category_id, expense_id } = route.params;
  const router = useRouter();
  const {
    postExpense,
    getExpenseById,
    patchExpense,
    deleteExpense,
    getAllExpensesByGroup,
    getExpensesByCategory,
    getMonthlyExpensesByGroup
  } = useExpenseService();
  const queryClient = useQueryClient();
  const invalidateQueries = async () => {
    await Promise.all([
      queryClient.invalidateQueries({
        queryKey: ["expenses-by-group", group_id]
      }),
      queryClient.invalidateQueries({
        queryKey: ["budget", "remaining", Number(group_id)]
      })
    ]);
  };
  const { data: expense } = useQuery({
    queryKey: ["expense-by-id", expense_id],
    queryFn: () => getExpenseById(expense_id),
    enabled: !!expense_id
  });
  const createExpenseMutation = useMutation({
    mutationFn: (data) => postExpense(data),
    onSuccess: async () => {
      await invalidateQueries();
      router.push(`/groups/${group_id}`);
    }
  });
  const updateExpenseMutation = useMutation({
    mutationFn: (data) => patchExpense(expense_id, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["expense-by-id", expense_id]
      });
      await invalidateQueries();
      await router.push({
        name: "expense",
        params: { id: expense_id, group_id }
      });
    }
  });
  const deleteExpenseMutation = useMutation({
    mutationFn: () => deleteExpense(expense_id),
    onSuccess: async () => {
      await invalidateQueries();
      router.push(`/groups/${group_id}`);
    }
  });
  const { data: expenses } = useQuery({
    queryKey: ["expenses-by-group", group_id],
    queryFn: () => getAllExpensesByGroup(group_id),
    enabled: !!group_id
  });
  const { data: expensesByCategory } = useQuery({
    queryKey: ["expenses-by-category", category_id],
    queryFn: () => getExpensesByCategory(category_id),
    enabled: category_id !== void 0
  });
  const { data: expensesByMonthAndGroup, refetch: refetchByMonthAndGroup } = useQuery({
    queryKey: ["expenses-monthly-group", group_id],
    queryFn: () => getMonthlyExpensesByGroup(group_id, getCurrentMonthStartDate())
  });
  return {
    expenses,
    expense,
    createExpenseMutation,
    updateExpenseMutation,
    deleteExpenseMutation,
    expensesByCategory,
    expensesByMonthAndGroup,
    refetchByMonthAndGroup
  };
};

export { FrequencyEnum as F, NewExpenseSchema as N, useExpenseMutation as u };
//# sourceMappingURL=useExpenseMutation-B9-DRSqA.mjs.map
