import { useAuthStore } from "@/stores/authStore"
import { z } from "zod"

const API_URL = import.meta.env.VITE_API_URL

type Method = "GET" | "POST" | "PATCH" | "DELETE"

export interface RequestParams<T extends z.ZodTypeAny> {
  url: string
  schema: T
  method: Method
  body?: unknown
  options?: RequestInit
  contentType?: string
}

export const requestJson = async <T extends z.ZodTypeAny>({
  url,
  method,
  schema,
  body,
  options = {},
  contentType = "application/json",
}: RequestParams<T>): Promise<z.infer<T>> => {
  const authStore = useAuthStore()

  const makeRequest = async (token: string | null) => {
    const headers: HeadersInit = {
      "Content-Type": contentType,
      ...options.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }

    const res = await fetch(`${API_URL}/api/${url}`, {
      method,
      headers,
      ...(body ? { body: JSON.stringify(body) } : {}),
      ...options,
    })

    return res
  }

  let res = await makeRequest(authStore.token)

  if (res.status === 401) {
    try {
      const newToken = await authStore.refreshAuthToken()
      res = await makeRequest(newToken)
      if (res.status === 401) {
        authStore.clearAuth()
        throw new Error("Non autorisé, déconnexion")
      }
    } catch (err) {
      authStore.clearAuth()
      throw err
    }
  }

  if (!res.ok) {
    throw new Error(`Erreur API (${res.status})`)
  }

  const json = await res.json()
  const parsed = schema.safeParse(json)

  if (!parsed.success) {
    console.error("Erreur de validation Zod", parsed.error)
    throw new Error("Réponse invalide")
  }

  return parsed.data
}
