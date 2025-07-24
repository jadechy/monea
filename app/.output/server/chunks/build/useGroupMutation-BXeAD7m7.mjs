import { useQueryClient, useMutation } from '@tanstack/vue-query';
import { h as useGroupService, u as useRouter } from './server.mjs';

const useGroupMutation = (group) => {
  const { postGroup, editGroup, deleteGroup, uploadFile } = useGroupService();
  const queryClient = useQueryClient();
  const invalidateQueries = async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ["groups-by-user"] })
    ]);
  };
  const router = useRouter();
  const createGroupMutation = useMutation({
    mutationFn: (data) => postGroup(data),
    onSuccess: async () => {
      await invalidateQueries();
      router.push({ name: "groups" });
    }
  });
  const editGroupMutation = useMutation({
    mutationFn: (data) => {
      var _a;
      if (!((_a = group == null ? void 0 : group.value) == null ? void 0 : _a.id)) {
        return Promise.reject(new Error("ID du groupe manquant"));
      }
      return editGroup(group.value.id, data);
    },
    onSuccess: async () => {
      await invalidateQueries();
      router.push({ name: "groups" });
    }
  });
  const deleteGroupMutation = useMutation({
    mutationFn: () => {
      var _a;
      if (!((_a = group.value) == null ? void 0 : _a.id)) {
        return Promise.reject(new Error("ID du groupe manquant"));
      }
      return deleteGroup(group.value.id);
    },
    onSuccess: async () => {
      await invalidateQueries();
      router.push({ name: "groups" });
    }
  });
  const uploadCoverGroupMutation = useMutation({
    mutationFn: async (file) => {
      var _a;
      const form = new FormData();
      form.append("picture", file);
      return uploadFile(Number((_a = group.value) == null ? void 0 : _a.id), form);
    },
    onSuccess: async () => {
      await invalidateQueries();
    },
    onError: (error) => {
      console.error("Upload failed", error);
      alert("Erreur lors de l'upload");
    }
  });
  return {
    createGroupMutation,
    editGroupMutation,
    deleteGroupMutation,
    uploadCoverGroupMutation
  };
};

export { useGroupMutation as u };
//# sourceMappingURL=useGroupMutation-BXeAD7m7.mjs.map
