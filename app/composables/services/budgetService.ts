import { AmountSchema, BudgetByCategorySchema } from "~/types/budgetType";
import type {
  AmountType,
  BudgetByCategoryType,
  BudgetType,
  NewBudgetType,
} from "~/types/budgetType";
import { CategorySchema } from "~/types/categoryType";
import { formatDateISO } from "~/utils/date";

import { z } from "zod";

const BudgetRemainingValueSchema = z.object({
  remaining: z.number(),
  categories: CategorySchema.extend({
    remaining: z.number(),
  }).array(),
});

const BudgetRemainingByMonthSchema = z.record(
  z.string(),
  BudgetRemainingValueSchema
);

export type BudgetRemainingValueType = z.infer<
  typeof BudgetRemainingValueSchema
>;
export type BudgetRemainingByMonthType = z.infer<
  typeof BudgetRemainingByMonthSchema
>;

export const useBudgetService = () => {
  const { $api } = useNuxtApp();

  const fetchBudgetGroupDateRemaining = (
    group_id: string,
    month: BudgetType["monthStart"]
  ): Promise<AmountType> =>
    $api.get({
      url: `budget/${group_id}/${formatDateISO(new Date(month))}/remaining`,
      schema: AmountSchema,
    });

  const fetchBudgetCategoryDateRemaining = (
    category_id: string,
    month: BudgetType["monthStart"]
  ): Promise<z.infer<typeof AmountSchema>> =>
    $api.get({
      url: `budget/${category_id}/${formatDateISO(new Date(month))}/remaining/category`,
      schema: AmountSchema,
    }) as Promise<z.infer<typeof AmountSchema>>;

  const fetchBudgetGroup = (
    group_id: string,
    month: BudgetType["monthStart"]
  ): Promise<z.infer<typeof AmountSchema>> =>
    $api.get({
      url: `budget/${group_id}/${formatDateISO(new Date(month))}`,
      schema: AmountSchema,
    }) as Promise<z.infer<typeof AmountSchema>>;

  const fetchAllBudgetCategoriesByGroup = (
    group_id: string,
    month: Date
  ): Promise<BudgetByCategoryType[]> =>
    $api.get({
      url: `budgets/${group_id}/${formatDateISO(month)}/list`,
      schema: BudgetByCategorySchema.array(),
    });

  const fetchAllRemainingBudgetCategoriesByGroup = (
    group_id: string,
    month: Date
  ): Promise<BudgetByCategoryType[]> =>
    $api.get({
      url: `budgets/${group_id}/${formatDateISO(month)}/remaining/list`,
      schema: BudgetByCategorySchema.array(),
    });

  const fetchBudgetRemainingInYear = (
    group_id: string,
    year: string
  ): Promise<BudgetRemainingByMonthType> =>
    $api.get({
      url: `budget/${group_id}/${year}/year/remaining/list`,
      schema: BudgetRemainingByMonthSchema,
    }) as Promise<BudgetRemainingByMonthType>;

  const fetchBudgetRemainingInMonth = (
    group_id: string,
    month: string
  ): Promise<BudgetRemainingByMonthType> =>
    $api.get({
      url: `budget/${group_id}/${month}/month/remaining/list`,
      schema: BudgetRemainingByMonthSchema,
    }) as Promise<BudgetRemainingByMonthType>;

  const postBudgets = (body: NewBudgetType): Promise<{ message: string }> =>
    $api.post({
      url: `budgets/edit`,
      body,
      schema: z.object({ message: z.string() }),
    });

  return {
    fetchBudgetGroupDateRemaining,
    fetchBudgetCategoryDateRemaining,
    fetchBudgetGroup,
    fetchAllBudgetCategoriesByGroup,
    fetchAllRemainingBudgetCategoriesByGroup,
    fetchBudgetRemainingInYear,
    fetchBudgetRemainingInMonth,
    postBudgets,
  };
};
