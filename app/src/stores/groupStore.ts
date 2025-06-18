import { fetchGroupByUser } from "@/services/groupService"
import type { GroupType } from "@/types/group"
import type { UserType } from "@/types/user"
import { defineStore } from "pinia"
import { computed, readonly, ref } from "vue"

export const useGroupStore = defineStore("group", () => {
  const user_id: UserType["id"] = 1
  const groups = ref<GroupType[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  let hasInitialized = false

  const fetchGroups = async () => {
    if (hasInitialized || isLoading.value) return

    isLoading.value = true
    error.value = null

    try {
      const res = await fetchGroupByUser(user_id)
      if (res !== null) {
        groups.value = res
        hasInitialized = true
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Erreur lors du chargement"
    } finally {
      isLoading.value = false
    }
  }

  const autoInit = () => {
    if (!hasInitialized || !isLoading.value) {
      fetchGroups()
    }
  }

  const safeGroups = computed(() => {
    autoInit()
    return groups.value
  })

  const getGroupById = (group_id: number): GroupType | null => {
    autoInit()
    return groups.value.find((group) => group.id === Number(group_id)) || null
  }
  return {
    groups: safeGroups,
    isLoading: readonly(isLoading),
    error: readonly(error),
    getGroupById,
    refresh: fetchGroups,
  }
})
