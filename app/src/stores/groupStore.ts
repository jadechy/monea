import { getGroupByUser } from "@/services/groupService"
import type { GroupType } from "@/types/groupType"
import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useAuthStore } from "./authStore"
import { useQuery } from "@tanstack/vue-query"

export const useGroupsStore = defineStore("groups", () => {
  const { user } = useAuthStore()
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["groups-by-user", user?.id],
    queryFn: async () => {
      if (!user) throw new Error("Utilisateur non connecté")
      return await getGroupByUser(user.id)
    },
    enabled: !!user,
    staleTime: 1000 * 60 * 5,
  })

  const groups = computed(() => data?.value ?? [])

  const groupById = ({ id }: { id?: GroupType["id"] }) => {
    if (id === undefined) return null
    return groups.value.find((group) => group.id === Number(id))
  }
  const groupsNotPersonnal = computed(() =>
    groups.value.filter((group) => group.type !== "personnal"),
  )
  const groupsCount = computed(() => groupsNotPersonnal.value.length)

  const personnalGroup = computed(() => groups.value.find((group) => group.type === "personnal"))
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
  }
})
