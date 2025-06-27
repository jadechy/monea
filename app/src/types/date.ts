import { z } from "zod"

export const DateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
  message: "Format attendu : YYYY-MM-DD",
})
