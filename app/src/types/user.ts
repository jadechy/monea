import { z } from "zod"

export const UserSchema = z.object({
  id: z.number(),
  username: z.string().min(3).max(50),
  name: z.string().nullable(),
  lastname: z.string().nullable(),
  email: z.string().email().nullable(),
  birthday: z.date(),
  password: z.string().nullable(),
  role: z.array(z.string()),
  createdAt: z.string().datetime().nullable(),
  picture: z.string().nullable(),
  resetToken: z.string().nullable(),
})

export const UserInOtherSchema = z.object({
  userId: UserSchema.shape.id,
  username: UserSchema.shape.username,
  picture: UserSchema.shape.picture,
})

export type UserInOtherType = z.infer<typeof UserInOtherSchema>
export type UserType = z.infer<typeof UserSchema>
