import { z } from "zod"

export const userSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  modifiedAt: z.date(),
  firstname: z.string(),
  lastname: z.string(),
  pseudonyme: z.string(),
  email: z.string().email(),
  role: z.enum(["admin", "user"]).default("user").optional(),
  profilPicture: z.string().optional(),
})
export const createUserInput = z.object({
  email: userSchema.shape.email,
  role: userSchema.shape.role,
  firstname: userSchema.shape.firstname,
  lastname: userSchema.shape.lastname,
  pseudonyme: userSchema.shape.pseudonyme,
  profilPicture: userSchema.shape.profilPicture,
  password: z.string(),
})

export type CreateUserInputSchema = z.infer<typeof createUserInput>
export type UserSchema = z.infer<typeof userSchema>
