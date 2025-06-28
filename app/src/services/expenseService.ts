import { formatDateForApi } from "@/utils/date"
import {
  ExpenseDateSchema,
  ExpenseSchema,
  type ExpenseType,
  type NewExpenseType,
} from "@/types/expenseType"
import type { GroupType } from "@/types/groupType"
import { fetchJson, postJson } from "@/utils/apiMethods"
import { z } from "zod"

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
    url: `expenses/groupe/${group_id}/mois/${formatDateForApi(month)}/list`,
    schema: ExpenseDateSchema,
  })

export const getExpensesByGroupAndCategory = (group_id: GroupType["id"]) =>
  fetchJson({
    url: `expenses/groupe/${group_id}/list`,
    schema: ExpenseDateSchema,
  })

export const postExpense = (expense: NewExpenseType) =>
  postJson({
    url: "expense/new",
    body: expense,
    schema: z.object({ message: z.string() }),
  })
