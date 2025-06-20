import { fetchGroupByUser, type FetchGroupByUserType } from "@/services/groupService"
import type { ErrorType } from "@/types/error"
import type { GroupType } from "@/types/group"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useGroupsStore = defineStore("groups", () => {
  // State
  const groups = ref<FetchGroupByUserType[]>([])
  const loading = ref(false)
  const error = ref<ErrorType>(null)
  const lastFetch = ref<number | null>(null)

  // Getters
  const groupsCount = computed(() => groups.value.length)
  const groupById = ({ id }: { id: GroupType["id"] }) => {
    return groups.value.find((group) => group.id === Number(id))
  }

  async function fetchGroups({ force = false }: { force?: boolean }) {
    const now = Date.now()
    if (!force && lastFetch.value && now - lastFetch.value < 5 * 60 * 1000) {
      return groups.value
    }

    loading.value = true
    error.value = null

    try {
      const res = await fetchGroupByUser(1)
      if (res === null) {
        return (error.value = "Erreur lors du chargement des utilisateurs")
      }
      groups.value = res
      return res
    } catch (err: any) {
      error.value = err.message
      console.error("Erreur lors de la récupération des groupes:", err)
      throw err
    } finally {
      loading.value = false
    }
  }

  function addGroup(group: FetchGroupByUserType) {
    groups.value.push(group)
  }

  function updateGroup({
    id,
    updatedGroup,
  }: {
    id: FetchGroupByUserType["id"]
    updatedGroup: FetchGroupByUserType
  }) {
    const index = groups.value.findIndex((g) => g.id === id)
    if (index !== -1) {
      groups.value[index] = { ...groups.value[index], ...updatedGroup }
    }
  }

  function removeGroup({ id }: { id: GroupType["id"] }) {
    const index = groups.value.findIndex((g) => g.id === id)
    if (index !== -1) {
      groups.value.splice(index, 1)
    }
  }

  function clearGroups() {
    groups.value = []
    lastFetch.value = null
  }

  return {
    // State
    groups,
    loading,
    error,

    // Getters
    groupsCount,
    groupById,

    // Actions
    fetchGroups,
    addGroup,
    updateGroup,
    removeGroup,
    clearGroups,
  }
})
