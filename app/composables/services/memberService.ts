import { MemberDTOSchema } from "~/types/memberType";
import type { MemberDTOType } from "~/types/memberType";

export const useMemberService = () => {
  const { $api } = useNuxtApp();

  const getMembersByGroup = (groupId: string): Promise<MemberDTOType[]> =>
    $api.get({
      url: `groupes/${groupId}/members`,
      schema: MemberDTOSchema.array(),
    });

  return {
    getMembersByGroup,
  };
};
