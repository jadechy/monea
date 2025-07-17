import { MemberDTOSchema, InvitationResponseSchema, MemberInvitationSchema } from "~/types/memberType";
import type { MemberDTOType , InvitationResponseType, InvitationType, MemberInvitationType} from "~/types/memberType";

export const useMemberService = () => {
  const { $api } = useNuxtApp();

  const getMembersByGroup = (groupId: string): Promise<MemberDTOType[]> =>
    $api.get({
      url: `groupes/${groupId}/members`,
      schema: MemberDTOSchema.array(),
    });
  
  const sendInvitation = ({role, groupeId, username, mail}:InvitationType): Promise<InvitationResponseType> =>
    $api.post({
      url: `member/invitation`,
      body: {role, groupeId, username, mail},
      schema: InvitationResponseSchema,
    });
  
  const getInvitations = (authorId: string): Promise<MemberInvitationType[]> =>
    $api.get({
      url: `member/invitation/${authorId}`,
      schema: MemberInvitationSchema.array(),
    });
  
  const responseInvitation = (authorId: Number, groupeId: string, response: boolean): Promise<InvitationResponseType> =>
    $api.post({
      url: `member/response/${authorId}/${groupeId}`,
      body: {response},
      schema: InvitationResponseSchema,
    });

  return {
    getMembersByGroup,
    sendInvitation,
    getInvitations,
    responseInvitation
  };
};
