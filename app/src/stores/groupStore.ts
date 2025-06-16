import { fetchGroupByUser } from "@/services/groupService"
import type { GroupDTOType, GroupType } from "@/types/group"
import type { UserType } from "@/types/user"
import { defineStore } from "pinia"

export const useGroupStore = defineStore("group", {
  state: () => ({
    groups: [] as GroupDTOType[],
    isLoaded: false,
  }),

  actions: {
    async fetchGroups(user_id: UserType["id"]) {
      if (this.groups.length === 0) this.getGroups()

      if (this.isLoaded) return
      const res = await fetchGroupByUser(user_id)
      if (res === null) return
      this.groups = res
      this.isLoaded = true
    },

    getGroups() {
      return this.groups
    },

    getGroupById(id: number) {
      return this.groups.find((group) => group.id === id)
    },
  },
})
