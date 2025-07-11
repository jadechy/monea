import { z } from "zod";
import type { CategoryType } from "~/types/categoryType";
import {
  ExpenseDateSchema,
  ExpenseSchema,
  type ExpenseDateType,
  type ExpenseType,
  type NewExpenseType,
} from "~/types/expenseType";
import { formatDateISO } from "~/utils/date"; // si ce helper existe

export const getExpenseById = (id: string): Promise<ExpenseType> =>
  fetchJson({
    url: `expenses/${id}`,
    schema: ExpenseSchema,
  });

export const getAllExpensesByGroup = (
  group_id: string
): Promise<ExpenseDateType> =>
  fetchJson({
    url: `expenses/groupe/${group_id}/list`,
    schema: ExpenseDateSchema,
  });

export const getMonthlyExpensesByGroup = (
  group_id: string,
  month: Date
): Promise<ExpenseDateType> =>
  fetchJson({
    url: `expenses/groupe/${group_id}/mois/${formatDateISO(month)}/list`,
    schema: ExpenseDateSchema,
  });

export const getExpensesByCategory = (
  category_id: CategoryType["id"]
): Promise<ExpenseDateType> =>
  fetchJson({
    url: `expenses/category/${category_id}/list`,
    schema: ExpenseDateSchema,
  });

export const postExpense = (
  expense: NewExpenseType
): Promise<{ message: string }> =>
  postJson({
    url: "expenses",
    body: expense,
    schema: z.object({ message: z.string() }),
  });

export const patchExpense = (
  expense_id: string,
  expense: NewExpenseType
): Promise<{ message: string }> =>
  patchJson({
    url: `expenses/${expense_id}`,
    body: expense,
    schema: z.object({ message: z.string() }),
  });

export const deleteExpense = (expense_id: string): Promise<unknown> =>
  deleteJson({
    url: `expenses/${expense_id}`,
    schema: z.any(),
  });
