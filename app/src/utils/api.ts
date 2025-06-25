import { useAuthStore } from "@/stores/authStore"
import { z } from "zod"
const API_URL = import.meta.env.VITE_API_URL
export async function postJson<T extends z.ZodTypeAny>({
  url,
  body,
  responseSchema,
  options,
}: {
  url: string
  body: unknown
  responseSchema: T
  options?: RequestInit
}): Promise<z.infer<T>> {
  const authStore = useAuthStore()

  async function makeRequest(token: string | null) {
    const headers: HeadersInit = {
      "Content-Type": "application/ld+json",
      ...options?.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
    const res = await fetch(`${API_URL}/api/${url}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
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

  const data = await res.json()
  return responseSchema.parse(data)
}

export async function fetchJson<T>({
  url,
  schema,
  options,
}: {
  url: string
  schema: z.ZodSchema<T>
  options?: RequestInit
}): Promise<T> {
  const authStore = useAuthStore()

  async function makeRequest(token: string | null) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options?.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
    const res = await fetch(`${API_URL}/api/${url}`, {
      headers,
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

  if (!res.ok) throw new Error(`Erreur API (${res.status})`)

  const json = await res.json()
  const parsed = schema.safeParse(json)
  if (!parsed.success) {
    console.error("Erreur de validation Zod", parsed.error)
    throw new Error("Réponse invalide")
  }

  return parsed.data
}

export async function patchJson<T extends z.ZodTypeAny>({
  url,
  body,
  responseSchema,
  options,
}: {
  url: string
  body: unknown
  responseSchema: T
  options?: RequestInit
}): Promise<z.infer<T>> {
  const authStore = useAuthStore()

  async function makeRequest(token: string | null) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options?.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
    const res = await fetch(`${API_URL}/api/${url}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body),
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

  if (!res.ok) throw new Error(`Erreur API (${res.status})`)

  const data = await res.json()
  return responseSchema.parse(data)
}

export async function deleteJson<T>({
  url,
  responseSchema,
  options,
}: {
  url: string
  responseSchema: z.ZodSchema<T>
  options?: RequestInit
}): Promise<T> {
  const authStore = useAuthStore()

  async function makeRequest(token: string | null) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options?.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
    const res = await fetch(`${API_URL}/api/${url}`, {
      method: "DELETE",
      headers,
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

  if (!res.ok) throw new Error(`Erreur API (${res.status})`)

  const data = await res.json()
  return responseSchema.parse(data)
}
