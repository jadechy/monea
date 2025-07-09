import { formatDateISO } from "@/utils/date"
import {
  ExpenseDateSchema,
  ExpenseSchema,
  type ExpenseType,
  type NewExpenseType,
} from "@/types/expenseType"
import type { GroupType } from "@/types/groupType"
import { deleteJson, fetchJson, patchJson, postJson } from "@/utils/apiMethods"
import { z } from "zod"
import type { CategoryType } from "@/types/categoryType"

export const getExpenseById = (id: ExpenseType["id"]) =>
  fetchJson({
    url: `expenses/${id}`,
    schema: ExpenseSchema,
  })

export const getAllExpensesByGroup = (group_id: GroupType["id"]) =>
  fetchJson({
    url: `expenses/groupe/${group_id}/list`,
    schema: ExpenseDateSchema,
  })
export const getMonthlyExpensesByGroup = (group_id: GroupType["id"], month: Date) =>
  fetchJson({
    url: `expenses/groupe/${group_id}/mois/${formatDateISO(month)}/list`,
    schema: ExpenseDateSchema,
  })

export const getExpensesByCategory = (category_id: CategoryType["id"]) =>
  fetchJson({
    url: `expenses/category/${category_id}/list`,
    schema: ExpenseDateSchema,
  })

export const postExpense = (expense: NewExpenseType) =>
  postJson({
    url: "expenses",
    body: expense,
    schema: z.object({ message: z.string() }),
  })

export const patchExpense = (expense_id: ExpenseType["id"], expense: NewExpenseType) => {
  console.log(expense)
  return patchJson({
    url: `expenses/${expense_id}`,
    body: expense,
    schema: z.object({ message: z.string() }),
  })
}
export const deleteExpense = (expense_id: ExpenseType["id"]) =>
  deleteJson({
    url: `expenses/${expense_id}`,
    schema: z.any(),
  })
