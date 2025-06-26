import { fetchJson } from "@/utils/apiClient"
import { formatDateForApi } from "@/utils/date"
import type { BudgetType } from "@/types/budget"
import {
  ExpenseDateSchema,
  ExpenseSchema,
  FetchNewExpenseSchema,
  type ExpenseType,
} from "@/types/expense"
import type { GroupType } from "@/types/group"

export const fetchExpense = async (id: ExpenseType["id"]) => {
  try {
    return await fetchJson({
      url: `expenses/${id}`,
      schema: ExpenseSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
export const fetchAllExpenseByGroup = async (group_id: GroupType["id"]) => {
  try {
    return await fetchJson({
      url: `expenses/groupe/${group_id}/list`,
      schema: ExpenseDateSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
export const fetchAllExpenseByGroupAndMonth = async (group_id: GroupType["id"], month: Date) => {
  try {
    return await fetchJson({
      url: `expenses/groupe/${group_id}/mois/${formatDateForApi(month)}/list`,
      schema: ExpenseDateSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
export const fetchAllExpenseByCategory = async (group_id: GroupType["id"]) => {
  try {
    return await fetchJson({
      url: `expenses/groupe/${group_id}/list`,
      schema: ExpenseDateSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
export const fetchAllExpenseByCategoryAndMonth = async (
  group_id: GroupType["id"],
  month: BudgetType["monthStart"],
) => {
  try {
    return await fetchJson({
      url: `expenses/groupe/${group_id}/${month}/list`,
      schema: ExpenseDateSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
export const fetchNewExpense = async (id: string) => {
  try {
    return await fetchJson({
      url: `expenses/new/${id}`,
      schema: FetchNewExpenseSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
