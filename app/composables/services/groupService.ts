import { z } from "zod";
import { CategorySchema } from "~/types/categoryType";
import {
  GroupSchema,
  type GroupType,
  type NewGroupType,
} from "~/types/groupType";
import { MemberDTOSchema } from "~/types/memberType";

export const FetchGroupByUserSchema = GroupSchema.extend({
  members: MemberDTOSchema.array().optional(),
  categories: CategorySchema.array().optional(),
});

export type FetchGroupByUserType = GroupType & {
  members?: Array<z.infer<typeof MemberDTOSchema>>;
  categories?: Array<z.infer<typeof CategorySchema>>;
};

export const getGroupByUser = (): Promise<FetchGroupByUserType[]> =>
  fetchJson({
    url: `groupes/list`,
    schema: FetchGroupByUserSchema.array(),
  });

export const postGroup = (group: NewGroupType): Promise<{ message: string }> =>
  postJson({
    url: "groupes",
    body: group,
    schema: z.object({ message: z.string() }),
  });

export const editGroup = (
  groupId: GroupType["id"],
  group: NewGroupType
): Promise<{ message: string }> =>
  patchJson({
    url: `groupes/${groupId}`,
    body: group,
    schema: z.object({ message: z.string() }),
  });

export const deleteGroup = (groupId: GroupType["id"]): Promise<unknown> =>
  deleteJson({
    url: `groupes/${groupId}`,
    schema: z.any(),
  });
