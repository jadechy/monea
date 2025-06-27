import { getGroupByUser } from "@/services/groupService"
import type { GroupType } from "@/types/groupType"
import { defineStore } from "pinia"
import { computed } from "vue"
import { useAuthStore } from "./authStore"
import { useQuery } from "@tanstack/vue-query"

export const useGroupsStore = defineStore("groups", () => {
  // State

  // Getters
  const groupsCount = computed(() => groups.value.length)
  const groupById = ({ id }: { id: GroupType["id"] }) => {
    return groups.value.find((group) => group.id === Number(id))
  }
  const { user } = useAuthStore()

  const { data, refetch } = useQuery({
    queryKey: ["groups-by-user", user?.id],
    queryFn: async () => {
      if (!user) throw new Error("Utilisateur non connecté")
      return await getGroupByUser(user.id)
    },
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
  })
  const groups = computed(() => data.value ?? [])

  return {
    // State
    groups,

    // Getters
    groupsCount,
    groupById,

    // Actions
    refetch,
  }
})
