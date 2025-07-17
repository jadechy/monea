import { h as useNuxtApp, I as InvitationResponseSchema, k as MemberInvitationSchema, l as MemberDTOSchema } from './server.mjs';

const useMemberService = () => {
  const { $api } = useNuxtApp();
  const getMembersByGroup = (groupId) => $api.get({
    url: `groupes/${groupId}/members`,
    schema: MemberDTOSchema.array()
  });
  const sendInvitation = ({ role, groupeId, username, mail }) => $api.post({
    url: `member/invitation`,
    body: { role, groupeId, username, mail },
    schema: InvitationResponseSchema
  });
  const getInvitations = (authorId) => $api.get({
    url: `member/invitation/${authorId}`,
    schema: MemberInvitationSchema.array()
  });
  const responseInvitation = (authorId, groupeId, response) => $api.post({
    url: `member/response/${authorId}/${groupeId}`,
    body: { response },
    schema: InvitationResponseSchema
  });
  return {
    getMembersByGroup,
    sendInvitation,
    getInvitations,
    responseInvitation
  };
};

export { useMemberService as u };
//# sourceMappingURL=memberService-C_FBnRAT.mjs.map
