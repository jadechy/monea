import { z } from "zod"

export const UserSchema = z.object({
  id: z.number(),
  username: z.string().min(3).max(50),
  name: z.string().nullable(),
  lastname: z.string().nullable(),
  email: z.string().email().nullable(),
  password: z.string().nullable(),
  role: z.array(z.string()),
  createdAt: z.string().datetime().nullable(),
  picture: z.string().nullable(),
  resetToken: z.string().nullable(),
})

export const CreateUserInput = z.object({
  email: UserSchema.shape.email,
  name: UserSchema.shape.name,
  lastname: UserSchema.shape.lastname,
  username: UserSchema.shape.username,
  picture: UserSchema.shape.picture,
  password: z.string(),
})

export const UserInOtherSchema = z.object({
  userId: UserSchema.shape.id,
  username: UserSchema.shape.username,
  picture: UserSchema.shape.picture,
})

export type UserInOtherType = z.infer<typeof UserInOtherSchema>
export type CreateUserInputType = z.infer<typeof CreateUserInput>
export type UserType = z.infer<typeof UserSchema>
