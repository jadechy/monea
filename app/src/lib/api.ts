import { z } from "zod"
const API_URL = import.meta.env.VITE_API_URL
export async function postJson<T extends z.ZodTypeAny>({
  url,
  body,
  responseSchema,
}: {
  url: string
  body: unknown
  responseSchema: T
}): Promise<z.infer<T>> {
  const res = await fetch(`${API_URL}/api/${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })

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
  const res = await fetch(`${API_URL}/api/${url}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  })

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
}: {
  url: string
  body: unknown
  responseSchema: T
}): Promise<z.infer<T>> {
  const res = await fetch(`${API_URL}/api/${url}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
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
  const res = await fetch(`${API_URL}/api/${url}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
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
