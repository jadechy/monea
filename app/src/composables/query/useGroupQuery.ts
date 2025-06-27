import { getGroupByUser } from "@/services/groupService"
import { useQuery } from "@tanstack/vue-query"
import { useAuthStore } from "@/stores/authStore"

export const useGroupsQuery = () => {
  const { user } = useAuthStore()

  return useQuery({
    queryKey: ["groups", user?.id],
    queryFn: async () => {
      if (!user) throw new Error("Utilisateur non connecté")
      return await getGroupByUser(user.id)
    },
    enabled: !!user, // Ne lance pas la requête tant que `user` n'existe pas
    staleTime: 1000 * 60 * 5, // 5 minutes de cache
  })
}
