import { defineStore } from "pinia";
import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { useGroupService } from "~/composables/services/groupService";

export const useGroupsStore = defineStore("groups", () => {
  const route = useRoute();
  const group_id = computed(() => route.params.group_id as string | undefined);
  const { getGroupByUser } = useGroupService();
  const { data, refetch } = useQuery({
    queryKey: ["groups-by-user"],
    queryFn: async () => {
      return await getGroupByUser();
    },
    staleTime: 1000 * 60 * 5,
  });

  const groups = computed(() => data?.value ?? []);

  const group = computed(() => {
    if (group_id.value === undefined) return undefined;
    return groups.value.find((group) => group.id === Number(group_id.value));
  });
  const groupsNotPersonnal = computed(() =>
    groups.value.filter((group) => group.type !== "personnal")
  );
  const groupsCount = computed(() => groupsNotPersonnal.value.length);

  const personnalGroup = computed(() =>
    groups.value.find((group) => group.type === "personnal")
  );

  return {
    // State
    groups: groupsNotPersonnal,
    personnalGroup,
    // Getters
    groupsCount,
    group,

    // Actions
    refetch,
  };
});
