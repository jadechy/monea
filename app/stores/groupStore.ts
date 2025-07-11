import { getGroupByUser } from "~/composables/services/groupService";
import { defineStore } from "pinia";
import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";

export const useGroupsStore = defineStore("groups", () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["groups-by-user"],
    queryFn: async () => {
      return await getGroupByUser();
    },
    staleTime: 1000 * 60 * 5,
  });

  const groups = computed(() => data?.value ?? []);

  const groupById = ({ id }: { id?: string }) => {
    if (id === undefined) return null;
    return groups.value.find((group) => group.id === Number(id));
  };
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
    groupById,
    isLoading,

    // Actions
    refetch,
  };
});
