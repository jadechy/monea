import { z } from "zod";
import { CategorySchema } from "~/types/categoryType";
import {
  GroupSchema,
  type GroupType,
  type NewGroupType,
} from "~/types/groupType";
import { MemberDTOSchema } from "~/types/memberType";
import {
  UserUploadResponseSchema,
  type UserUploadResponseType,
} from "~/types/user";

export const FetchGroupByUserSchema = GroupSchema.extend({
  members: MemberDTOSchema.array().optional(),
});

export type FetchGroupByUserType = GroupType & {
  members?: Array<z.infer<typeof MemberDTOSchema>>;
  categories?: Array<z.infer<typeof CategorySchema>>;
};

export const useGroupService = () => {
  const { $api } = useNuxtApp();

  const getGroupByUser = (): Promise<FetchGroupByUserType[]> =>
    $api.get({
      url: `groupes/list`,
      schema: FetchGroupByUserSchema.array(),
    });

  const postGroup = (group: NewGroupType): Promise<{ message: string }> =>
    $api.post({
      url: "groupes",
      body: group,
      schema: z.object({ message: z.string() }),
    });

  const editGroup = (
    groupId: GroupType["id"],
    group: NewGroupType
  ): Promise<{ message: string }> =>
    $api.patch({
      url: `groupes/${groupId}`,
      body: group,
      schema: z.object({ message: z.string() }),
    });

  const deleteGroup = (groupId: GroupType["id"]): Promise<unknown> =>
    $api.delete({
      url: `groupes/${groupId}`,
      schema: z.any(),
    });
  const uploadFile = (
    groupId: number,
    user: FormData
  ): Promise<UserUploadResponseType> =>
    $api.upload({
      url: `groupes/${groupId}/picture`,
      body: user,
      schema: UserUploadResponseSchema,
    });

  return {
    getGroupByUser,
    postGroup,
    editGroup,
    deleteGroup,
    uploadFile,
  };
};
