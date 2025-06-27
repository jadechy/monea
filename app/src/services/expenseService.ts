import { formatDateForApi } from "@/utils/date"
import {
  ExpenseDateSchema,
  ExpenseSchema,
  FetchNewExpenseSchema,
  type ExpenseType,
} from "@/types/expenseType"
import type { GroupType } from "@/types/group"
import { fetchJson } from "@/utils/apiMethods"

export const getExpenseById = async (id: ExpenseType["id"]) =>
  fetchJson({
    url: `expenses/${id}`,
    schema: ExpenseSchema,
  })

export const getAllExpensesByGroup = async (group_id: GroupType["id"]) =>
  fetchJson({
    url: `expenses/groupe/${group_id}/list`,
    schema: ExpenseDateSchema,
  })
export const getMonthlyExpensesByGroup = async (group_id: GroupType["id"], month: Date) =>
  fetchJson({
    url: `expenses/groupe/${group_id}/mois/${formatDateForApi(month)}/list`,
    schema: ExpenseDateSchema,
  })

export const getExpensesByGroupAndCategory = async (group_id: GroupType["id"]) =>
  fetchJson({
    url: `expenses/groupe/${group_id}/list`,
    schema: ExpenseDateSchema,
  })
