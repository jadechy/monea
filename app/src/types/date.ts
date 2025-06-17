import { z } from "zod"
const normalizeDate = (dateStr: string) => dateStr.replace(/\+00:00$/, "Z")
export const DateTimeSchema = z.preprocess(
  (arg) => (typeof arg === "string" ? normalizeDate(arg) : arg),
  z.string().datetime(),
)
export const DateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
  message: "Format attendu : YYYY-MM-DD",
})
