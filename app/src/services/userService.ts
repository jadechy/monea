import { fetchJson, postJson } from "@/lib/api"
import { userSchema, type CreateUserInputSchema } from "@/schemas/user"

export const createUser = async (input: CreateUserInputSchema) => {
  try {
    return await postJson({ url: "users", body: input, responseSchema: userSchema })
  } catch (error) {
    console.error("Erreur lors du post de l'utilisateur :", error)
    return null
  }
}
export const fetchAllUser = async () => {
  try {
    return await fetchJson({ url: "users", schema: userSchema.array() })
  } catch (error) {
    console.error("Erreur lors du fetch des utilisateurs :", error)
    return null
  }
}
export const fetchUser = async (id: string) => {
  try {
    return await fetchJson({
      url: `users/${id}`,
      schema: userSchema,
    })
  } catch (error) {
    console.error("Erreur lors du fetch de l'utilisateur :", error)
    return null
  }
}
