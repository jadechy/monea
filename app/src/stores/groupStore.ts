import { fetchGroupByUser } from "@/services/groupService"
import type { GroupType } from "@/types/group"
import type { UserType } from "@/types/user"
import { defineStore } from "pinia"

export const useGroupStore = defineStore("group", {
  state: () => ({
    groups: [] as GroupType[],
    isLoaded: false,
  }),

  actions: {
    async fetchGroups(user_id: UserType["id"]) {
      if (this.isLoaded) return
      const res = await fetchGroupByUser(user_id)
      if (res === null) return
      this.groups = res
      this.isLoaded = true
    },

    async getGroups() {
      if (!this.isLoaded) await this.fetchGroups(1)
      return this.groups
    },

    async getGroupById(group_id: number) {
      if (!this.isLoaded) await this.fetchGroups(1)
      this.groups.map((group) => console.log(group.id, group_id))
      const findGroup = this.groups.find((group) => group.id === group_id)
      console.log(findGroup)
      if (!findGroup) return
      return findGroup
    },
  },
})
