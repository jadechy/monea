import { useMutation, useQueryClient } from "@tanstack/vue-query";

import type { ComputedRef } from "vue";
import type { GroupType, NewGroupType } from "~/types/groupType";
import { useGroupService } from "./services/groupService";
import { useMatomoTracker } from "./useMatomoTracker";

export const useGroupMutation = (
  group: ComputedRef<GroupType | undefined | null>
) => {
  const { postGroup, editGroup, deleteGroup, uploadFile } = useGroupService();
  const queryClient = useQueryClient();
  const invalidateQueries = async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ["groups-by-user"] }),
    ]);
  };
  const router = useRouter();
  const { trackMatomoEvent } = useMatomoTracker();
  const createGroupMutation = useMutation({
    mutationFn: (data: NewGroupType) => postGroup(data),
    onSuccess: async () => {
      await invalidateQueries();
      router.push({ name: "groups" });
    },
  });

  const editGroupMutation = useMutation({
    mutationFn: (data: NewGroupType) => {
      if (!group?.value?.id) {
        return Promise.reject(new Error("ID du groupe manquant"));
      }
      trackMatomoEvent("Group", "Create", "create_group");
      return editGroup(group.value.id, data);
    },
    onSuccess: async () => {
      await invalidateQueries();
      router.push({ name: "groups" });
    },
  });
  const deleteGroupMutation = useMutation({
    mutationFn: () => {
      if (!group.value?.id) {
        return Promise.reject(new Error("ID du groupe manquant"));
      }
      return deleteGroup(group.value.id);
    },
    onSuccess: async () => {
      await invalidateQueries();
      router.push({ name: "groups" });
    },
  });
  const uploadCoverGroupMutation = useMutation({
    mutationFn: async (file: File) => {
      const form = new FormData();
      form.append("picture", file);
      return uploadFile(Number(group.value?.id), form);
    },
    onSuccess: async () => {
      await invalidateQueries();
    },
    onError: (error) => {
      console.error("Upload failed", error);
      alert("Erreur lors de l'upload");
    },
  });
  return {
    createGroupMutation,
    editGroupMutation,
    deleteGroupMutation,
    uploadCoverGroupMutation,
  };
};
