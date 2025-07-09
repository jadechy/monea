import type { GroupType } from "@/types/groupType"

export const hasEditPermission = (group: GroupType) =>
  group.userRole == "admin" || group.userRole === "author"
