import { postJson } from "@/lib/api"
import {loginResponseSchema } from "@/types/auth"

export const login = async (username: string, password: string) => {
  try {
    return await postJson({
      url: "login",
      body: { username, password },
      responseSchema: loginResponseSchema,
    })
  } catch (error) {
    console.error("Erreur lors du post de l'utilisateur :", error)
    return null
  }
}