import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";

import { useMemberService } from "./services/memberService";

export const useMemberMutation = () => {
  const route = useRoute();
  const { group_id, category_id, expense_id } = route.params as {
    group_id: string;
    category_id?: string;
    expense_id?: string;
  };
  const { getMembersByGroup } = useMemberService();
  const queryClient = useQueryClient();
  const invalidateQueries = async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ["groups-by-user"] }),
    ]);
  };
  const { data: members } = useQuery({
    queryKey: ["members-by-group", group_id],
    queryFn: () => getMembersByGroup(group_id),
    enabled: !!group_id,
  });
  return { members };
};
