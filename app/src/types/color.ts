import { z } from "zod"

export const ColorSchema = z.enum([
  "pink",
  "red",
  "yellow",
  "orange",
  "blue",
  "green",
  "gray",
  "cyan",
  "indigo",
  "violet",
  "fuchsia",
  "teal",
  "brown",
])
export type ColorType = z.infer<typeof ColorSchema>
