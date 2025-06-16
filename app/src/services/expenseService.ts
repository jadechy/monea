import { fetchJson } from "@/lib/api"
import { ExpenseSchema, FetchNewExpenseSchema } from "@/types/expense"

export const fetchExpense = async (id: string) => {
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
