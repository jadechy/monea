import { z } from "zod"
import { UserSchema } from "./user"
import { ColorSchema } from "./color"
import { DateSchema, DateTimeSchema } from "./date"

export const GroupSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  createdAt: z.string(),
  type: z.string().max(255),
  creator: z.string(),
  picture: z.string().max(255).nullable(),
  color: ColorSchema,
})
export const GroupDTOSchema = z.object({
  id: z.number(),
  name: z.string().max(255),
  createdAt: DateSchema,
  type: z.string().max(255),
  creator: UserSchema.shape.id,
  picture: z.string().max(255).nullable(),
  color: ColorSchema,
})
export type GroupType = z.infer<typeof GroupSchema>
export type GroupDTOType = z.infer<typeof GroupDTOSchema>

export type FindGroup = {
  id: GroupType["id"]
  name: GroupType["name"]
  color: GroupType["color"]
}
