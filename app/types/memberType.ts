import { z } from "zod";
import { UserDTOSchema } from "./user";
import { GroupSchema } from "./groupType";
import { dateSchema } from "./date";
import { MemberRoleEnum, MemberStatusEnum } from "./memberEnumType";

export const MemberSchema = z.object({
  role: MemberRoleEnum,
  addOn: dateSchema,
  groupe: GroupSchema,
  status: MemberStatusEnum,
  individual: UserDTOSchema,
});
export const MemberDTOSchema = MemberSchema.pick({
  role: true,
  addOn: true,
  status: true,
}).extend({
  user: UserDTOSchema,
});

export type MemberType = z.infer<typeof MemberSchema>;
export type MemberDTOType = z.infer<typeof MemberDTOSchema>;

export const InvitationSchema = z.object({
  role: MemberRoleEnum,
  groupeId: GroupSchema.shape.id,
  username: UserDTOSchema.shape.username.optional(),
  mail: z.string().email().optional(),
});

export type InvitationType = z.infer<typeof InvitationSchema>;

export const InvitationResponseSchema = z.object({ message: z.string() });
export type InvitationResponseType = z.infer<typeof InvitationResponseSchema>;

export const MemberInvitationSchema = z.object({
  role: MemberRoleEnum,
  group: GroupSchema,
  status: MemberStatusEnum,
  user: UserDTOSchema,
});

export type MemberInvitationType = z.infer<typeof MemberInvitationSchema>;