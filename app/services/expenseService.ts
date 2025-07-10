import { formatDateISO } from "../../../app/utils/date"
import {
  ExpenseDateSchema,
  ExpenseSchema,
  type ExpenseType,
  type NewExpenseType,
} from "../../../app/types/expenseType"
import type { GroupType } from "../../../app/types/groupType"
import { deleteJson, fetchJson, patchJson, postJson } from "../../../app/utils/apiMethods"
import { z } from "zod"
import type { CategoryType } from "../../../app/types/categoryType"

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
