import type { GroupType } from "../../../app/types/groupType"
import { MemberDTOSchema } from "../../../app/types/memberType"
import { fetchJson } from "../../../app/utils/apiMethods"

export const getMembersByGroup = (groupId: GroupType["id"]) =>
  fetchJson({
    url: `groupes/${groupId}/members`,
    schema: MemberDTOSchema.array(),
  })
