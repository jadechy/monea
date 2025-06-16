import { z } from "zod"
const normalizeDate = (dateStr: string) => dateStr.replace(/\+00:00$/, "Z")
export const DateTimeSchema = z.preprocess(
  (arg) => (typeof arg === "string" ? normalizeDate(arg) : arg),
  z.string().datetime(),
)
export const DateSchema = z.object({
  date: z.string(),
  timezone_type: z.number(),
  timezone: z.string(),
})
