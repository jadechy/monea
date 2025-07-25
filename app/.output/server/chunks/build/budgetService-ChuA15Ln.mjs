import { z } from 'zod';
import { j as CategorySchema, D as DateSchema, i as useNuxtApp, k as GroupSchema } from './server.mjs';
import { f as formatDateISO } from './date-Bb1fHl5x.mjs';

const AmountValueSchema = z.number().max(9999, { message: "Le montant ne peut pas d\xE9passer 9999" }).min(0, { message: "Le montant doit \xEAtre sup\xE9rieur ou \xE9gal \xE0 0" });
const BudgetSchema = z.object({
  id: z.number(),
  amount: AmountValueSchema,
  monthStart: DateSchema,
  category: CategorySchema
});
const AmountSchema = z.object({
  amount: AmountValueSchema
});
const BudgetByCategorySchema = BudgetSchema.pick({
  id: true,
  amount: true,
  monthStart: true,
  category: true
});
z.object({
  totalBudget: AmountValueSchema,
  totalSpent: AmountValueSchema,
  remaining: AmountValueSchema,
  categories: BudgetByCategorySchema.array()
});
z.object({
  groupId: GroupSchema.shape.id,
  budgets: z.array(
    BudgetSchema.pick({
      amount: true,
      monthStart: true
    }).extend({ categoryId: CategorySchema.shape.id })
  )
});
const NewBudgetSchemaResolver = BudgetSchema.pick({
  amount: true
}).array();
const BudgetRemainingValueSchema = z.object({
  remaining: z.number(),
  categories: CategorySchema.extend({
    remaining: z.number()
  }).array()
});
const BudgetRemainingByMonthSchema = z.record(
  z.string(),
  BudgetRemainingValueSchema
);
const useBudgetService = () => {
  const { $api } = useNuxtApp();
  const fetchBudgetGroupDateRemaining = (group_id, month) => $api.get({
    url: `budget/${group_id}/${formatDateISO(new Date(month))}/remaining`,
    schema: AmountSchema
  });
  const fetchBudgetCategoryDateRemaining = (category_id, month) => $api.get({
    url: `budget/${category_id}/${formatDateISO(new Date(month))}/remaining/category`,
    schema: AmountSchema
  });
  const fetchBudgetGroup = (group_id, month) => $api.get({
    url: `budget/${group_id}/${formatDateISO(new Date(month))}`,
    schema: AmountSchema
  });
  const fetchAllBudgetCategoriesByGroup = (group_id, month) => $api.get({
    url: `budgets/${group_id}/${formatDateISO(month)}/list`,
    schema: BudgetByCategorySchema.array()
  });
  const fetchAllRemainingBudgetCategoriesByGroup = (group_id, month) => $api.get({
    url: `budgets/${group_id}/${formatDateISO(month)}/remaining/list`,
    schema: BudgetByCategorySchema.array()
  });
  const fetchBudgetRemainingInYear = (group_id, year) => $api.get({
    url: `budget/${group_id}/${year}/year/remaining/list`,
    schema: BudgetRemainingByMonthSchema
  });
  const fetchBudgetRemainingInMonth = (group_id, month) => $api.get({
    url: `budget/${group_id}/${month}/month/remaining/list`,
    schema: BudgetRemainingByMonthSchema
  });
  const postBudgets = (body) => $api.post({
    url: `budgets/edit`,
    body,
    schema: z.object({ message: z.string() })
  });
  return {
    fetchBudgetGroupDateRemaining,
    fetchBudgetCategoryDateRemaining,
    fetchBudgetGroup,
    fetchAllBudgetCategoriesByGroup,
    fetchAllRemainingBudgetCategoriesByGroup,
    fetchBudgetRemainingInYear,
    fetchBudgetRemainingInMonth,
    postBudgets
  };
};

export { NewBudgetSchemaResolver as N, useBudgetService as u };
//# sourceMappingURL=budgetService-ChuA15Ln.mjs.map
