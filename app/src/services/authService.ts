import { postJson } from "@/lib/api"
import { LoginResponseSchema, type LoginRequestType } from "@/types/auth"

export const loginAuth = async ({ username, password }: LoginRequestType) => {
  try {
    return await postJson({
      url: "login",
      body: { username, password },
      responseSchema: LoginResponseSchema,
    })
  } catch (error) {
    console.error("Erreur lors du post de l'utilisateur :", error)
    return null
  }
}
