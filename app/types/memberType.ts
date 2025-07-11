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
