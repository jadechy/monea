import { useQuery } from "@tanstack/vue-query";

import { useMemberService } from "./services/memberService";

export const useMemberMutation = () => {
  const route = useRoute();
  const { group_id } = route.params as {
    group_id: string;
  };
  const { getMembersByGroup } = useMemberService();

  const { data: members } = useQuery({
    queryKey: ["members-by-group", group_id],
    queryFn: () => getMembersByGroup(group_id),
    enabled: !!group_id,
  });
  return { members };
};
