import { useGroupsStore } from "@/stores/groupStore"
import { onMounted } from "vue"

export const useGroups = () => {
  const store = useGroupsStore()

  onMounted(async () => {
    if (store.groups.length === 0 && !store.loading) {
      await store.fetchGroups({ force: true })
    }
  })

  return store
}
