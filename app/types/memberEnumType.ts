import { z } from "zod"

export const MemberRoleEnum = z.enum(["author", "admin", "viewer", "member", "anonyme", "banned"])
export const MemberStatusEnum = z.enum(["pending", "accepted", "refused", "deleted"])
