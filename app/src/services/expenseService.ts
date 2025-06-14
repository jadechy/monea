import { fetchJson, postJson } from "@/lib/api"
import { ExpenseSchema } from "@/types/expense"
import { UserSchema, type CreateUserInputType } from "@/types/user"

export const createUser = async (input: CreateUserInputType) => {
  try {
    return await postJson({ url: "users", body: input, responseSchema: UserSchema })
  } catch (error) {
    console.error("Erreur lors du post de l'utilisateur :", error)
    return null
  }
}
export const fetchAllUser = async () => {
  try {
    return await fetchJson({ url: "users", schema: UserSchema.array() })
  } catch (error) {
    console.error("Erreur lors du fetch des utilisateurs :", error)
    return null
  }
}
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
