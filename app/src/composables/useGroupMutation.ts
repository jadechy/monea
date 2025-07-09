import { useMutation, useQueryClient } from "@tanstack/vue-query"
import router from "@/router"
import type { GroupType, NewGroupType } from "@/types/groupType"
import { deleteGroup, editGroup, postGroup } from "@/services/groupService"
import type { UserType } from "@/types/user"
import type { ComputedRef } from "vue"
import { useAuthStore } from "@/stores/authStore"

export const useGroupMutation = (group: ComputedRef<GroupType | undefined | null>) => {
  const { user } = useAuthStore()

  const queryClient = useQueryClient()
  const invalidateQueries = async () => {
    await Promise.all([queryClient.invalidateQueries({ queryKey: ["groups-by-user"] })])
  }

  const createGroupMutation = useMutation({
    mutationFn: (data: NewGroupType) => postGroup(data),
    onSuccess: async () => {
      await invalidateQueries()
      router.push({ name: "spaces" })
    },
  })

  const editGroupMutation = useMutation({
    mutationFn: (data: NewGroupType) => {
      if (!group?.value?.id) {
        return Promise.reject(new Error("ID du groupe manquant"))
      }

      return editGroup(group.value.id, data)
    },
    onSuccess: async () => {
      await invalidateQueries()
      router.push({ name: "spaces" })
    },
  })
  const deleteGroupMutation = useMutation({
    mutationFn: () => {
      if (!group.value?.id) {
        return Promise.reject(new Error("ID du groupe manquant"))
      }
      return deleteGroup(group.value.id)
    },
    onSuccess: async () => {
      await invalidateQueries()
      router.push({ name: "spaces" })
    },
  })
  return {
    createGroupMutation,
    editGroupMutation,
    deleteGroupMutation,
  }
}
