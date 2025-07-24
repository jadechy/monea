import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";

import { useMemberService } from "./services/memberService";
import type { MemberInvitationType } from "~/types/memberType";

export const useMemberMutation = () => {
  const route = useRoute();
  const { group_id } = route.params as {
    group_id: string;
  };
  const { getMembersByGroup, getInvitations, responseInvitation } =
    useMemberService();
  const queryClient = useQueryClient();

  const { data: members } = useQuery({
    queryKey: ["members-by-group", group_id],
    queryFn: () => getMembersByGroup(group_id),
    enabled: !!group_id,
  });

  const { data: invitations } = useQuery({
    queryKey: ["invitation"],
    queryFn: () => getInvitations(),
  });

  const invitationMutation = useMutation({
    mutationFn: (data: {
      accepted: boolean;
      invitation: MemberInvitationType;
    }) =>
      responseInvitation(data.invitation.group.id.toString(), data.accepted),
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["invitation"],
      });
    },
  });
  return { members, invitations, invitationMutation };
};
