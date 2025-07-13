import { z } from "zod";
import { ExpenseDateSchema, ExpenseSchema } from "~/types/expenseType";
import type {
  ExpenseDateType,
  ExpenseType,
  NewExpenseType,
} from "~/types/expenseType";
import { formatDateISO } from "~/utils/date";

export const useExpenseService = () => {
  const { $api } = useNuxtApp();

  const getExpenseById = (id: string): Promise<ExpenseType> =>
    $api.get({
      url: `expenses/${id}`,
      schema: ExpenseSchema,
    });

  const getAllExpensesByGroup = (group_id: string): Promise<ExpenseDateType> =>
    $api.get({
      url: `expenses/groupe/${group_id}/list`,
      schema: ExpenseDateSchema,
    });

  const getMonthlyExpensesByGroup = (
    group_id: string,
    month: Date
  ): Promise<ExpenseDateType> =>
    $api.get({
      url: `expenses/groupe/${group_id}/mois/${formatDateISO(month)}/list`,
      schema: ExpenseDateSchema,
    });

  const getExpensesByCategory = (
    category_id: string
  ): Promise<ExpenseDateType> =>
    $api.get({
      url: `expenses/category/${category_id}/list`,
      schema: ExpenseDateSchema,
    });

  const postExpense = (expense: NewExpenseType): Promise<{ message: string }> =>
    $api.post({
      url: "expenses",
      body: expense,
      schema: z.object({ message: z.string() }),
    });

  const patchExpense = (
    expense_id: string,
    expense: NewExpenseType
  ): Promise<{ message: string }> =>
    $api.patch({
      url: `expenses/${expense_id}`,
      body: expense,
      schema: z.object({ message: z.string() }),
    });

  const deleteExpense = (expense_id: string): Promise<unknown> =>
    $api.delete({
      url: `expenses/${expense_id}`,
      schema: z.any(),
    });

  return {
    getExpenseById,
    getAllExpensesByGroup,
    getMonthlyExpensesByGroup,
    getExpensesByCategory,
    postExpense,
    patchExpense,
    deleteExpense,
  };
};
