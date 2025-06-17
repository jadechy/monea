import { z } from "zod"

export const ColorSchema = z.enum([
  "pink",
  "red",
  "yellow",
  "orange",
  "blue",
  "purple",
  "green",
  "gray",
  "cyan",
  "brown",
])
export type ColorType = z.infer<typeof ColorSchema>
