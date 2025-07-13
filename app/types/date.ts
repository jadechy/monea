import { z } from "zod"

export const DateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
  message: "Format attendu : YYYY-MM-DD",
})

const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?([+-]\d{2}:\d{2}|Z)$/

export const dateSchema = z.string().refine((val) => isoDateRegex.test(val), {
  message: "Invalid ISO 8601 datetime with timezone",
})
