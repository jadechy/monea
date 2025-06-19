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
  const authRouter = useAuthStore()
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options?.headers,
    ...(authRouter.token && { Authorization: `Bearer ${authRouter.token}` }),
  }
  const res = await fetch(`${API_URL}/api/${url}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })
  if (res.status === 401) authRouter.clearAuth()

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
  const authRouter = useAuthStore()
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options?.headers,
    ...(authRouter.token && { Authorization: `Bearer ${authRouter.token}` }),
  }
  const res = await fetch(`${API_URL}/api/${url}`, {
    headers,
    ...options,
  })
  if (res.status === 401) authRouter.clearAuth()
  if (!res.ok) throw new Error(`Erreur API (${res.status})`)
  const json = await res.json()
  console.log(json)
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
  const authRouter = useAuthStore()
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options?.headers,
    ...(authRouter.token && { Authorization: `Bearer ${authRouter.token}` }),
  }
  const res = await fetch(`${API_URL}/api/${url}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
    ...options,
  })

  const data = await res.json()
  return responseSchema.parse(data)
}

export async function deleteJson<T>({
  url,
  schema,
  options,
}: {
  url: string
  schema: z.ZodSchema<T>
  options?: RequestInit
}): Promise<T> {
  const authRouter = useAuthStore()
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options?.headers,
    ...(authRouter.token && { Authorization: `Bearer ${authRouter.token}` }),
  }
  const res = await fetch(`${API_URL}/api/${url}`, {
    method: "DELETE",
    headers,
    ...options,
  })

  if (!res.ok) throw new Error(`Erreur API (${res.status})`)

  const json = await res.json()

  const parsed = schema.safeParse(json)
  if (!parsed.success) {
    console.error("Erreur de validation Zod", parsed.error)
    throw new Error("Réponse invalide")
  }

  return parsed.data
}
