<script setup lang="ts">
import { ref, defineProps } from "vue";
import BaseSection from "~/components/ui-kit/BaseSection.vue";
import { Button, InputText, Select } from "primevue";
import { useMutation } from "@tanstack/vue-query";
import { useMemberService } from "~/composables/services/memberService";
import { MemberRoleEnum } from "~/types/memberEnumType";
import type { GroupType } from "~/types/groupType";

const props = defineProps<{
  group: GroupType | undefined;
}>();
const groupId = props.group?.id;
console.log(groupId);

const input = ref("");

const roles = MemberRoleEnum.options;
const selectedRole = ref(roles[0]);

const { sendInvitation } = useMemberService();

const sendInvitationMutation = useMutation({
  mutationFn: sendInvitation,
  onSuccess: () => {
    input.value = "";
  },
  onError: (error) => {
    console.error("Erreur lors de l'invitation :", error);
  },
});

const submitInvitation = () => {
  if (!input.value || !groupId) return;

  sendInvitationMutation.mutate({
    role: selectedRole.value,
    groupeId: groupId,
    username:
      input.value && !input.value.includes("@") ? input.value : undefined,
    mail: input.value && input.value.includes("@") ? input.value : undefined,
  });
};
</script>

<template>
  <BaseSection label="Ajouter un membre">
    <div class="flex flex-col w-full lg:w-3/4 gap-2">
      <InputText v-model="input" placeholder="Pseudo/mail" class="w-full" />

      <Select
        v-model="selectedRole"
        :options="roles"
        placeholder="Choisissez un role"
        class="w-full md:w-56"
      />

      <!-- <select v-model="selectedRole" class="w-full p-2 border rounded">
        <option v-for="role in roles" :key="role" :value="role">
          {{ role }}
        </option>
      </select> -->

      <Button
        variant="outlined"
        size="small"
        class="mt-2 ml-auto"
        @click="submitInvitation"
      >
        <i class="pi pi-inbox"></i> Envoyer la demande
      </Button>
    </div>
  </BaseSection>
</template>
