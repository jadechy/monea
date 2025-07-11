import { MemberDTOSchema } from "~/types/memberType";
import type { MemberDTOType } from "~/types/memberType";

export const getMembersByGroup = (groupId: string): Promise<MemberDTOType[]> =>
  fetchJson({
    url: `groupes/${groupId}/members`,
    schema: MemberDTOSchema.array(),
  });
