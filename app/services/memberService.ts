import type { GroupType } from "~/types/groupType";
import { MemberDTOSchema } from "~/types/memberType";

export const getMembersByGroup = (groupId: GroupType["id"]) =>
  fetchJson({
    url: `groupes/${groupId}/members`,
    schema: MemberDTOSchema.array(),
  });
